import { getServer } from "@/config/serverConfig";

type CreateUserProps = {
  Name: string;
  Email: string;
  Phone: string;
  Password: string;
  Active: boolean;
  IsAdmin: boolean;
  Companie_uuid: string;
};

export const createUser = async ({
  Name,
  Email,
  Phone,
  Password,
  Active,
  IsAdmin,
  Companie_uuid,
}: CreateUserProps): Promise<any> => {
  try {
    const response = await getServer.post("/user", {
      Name,
      Email,
      Phone,
      Password,
      Active,
      IsAdmin,
      Companie_uuid,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
