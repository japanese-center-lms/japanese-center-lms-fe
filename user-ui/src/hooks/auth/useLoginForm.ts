import { useForm } from "react-hook-form";
import z from 'zod'
import { useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import { fetchWrapper } from "@/lib/api/fetchWrapper";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod"

export const schema = z.object({
    email: z
        .string()
        .email("Invalid Email"),
    password: z
        .string()
        .nonempty({
            message: "Password must not be empty",
        }),
});

export const useLoginForm = () => {
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: async (values: z.infer<typeof schema>) => {
            const response = await fetchWrapper('/auth/login',{
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
        },
        onError: (error) => toast.error(error.message),
        onSuccess: () => {
            navigate("/");
        }
    });

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {},
    });

    return {
        mutation,
        form,
    };
}
