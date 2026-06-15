import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, post } from "./http";
import type { User } from "@privy-io/react-auth";

type LoginEnvelope = {
  data?: {
    accessToken?: string;
    refreshToken?: string;
  };
};

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

export function buildBackendLoginPayload(user: User): BackendLoginPayload {
  const payload: BackendLoginPayload = {};
  payload.privyId = user.id;
  const walletAddress = user.wallet?.address ?? "";
  payload.id = walletAddress;
  payload.walletAddress = walletAddress;
  if (user.telegram) {
    payload.id = user.telegram.telegramUserId ?? walletAddress;
    payload.displayName = firstName> 16? firstName.length > 16 ? firstName.slice(0, 13) + '***' : firstName;
    payload.photoUrl = user.telegram.photoUrl ?? undefined;
  } else if (user.email) {
    payload.email = user.email.address;
    payload.displayName = emailName.length > 12 ? emailName.slice(0, 9) + '***' : emailName;
  } else if (user.wallet?.walletClientType) {
    payload.walletType = user.wallet.walletClientType;
    payload.displayName = walletAddress ? walletAddress.slice(0, 4) + "..." + walletAddress.slice(-4) : undefined;
  }
  return payload;
}

export async function loginWithBackend(user: User): Promise<BackendLoginResponse> {
  console.log("loginWithBackend", user);
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN_KEY);
  if (accessToken) return { accessToken };
  const payload = buildBackendLoginPayload(user);
  return post<BackendLoginResponse>("website/login", payload, handleLoginResponse);
}

function handleLoginResponse(data: unknown) {
  const envelope = data as LoginEnvelope;
  const accessToken = envelope.data?.accessToken ?? "";
  const refreshToken = envelope.data?.refreshToken ?? "";
  sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  sessionStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  return { accessToken };
}
