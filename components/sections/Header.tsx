"use client";

import { useEffect, useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import Button from "../common/Button";
import Menu from "../features/Menu";
import { useMobileMode } from "../features/MobileMode";
import { loginWithBackend } from "../../services/login";
import { privyUserRef } from "../../services/http";
import { getUserInfo } from "../../services/userinfo";

export default function Header() {
  const { login, authenticated, user } = usePrivy();
  const isMobileMode = useMobileMode();
  const [displayName, setDisplayName] = useState("");
  const [open, setOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
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
  
  return <>
      {!isMobileMode && <>  
        <div className="fixed z-50 w-[min(calc(100vw-80px),1320px)] -translate-x-1/2 left-1/2">
          <div className="relative fmt-[26/1320] aspect-1320/80 flex rounded-full bg-white shadow-[0px_0px_12px_3px_rgba(0,0,0,0.15)]">
            <button type="button" aria-label="Back to top" onClick={onLogoClick} className="fm-[25/1320] cursor-pointer">
              <img src="/logo.svg" className="w-full h-full"/>
            </button>
            <div className="absolute left-21/40 top-1/2 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 @container-[size]">
              <div className="flex items-center whitespace-nowrap fg-[38/660]">
                {["Product", "Build", "Learn", "Join Oceanea"].map((label, idx, arr) => (
                  <div key={label} className="contents">
                    <p className="hover:opacity-75 ft-[27/660] cursor-pointer">{label}</p>
                    {idx < arr.length - 1 && <p className="opacity-75 ft-[15/660]">|</p>}
                  </div>
                ))}
              </div>
            </div>
            <Button text={buttonText} className="ml-auto fm-[15/1320] aspect-166/53" onClick={onButtonClick}/>
            </div>
          </div>
        </>
      }

      {isMobileMode && <>
        <div className="fixed z-50 w-[min(calc(100vw-80px),1320px)] -translate-x-1/2 left-1/2 flex flex-row items-center justify-between">
          <div className="relative fmt-[12/340] aspect-115/25 w-115/340 flex rounded-full bg-white shadow-[0px_3px_6px_2px_rgba(0,0,0,0.10)] ">
            <button type="button" aria-label="Back to top" onClick={onLogoClick} className="fmx-[20/115] cursor-pointer">
              <img src="/logo.svg" className="w-full h-full"/>
            </button>
          </div>
          <div className="relative z-20 fmt-[12/340] w-25/340 flex rounded-full bg-white shadow-[0px_3px_6px_2px_rgba(0,0,0,0.10)]">
            <button type="button" aria-label="Open menu" onClick={() => setMobileNavOpen((v) => !v)} className="relative w-full aspect-square">
              <div className="rounded-full shadow-[0px_4px_7.1px_0px_rgba(0,0,0,0.15)]"/>
              <img src="/header/mobile-menu-icon.svg" alt="" className="fmx-[5/25] aspect-square"/>
            </button>
          </div>
          {mobileNavOpen && (
            <div className="absolute z-20 fml-[195/340] w-150/340 @container-[size]">
              <img className="absolute w-full aspect-150/180" src="/header/mobile-menu-bg.svg" />
              <div className="absolute fmt-[30/150] fml-[25/150] grid fg-[18/150] ">
                {["Product","Build","Learn","Join Oceanea",].map((label) => (
                  <div key={label} className="contents">
                    <p className="text-right ft-[15/150] hover:opacity-75 cursor-pointer">
                      {label} <span aria-hidden className=" inline-block w-10/340 text-center">·</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </>}

    <Menu open={open} displayName={displayName} onClose={() => setOpen(false)}/>
  </>;
}