import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, post } from "./http";

export interface BackendLoginPayload {
  id?: string;
  privyId?: string;
  displayName?: string;
  walletType?: string;
  email?: string;
  photoUrl?: string;
  walletAddress?: string;
}

interface BackendLoginResponse {
  accessToken: string;
}

export function buildBackendLoginPayload(user: any): BackendLoginPayload {
  const payload: BackendLoginPayload = {};
  payload.privyId = user.id;
  payload.id = user.wallet.address;
  payload.walletAddress = user.wallet.address;
  if (user.telegram) {
    payload.id = user.telegram.telegramUserId;
    payload.displayName = user.telegram.firstName;
    payload.photoUrl = user.telegram.photoUrl;
  } else if (user.email) {
    payload.email = user.email.address;
    payload.displayName = user.email.address.split("@")[0];
  } else if (user.wallet.walletClientType) {
    payload.walletType = user.wallet.walletClientType;
    payload.displayName = user.wallet.address.slice(0, 4) + "..." + user.wallet.address.slice(-4);
  }
  return payload;
}

export async function loginWithBackend(user: any): Promise<BackendLoginResponse> {
  console.log("loginWithBackend", user);
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN_KEY);
  if (accessToken) return { accessToken };
  const payload = buildBackendLoginPayload(user);
  return post<BackendLoginResponse>("website/login", payload, handleLoginResponse);
}

function handleLoginResponse(data: any) {
  const accessToken = data.data.accessToken;
  sessionStorage.setItem(ACCESS_TOKEN_KEY, data.data.accessToken);
  sessionStorage.setItem(REFRESH_TOKEN_KEY, data.data.refreshToken);
  return { accessToken };
}