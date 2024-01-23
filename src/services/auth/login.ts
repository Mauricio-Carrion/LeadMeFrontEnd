import { getServer } from "@/config/serverConfig";

type LoginProps = {
  email: string;
  password: string;
};

export const login = async ({ email, password }: LoginProps): Promise<any> => {
  try {
    const response = await getServer.post("/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
