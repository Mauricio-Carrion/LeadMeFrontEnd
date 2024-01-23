import { getServer } from "@/config/serverConfig";

type ConnectWpProps = {
  token: string;
};

export const connectWp = async ({ token }: ConnectWpProps): Promise<any> => {
  const response = await getServer.post("/connect_wp", {
    Authorization: `Bearer ${token}`,
  });
  return response.data;
};
