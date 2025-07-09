import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email("Invalid email"),
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
  fullname: z.string().min(1, "Fullname is required"),
  avatar: z.string().nonempty("Avatar is required").url("Invalid avatar URL"),
});