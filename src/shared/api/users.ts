import type { User, SignUpResponse, UserResponse } from "@/shared/types";
import { request } from "./request";

export const getUsers = ({
  page = 1,
  count = 6,
}: {
  page?: number;
  count?: number;
}) => {
  return request<void, { users: User[]; total_users: number }>({
    url: `/users?page=${page}&count=${count}`,
    method: "GET",
  });
};

export const getUser = (id: number) => {
  return request<void, UserResponse>({
    url: `/users/${id}`,
    method: "GET",
  });
};

export const getToken = () => {
  return request<void, { token: string }>({
    url: "/token",
    method: "GET",
  });
};

export const signUp = async (formData: FormData) => {
  const token = await getToken();

  return request<FormData, SignUpResponse>({
    url: "/users",
    method: "POST",
    data: formData,
    headers: {
      Token: token.token,
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getPositions = () => {
  return request<void, { positions: Array<{ id: number; name: string }> }>({
    url: "/positions",
    method: "GET",
  });
};
