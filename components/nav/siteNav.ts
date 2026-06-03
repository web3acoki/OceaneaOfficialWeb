/**
 * Header 下拉与 Footer 链接列共用：与 `Footer` 中 `topNavItems` / `linkColumns` 一一对应。
 * 新路由在 `navLinkHref` 中补全即可。
 */
export const navTopLabels = ["Product", "Earn", "Build", "Learn"] as const;

export const navLinkColumns = [
  ["X-ARTURA", "X-DIVER"],
  ["Airdrop"],
  ["Game Arena"],
  ["Litepaper", "Blog"],
] as const;

export const navLinkHref: Partial<Record<string, string>> = {
  "X-ARTURA": "/x-artura",
  "X-DIVER": "/x-diver",
  Litepaper: "https://oceanea.gitbook.io/oceanea-litepaper/",
};
