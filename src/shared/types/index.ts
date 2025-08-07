import { z } from "zod";

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: number;
  photo: string;
}

export interface SignUpForm {
  name: string;
  email: string;
  phone: string;
  position_id: number;
  photo?: File;
}

export const signUpFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(60, "Name must not exceed 60 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z
    .string()
    .min(1, "Phone is required")
    .regex(
      /^\+380\d{9}$/,
      "Phone must start with +380 and have 9 digits after",
    ),
  position_id: z.number().min(1, "Position is required"),
  photo: z
    .instanceof(File, { message: "Photo is required" })
    .refine((file: File) => file.size <= 5 * 1024 * 1024, {
      message: "Photo size must not exceed 5MB",
    })
    .refine(
      (file: File) => {
        const validTypes = ["image/jpeg", "image/jpg"];
        return validTypes.includes(file.type);
      },
      {
        message: "Photo must be in jpg/jpeg format",
      },
    ),
});

export type SignUpFormData = z.infer<typeof signUpFormSchema>;

export interface SignUpResponse {
  success: boolean;
  user_id: number;
  message: string;
}

export interface UserResponse {
  success: boolean;
  user: User;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

export interface UsersResponse {
  success: boolean;
  users: User[];
  total_pages: number;
  total_users: number;
  links: {
    next_url: string | null;
    prev_url: string | null;
  };
}
