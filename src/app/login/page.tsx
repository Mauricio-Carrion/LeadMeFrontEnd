"use client";
import { login } from "@/services/auth/login";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import Cookies from "js-cookie";
import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleLogin = async (event: any) => {
    setLoading(true);
    event.preventDefault();
    try {
      const loginResponse = await login({
        email: event.target[0].value,
        password: event.target[1].value,
      });

      if (loginResponse?.status === 200) {
        Cookies.set("LeadMeToken", loginResponse.data.AccessToken);
        console.log(loginResponse.data);
        return router.push("/home/dashboard");
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={(e) => handleLogin(e)}>
      <InputText placeholder="Email" type="text" />
      <InputText placeholder="Senha" type="password" />
      <Button loading={loading} label="Login" type="submit" />
    </form>
  );
}
