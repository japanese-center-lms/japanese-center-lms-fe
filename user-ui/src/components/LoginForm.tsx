import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { useLoginForm } from "@/hooks/auth/useLoginForm"

export default function LoginForm() {
    const { mutation, form } = useLoginForm();

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit((values) =>
                    mutation.mutate(values),
                )}
            >
                <div className="flex flex-col gap-6">
                    <FormField 
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="grid gap-2">
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} required/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="grid gap-2">
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input 
                                        type="password"
                                        {...field}
                                        required
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {mutation.status === "pending" ? (
                        <Button disabled className="w-full py-5">
                            <Loader2 className="animate-spin"/>
                            Loading
                        </Button>
                    ) : (
                        <Button type="submit" className="w-full py-5">
                            Login
                        </Button>
                    )}
                </div>
            </form>
        </Form>
    )
}