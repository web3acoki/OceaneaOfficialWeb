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
  const onLogoClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

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
  
  const navItemClass = "hover:opacity-75 ft-[24/660] cursor-pointer";
  const navDividerClass = "opacity-75 ft-[14/660]";

  return <>
    <div className="fixed z-50 w-[min(calc(100vw-80px),1320px)] -translate-x-1/2 left-1/2">
      <div className="relative fmt-[26/1320] aspect-1320/80 flex rounded-full bg-white shadow-[0px_0px_12px_3px_rgba(0,0,0,0.15)]">
        <button type="button" aria-label="Back to top" onClick={onLogoClick} className="fm-[25/1320] cursor-pointer">
          <img src="/logo.svg" className="w-full h-full"/>
        </button>

        <div className="absolute left-1/2 top-1/2 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 @container-[size]">
          <div className="flex items-center whitespace-nowrap fg-[32/660]">
            <p className={navItemClass}>Product</p>
            <p className={navDividerClass}>|</p>
            <p className={navItemClass}>Earn</p>
            <p className={navDividerClass}>|</p>
            <p className={navItemClass}>Build</p>
            <p className={navDividerClass}>|</p>
            <p className={navItemClass}>Learn</p>
            <p className={navDividerClass}>|</p>
            <p className={navItemClass}>Join Oceanea</p>
          </div>
        </div>

        <Button text={buttonText} className="ml-auto fm-[15/1320] aspect-166/53" onClick={onButtonClick}/>
      </div>
    </div>
    <Menu open={open} displayName={displayName} onClose={() => setOpen(false)}/>
  </>;
}