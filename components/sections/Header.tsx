"use client";

import { useEffect, useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import Button from "../common/Button";
import Menu from "../features/Menu";
import { loginWithBackend } from "../../services/login";
import { privyUserRef } from "../../services/http";
import { getUserInfo } from "../../services/userinfo";

export default function Header() {
  const { login, authenticated, user } = usePrivy();
  const [displayName, setDisplayName] = useState("");
  const [open, setOpen] = useState(false);
  const toShortText = (text: string) => text.slice(0, 10);
  const buttonText = displayName ? toShortText(displayName) : "Log in";
  const onButtonClick = () => displayName ? setOpen(true) : login();

  useEffect(() => {
    privyUserRef.current = authenticated && user ? user : null;
    const syncButtonText = async () => {
      if (authenticated && user) await loginWithBackend(user);
      const res = await getUserInfo();
      setDisplayName(res.data.displayName || "");
    };
    void syncButtonText().catch(() => {});
  }, [authenticated, user]);

  useEffect(() => {
    if (!authenticated || !user) return;
    const intervalMs = 20 * 60 * 1000;
    const id = window.setInterval(() => {
      void loginWithBackend(user).catch(() => {});
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [authenticated, user]);

  return <>
    <div className="relative -translate-x-1/2 left-1/2 mt-[40px] w-[1320px] h-[80px] flex rounded-full shadow-[0px_3px_6px_2px_rgba(0,0,0,0.06)]">
      <img src="/logo.svg" className="fm-[25/1320]" />
      <Button text={buttonText} className="ml-auto fm-[15/1320] aspect-166/53" onClick={onButtonClick}/>
    </div>
    <Menu open={open} displayName={displayName} onClose={() => setOpen(false)} />
  </>;
}