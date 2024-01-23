"use client";
import { login } from "@/services/auth/login";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export default function Login() {
  const handleLogin = async (event: any) => {
    event.preventDefault();
    console.info(event);
    await login({
      email: event.target[0].value,
      password: event.target[1].value,
    }).then((res) => {
      console.info(res);
    });
  };

  return (
    <form onSubmit={(e) => handleLogin(e)}>
      <InputText placeholder="Email" type="text" />
      <InputText placeholder="Senha" type="password" />
      <Button label="Login" type="submit" />
    </form>
  );
}
