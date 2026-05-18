"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";
import Button from "../common/Button";
import Menu from "../features/Menu";
import { useMobileMode } from "../features/MobileMode";
import { navLinkColumns, navLinkHref, navTopLabels } from "../nav/siteNav";
import { loginWithBackend } from "../../services/login";
import { privyUserRef } from "../../services/http";
import { getUserInfo } from "../../services/userinfo";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { login, authenticated, user } = usePrivy();
  const isMobileMode = useMobileMode();
  const [displayName, setDisplayName] = useState("");
  const [open, setOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  /** 桌面端：当前展开的下拉对应 `navTopLabels` 下标；`null` 为关闭 */
  const [navDropdownIndex, setNavDropdownIndex] = useState<number | null>(null);
  const desktopNavClusterRef = useRef<HTMLDivElement>(null);
  const toShortText = (text: string) => text.slice(0, 10);
  const buttonText = displayName ? toShortText(displayName) : "Log in";
  const onButtonClick = () => displayName ? setOpen(true) : login();
  const onLogoClick = () => {
    if (pathname === "/home" || pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    router.push("/home");
  };

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

  useEffect(() => {
    if (navDropdownIndex === null) return;
    const onDocMouseDown = (e: MouseEvent) => {
      const el = desktopNavClusterRef.current;
      if (el && !el.contains(e.target as Node)) setNavDropdownIndex(null);
    };
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, [navDropdownIndex]);

  useEffect(() => {
    if (navDropdownIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setNavDropdownIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navDropdownIndex]);
  
  return <>
      {!isMobileMode && <>  
        <div className="fixed z-50 w-[min(calc(100vw-80px),1320px)] -translate-x-1/2 left-1/2">
          <div className="relative fmt-[26/1320] aspect-1320/80 flex rounded-full bg-white shadow-[0px_0px_12px_3px_rgba(0,0,0,0.15)]">
            <button type="button" aria-label="Go to home" onClick={onLogoClick} className="fm-[25/1320] cursor-pointer">
              <img src="/logo.svg" className="w-full h-full"/>
            </button>
            <div className="absolute left-21/40 top-1/2 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 @container-[size]">
              <div ref={desktopNavClusterRef} className="flex items-center whitespace-nowrap fg-[38/660]">
                {navTopLabels.map((label, i) => (
                  <Fragment key={label}>
                    <span className="relative inline-block align-middle">
                      <button
                        type="button"
                        className="hover:opacity-75 ft-[27/660] cursor-pointer border-0 bg-transparent p-0 font-inherit text-inherit"
                        aria-expanded={navDropdownIndex === i}
                        aria-haspopup="menu"
                        aria-controls={`header-nav-menu-${label}`}
                        id={`header-nav-trigger-${label}`}
                        onClick={() => setNavDropdownIndex((v) => (v === i ? null : i))}
                      >
                        {label}
                      </button>
                      {navDropdownIndex === i && (
                        <div
                          id={`header-nav-menu-${label}`}
                          role="menu"
                          aria-labelledby={`header-nav-trigger-${label}`}
                          className="absolute left-1/2 top-full z-[60] mt-[0.4em] min-w-[12.5rem] -translate-x-1/2 rounded-2xl border border-[#0c0c0c]/10 bg-white px-1 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.14)]"
                        >
                          {navLinkColumns[i].map((item) => {
                            const href = navLinkHref[item];
                            const rowCls =
                              "block w-full cursor-pointer whitespace-nowrap rounded-xl px-4 py-2.5 text-left ft-[16/660] font-medium text-[#0c0c0c] no-underline outline-none hover:bg-[#0c0c0c]/[0.06] focus-visible:bg-[#0c0c0c]/[0.08]";
                            return href ? (
                              <Link
                                key={item}
                                role="menuitem"
                                href={href}
                                className={rowCls}
                                onClick={() => setNavDropdownIndex(null)}
                              >
                                {item}
                              </Link>
                            ) : (
                              <span key={item} role="menuitem" className={`${rowCls} cursor-default opacity-50`}>
                                {item}
                              </span>
                            );
                          })}
                        </div>
                      )}
                    </span>
                    <p className="opacity-75 ft-[15/660]">|</p>
                  </Fragment>
                ))}
                <p className="hover:opacity-75 ft-[27/660] cursor-pointer">Join Oceanea</p>
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
            <button type="button" aria-label="Go to home" onClick={onLogoClick} className="z-50 fmx-[20/115] cursor-pointer">
              <img src="/logo.svg" className="w-full h-full"/>
            </button>
          </div>
          <Button text={buttonText} className="fmt-[12/340] fml-[100/340] w-75/340 aspect-166/53" onClick={onButtonClick}/>
          <div className="relative z-30 fmt-[12/340] w-25/340 flex rounded-full bg-white shadow-[0px_3px_6px_2px_rgba(0,0,0,0.10)]">
            <button type="button" aria-label="Open menu" onClick={() => setMobileNavOpen((v) => !v)} className="relative w-full aspect-square">
              <div className="rounded-full shadow-[0px_4px_7.1px_0px_rgba(0,0,0,0.15)]"/>
              <img src="/header/mobile-menu-icon.svg" alt="" className="fmx-[5/25] aspect-square"/>
            </button>
          </div>
          {mobileNavOpen && (
            <div className="absolute z-20 fml-[195/340] w-150/340 @container-[size]">
              <img className="absolute w-full aspect-150/180 pointer-events-none" src="/header/mobile-menu-bg.svg" />
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