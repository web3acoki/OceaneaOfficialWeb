"use client";

import { useEffect, useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import Button from "../common/Button";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, privyUserRef } from "../../services/http";

type MenuProps = {
  open: boolean;
  displayName: string;
  onClose: () => void;
};

export default function Menu({ open, displayName, onClose }: MenuProps) {
  const { logout, user } = usePrivy();
  const walletAddr = user?.wallet?.address ?? "";
  const walletLabel =
    walletAddr.length > 8 ? `${walletAddr.slice(0, 4)}...${walletAddr.slice(-4)}` : walletAddr;
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!open) setCopied(false);
  }, [open]);
  const onCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(walletAddr);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };
  const onLogout = async () => {
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    sessionStorage.removeItem(REFRESH_TOKEN_KEY);
    privyUserRef.current = null;
    await logout();
    onClose();
  };
  if (!open) return <></>;
  return <>
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40" onClick={onClose}>
      <section className="w-500/1920 aspect-500/400 fr-[50/1920] bg-white" onClick={(e) => e.stopPropagation()}>
        <div className="fm-[150/1920] aspect-500/400 grid grid-rows-3 fg-[150/1920]">
          <div className="flex items-center">
            <p className="text-zinc-900 ft-[24/1320]">{displayName}</p>
            <Button text="×" className="ml-auto w-300/1920 aspect-square" onClick={onClose} />
          </div>
          <div className="flex w-full items-center">
            <p className="text-zinc-900 ft-[24/1320]">{walletLabel || "—"}</p>
            {walletAddr ? (
              <button
                type="button"
                aria-label={copied ? "Copied" : "Copy wallet address"}
                className="ml-auto cursor-pointer p-1 text-zinc-900 opacity-70 hover:opacity-100"
                onClick={() => void onCopyAddress()}
              >
                {copied ? (
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[28px] text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[28px]" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </button>
            ) : null}
          </div>
          <Button text="Log out" onClick={() => void onLogout()} />
        </div>
      </section>
    </div>
  </>;
}
