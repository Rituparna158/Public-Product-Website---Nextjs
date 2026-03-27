import { z } from "zod";
 
export const loginSchema = z.object({
  email: z.string().email("Enter valid email"),
  password: z.string().min(4, "Password must be at least 4 characters"),
});
 
export const registerSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Enter valid email"),
  password: z.string().min(4, "Password must be at least 4 characters"),
});