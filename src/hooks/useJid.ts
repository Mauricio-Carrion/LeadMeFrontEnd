import { getUserJid } from "@/services/user/getUserJid";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

export const useJid = (token: string) => {
  const [jid, setJid] = useState<string>("");

  useEffect(() => {
    try {
      const userUuid: any = jwtDecode(token);

      if (userUuid) {
        getUserJid(userUuid.uuid, token).then((jid) => {
          if (jid && jid.status === 200) {
            setJid(jid.data.jid);
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  }, [token]);

  return jid;
};
