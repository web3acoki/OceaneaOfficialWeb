import { ACCESS_TOKEN_KEY, post, REFRESH_TOKEN_KEY } from "./http";

export async function refreshAccessToken(): Promise<void> {
  const payload = { refreshToken: sessionStorage.getItem(REFRESH_TOKEN_KEY) };
  await post("website/refresh", payload, handleRefreshResponse);
}

function handleRefreshResponse(data: any) {
  sessionStorage.setItem(ACCESS_TOKEN_KEY, data.data.accessToken);
}
