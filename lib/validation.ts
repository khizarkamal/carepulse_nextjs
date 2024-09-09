import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(50, {
      message: "Name must be less than 50 character",
    }),
  email: z.string().email("Invalid email address"),
  phone: z.string().refine(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (phone: any) => /^\+?[1-9]\d{1,14}$/.test(phone),
    "Invalid Phone Number"
  ),
});
