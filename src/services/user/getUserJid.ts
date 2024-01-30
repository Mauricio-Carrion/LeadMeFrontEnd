import { getServer } from "@/config/serverConfig";
import { Axios, AxiosError, AxiosResponse } from "axios";

export const getUserJid = async (
  uuid: string,
  token: string
): Promise<AxiosResponse | undefined> => {
  try {
    const response = await getServer.get(`/user/jid/${uuid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
