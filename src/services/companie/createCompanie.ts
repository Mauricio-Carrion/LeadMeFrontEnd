import { getServer } from "@/config/serverConfig";

type CreateCompanieProps = {
  name: string;
  email: string;
  password: string;
};

export const createCompanie = async ({
  name,
  email,
  password,
}: CreateCompanieProps): Promise<any> => {
  try {
    const response = await getServer.post("/users", {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
