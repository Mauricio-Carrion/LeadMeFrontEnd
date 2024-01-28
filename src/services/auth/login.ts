import { getServer } from "@/config/serverConfig";
import { AxiosResponse } from "axios";
type LoginProps = {
  email: string;
  password: string;
};

export const login = async ({
  email,
  password,
}: LoginProps): Promise<AxiosResponse | undefined> => {
  try {
    const response: AxiosResponse = await getServer.post("/login", {
      email,
      password,
    });

    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
};
