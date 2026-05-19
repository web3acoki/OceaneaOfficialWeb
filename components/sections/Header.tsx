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

const mobileMenuItems = ["Product", "Earn", "Build", "Learn", "Join Oceanea"] as const;

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { login, authenticated, user } = usePrivy();
  const isMobileMode = useMobileMode();
  const [displayName, setDisplayName] = useState("");
  const [open, setOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileActiveSubItem, setMobileActiveSubItem] = useState<string | null>(null);
  /** 桌面端：当前展开的下拉对应 `navTopLabels` 下标；`null` 为关闭 */
  const [navDropdownIndex, setNavDropdownIndex] = useState<number | null>(null);
  const desktopNavClusterRef = useRef<HTMLDivElement>(null);
  const toShortText = (text: string) => text.slice(0, 10);
  const buttonText = displayName ? toShortText(displayName) : "Log in";
  const onButtonClick = () => displayName ? setOpen(true) : login();
  const shellW = isMobileMode
    ? "w-[min(calc(100vw-40px),1320px)]"
    : "w-[min(calc(100vw-80px),1320px)]";
  const onLogoClick = () => {
    if (pathname === "/home" || pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    router.push("/home");
  };
  const closeMobileNav = () => {
    setMobileNavOpen(false);
    setMobileProductOpen(false);
    setMobileActiveSubItem(null);
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

  useEffect(() => {
    if (!isMobileMode) closeMobileNav();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobileMode]);

  useEffect(() => {
    closeMobileNav();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (!mobileNavOpen) return;
    document.body.classList.add("oceanea-mobile-nav-open");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileNav();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("oceanea-mobile-nav-open");
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobileNavOpen]);
  
  return <>
      {!isMobileMode && <>  
        <div className={`fixed z-50 ${shellW} -translate-x-1/2 left-1/2`}>
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
        {!mobileNavOpen && (
          <div className="fixed left-1/2 top-0 z-50 h-[52px] w-[min(100vw,402px)] -translate-x-1/2 @container pointer-events-none">
            <button
              type="button"
              aria-label="Go to home"
              onClick={onLogoClick}
              className="pointer-events-auto absolute left-[calc(30/402*100cqw)] top-[12px] h-[25px] w-[calc(115/402*100cqw)] cursor-pointer rounded-[50px] bg-white shadow-[0px_3px_6px_2px_rgba(0,0,0,0.10)]"
            >
              <img src="/header/mobile-figma-logo.svg" alt="Oceanea" className="absolute left-[calc(19/115*100%)] top-[7px] h-[10px] w-[calc(77/115*100%)]" />
            </button>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(true)}
              className="pointer-events-auto absolute right-[calc(33/402*100cqw)] top-[12px] size-[25px] cursor-pointer rounded-full bg-white shadow-[0px_3px_6px_2px_rgba(0,0,0,0.10)]"
            >
              <img src="/header/mobile-menu-icon.svg" alt="" className="absolute left-[6px] top-[6px] size-[13px]" />
            </button>
          </div>
        )}

        {mobileNavOpen && (
          <>
          <button
            type="button"
            aria-label="Close mobile menu backdrop"
            onClick={closeMobileNav}
            className="fixed inset-0 z-40 cursor-default bg-[rgba(255,255,255,0.35)] backdrop-blur-[4.7px]"
          />
          <div className="fixed left-1/2 top-0 z-50 w-[min(100vw,402px)] -translate-x-1/2 @container pointer-events-none">
            <div
              className="pointer-events-auto relative w-full rounded-bl-[28px] rounded-br-[28px] bg-[#f8f8f8]"
              style={{ height: mobileProductOpen ? 675 : 515 }}
            >
              <button
                type="button"
                aria-label="Go to home"
                onClick={onLogoClick}
                className="absolute left-[calc(30/402*100cqw)] top-[12px] h-[25px] w-[calc(115/402*100cqw)] cursor-pointer rounded-[50px] bg-white shadow-[0px_3px_6px_2px_rgba(0,0,0,0.10)]"
              >
                <img src="/header/mobile-figma-logo.svg" alt="Oceanea" className="absolute left-[calc(19/115*100%)] top-[7px] h-[10px] w-[calc(77/115*100%)]" />
              </button>
              <button
                type="button"
                aria-label="Close menu"
                onClick={closeMobileNav}
                className="absolute right-[calc(33/402*100cqw)] top-[13px] size-[24px] rotate-45 cursor-pointer"
              >
                <img src="/header/mobile-close-icon.svg" alt="" className="size-full" />
              </button>
              <div className="absolute left-[calc(37/402*100cqw)] top-[82px] h-px w-[calc(332/402*100cqw)] bg-[#949494]" />
              <div
                className="absolute left-[calc(37/402*100cqw)] h-px w-[calc(332/402*100cqw)] bg-[#949494]"
                style={{ top: mobileProductOpen ? 611 : 456 }}
              />

              {!mobileProductOpen && (
                <nav aria-label="Mobile navigation" className="absolute left-[calc(44/402*100cqw)] top-[110.75px] flex w-[234px] flex-col items-start gap-[20px] text-left text-[36px] font-normal leading-[normal] text-[#0c0c0c]">
                  {mobileMenuItems.map((label) => (
                    <button
                      key={label}
                      type="button"
                      className="cursor-pointer text-left capitalize hover:opacity-75"
                      onClick={() => {
                        if (label === "Product") {
                          setMobileProductOpen(true);
                          setMobileActiveSubItem(null);
                        }
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </nav>
              )}

              {mobileProductOpen && (
                <nav aria-label="Mobile navigation" className="absolute left-[calc(44/402*100cqw)] top-[110.75px] flex w-[234px] flex-col items-start gap-[20px] text-left">
                  <div className="flex w-[162px] flex-col items-start gap-[8px]">
                    <button
                      type="button"
                      aria-expanded="true"
                      className="cursor-pointer text-left text-[36px] font-normal leading-[normal] text-[#0c0c0c] hover:opacity-75"
                      onClick={() => setMobileProductOpen(false)}
                    >
                      Product
                    </button>
                    <div className="relative h-[146px] w-[162px]">
                      {mobileMenuItems.map((label, i) => (
                        <button
                          key={label}
                          type="button"
                          className="absolute left-0 flex h-[18px] cursor-pointer items-start text-left text-[15px] leading-[normal] text-[#0c0c0c] hover:opacity-75"
                          style={{ top: i * 32 }}
                          onClick={() => setMobileActiveSubItem(label)}
                        >
                          <span className="mt-[9px] size-[3px] shrink-0 rounded-full bg-[#0c0c0c]" />
                          <span className={`ml-[6px] whitespace-nowrap pb-[3px] ${mobileActiveSubItem === label ? "border-b border-[#0c0c0c] font-semibold" : "font-normal"}`}>
                            {label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start gap-[20px] text-[36px] font-normal leading-[normal] text-[#949494]">
                    {mobileMenuItems.slice(1).map((label) => (
                      <button key={label} type="button" className="cursor-pointer text-left capitalize hover:text-[#0c0c0c]">
                        {label}
                      </button>
                    ))}
                  </div>
                </nav>
              )}

              <button
                type="button"
                onClick={() => {
                  closeMobileNav();
                  onButtonClick();
                }}
                className="absolute h-[20px] min-w-[61px] cursor-pointer rounded-[50px] bg-[#0c0c0c] px-[14px] text-[11px] font-bold leading-[20px] text-white hover:bg-[#4c4c4c]"
                style={{ left: mobileProductOpen ? "calc(43 / 402 * 100cqw)" : "calc(30 / 402 * 100cqw)", top: mobileProductOpen ? 639 : 479 }}
              >
                {buttonText === "Log in" ? "Log In" : buttonText}
              </button>
            </div>
          </div>
          </>
        )}
      </>}

    <Menu open={open} displayName={displayName} onClose={() => setOpen(false)}/>
  </>;
}
