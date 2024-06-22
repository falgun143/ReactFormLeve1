import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type Data = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  guest: string;
  guestName?: string;
};

const useFormValidation = () => {
  const registrationSchema: ZodType<Data> = z.object({
    firstName: z.string().min(2, { message: 'First name must be at least 2 characters long' }),
    lastName: z.string().min(2, { message: 'Last name must be at least 2 characters long' }),
    email: z.string().email({ message: 'Invalid email format' }),
    age: z.number().int().min(0, { message: 'Age must be positive' }),
    guest: z.enum(["Yes", "No"]),
    guestName: z.string().min(2, { message: 'Guest name must be at least 2 characters long' }).optional()
  })

  const { register, handleSubmit, formState: { errors }, watch } = useForm<Data>({
    resolver: zodResolver(registrationSchema)
  });

  return { register, handleSubmit, errors, watch };
};

export default useFormValidation;