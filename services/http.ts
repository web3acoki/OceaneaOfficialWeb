export const API_BASE_URL = "https://api-test.xdiving.io/api/";
export const ACCESS_TOKEN_KEY = "xdiving_backend_access_token";
export const REFRESH_TOKEN_KEY = "xdiving_backend_refresh_token";

export const privyUserRef = { current: null as any };

export async function request<TResponse>(
  method: "GET" | "POST",
  path: string,
  body: unknown,
  handleData: (data: any) => TResponse,
): Promise<TResponse> {
  const url = API_BASE_URL + path;
  const fetchOnce = async () => {
    const accessToken = sessionStorage.getItem(ACCESS_TOKEN_KEY);
    const headers: HeadersInit = { "Content-Type": "application/json" };
    if (accessToken) headers.Authorization = `Bearer ${accessToken}`;
    console.log(method, url, body);
    return fetch(url, {
      method,
      headers,
      body: method === "GET" ? undefined : JSON.stringify(body ?? {}),
    });
  };
  let res = await fetchOnce();
  let data: any = await res.json().catch(() => ({}));
  if (res.status === 401) {
    const { refreshAccessToken } = await import("./refresh");
    await refreshAccessToken();
    res = await fetchOnce();
    data = await res.json().catch(() => ({}));
  }
  if (!res.ok) throw new Error(`Request to ${url} failed with status ${res.status}`);
  console.log("Response", url, data);
  return handleData(data);
}

export function post<TResponse>(
  path: string,
  body: unknown,
  handleData: (data: any) => TResponse,
): Promise<TResponse> {
  return request<TResponse>("POST", path, body, handleData);
}

export function get<TResponse>(
  path: string,
  handleData: (data: any) => TResponse,
): Promise<TResponse> {
  return request<TResponse>("GET", path, undefined, handleData);
}
