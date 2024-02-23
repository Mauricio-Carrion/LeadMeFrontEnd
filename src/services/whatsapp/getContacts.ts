import { getServer } from "@/config/serverConfig";
import { AxiosResponse } from "axios";

export type Contacts = {
  TheirJid: string;
  FirstName: string;
  FullName: string;
  PushName: string;
  BusinessName: string;
};

type GetContactProps = {
  token: string;
  wpNumber: string;
  registries: string;
  page: string;
};

export const getContacts = async ({
  token,
  wpNumber,
  registries,
  page,
}: GetContactProps): Promise<Contacts[]> => {
  const response = await getServer.get(
    `/contacts/${wpNumber}?contacts=${registries}&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.contacts;
};
