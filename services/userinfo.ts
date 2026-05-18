import { get } from "./http";

export interface displayData{
  userId: string;
  level: number;
  displayName: string;
  avatarPath: string;
  avatarName: string;
  avatarFrameId: string;
}

export interface UserInfoResponse {
  data: displayData;
}

export function getUserInfo(): Promise<UserInfoResponse> {
  return get<UserInfoResponse>("website/userinfo", (data: any) => ({ data: data.data }));
}
