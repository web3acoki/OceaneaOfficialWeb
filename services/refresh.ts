import { ACCESS_TOKEN_KEY, post, REFRESH_TOKEN_KEY } from "./http";

type RefreshEnvelope = {
  data?: {
    accessToken?: string;
  };
};

export async function refreshAccessToken(): Promise<void> {
  const payload = { refreshToken: sessionStorage.getItem(REFRESH_TOKEN_KEY) };
  await post("website/refresh", payload, handleRefreshResponse);
}

function handleRefreshResponse(data: unknown) {
  const envelope = data as RefreshEnvelope;
  sessionStorage.setItem(ACCESS_TOKEN_KEY, envelope.data?.accessToken ?? "");
}
