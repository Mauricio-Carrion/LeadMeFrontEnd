import { getServer } from "@/config/serverConfig";
import { AxiosResponse } from "axios";

type ConnectWpProps = {
  token: string;
};

export const connectWp = async ({
  token,
}: ConnectWpProps): Promise<AxiosResponse> => {
  const response = await getServer.get("/connect_wp", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
