import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";

const API_BASE_URL = "https://frontend-test-assignment-api.abz.agency/api/v1";

interface RequestConfig<TData = unknown>
  extends Omit<AxiosRequestConfig, "url" | "method"> {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  data?: TData;
}

export const request = async <TData = unknown, TResponse = unknown>(
  config: RequestConfig<TData>,
): Promise<TResponse> => {
  const token = localStorage.getItem("token");

  const axiosConfig: AxiosRequestConfig = {
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...config.headers,
    },
    ...config,
  };

  try {
    const response: AxiosResponse<TResponse> = await axios(axiosConfig);
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
    }
    throw error;
  }
};
