import LoginForm from "@/components/LoginForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
    return(
        <div className="w-full p-20">
            <div className="w-full max-w-md mx-auto">
                <div className="flex flex-col gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl text-center">
                                Login
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="px-10">
                            <LoginForm />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}