import { Badge } from "primereact/badge";
import HeaderButton from "../HeaderButton/HeaderButton";
import { SiWhatsapp } from "react-icons/si";
import { OverlayPanel } from "primereact/overlaypanel";
import styles from "./whatsappbutton.module.sass";
import { useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";
import { connectWp } from "@/services/whatsapp/connectWp";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { getUserJid } from "@/services/user/getUserJid";

export default function WhatsAppButton(): React.ReactElement {
  const op = useRef<any>(null);
  const [loading, setLoading] = useState(true);
  const [qrCode, setQrCode] = useState<string>("");
  const [jid, setJid] = useState<string>("");
  const token = Cookies.get("LeadMeToken");

  useEffect(() => {
    getJid();
  }, [jid, qrCode]);

  const getJid = async () => {
    const token = Cookies.get("LeadMeToken");
    if (token) {
      try {
        const userUuid: any = jwtDecode(token);

        if (userUuid) {
          const jid = await getUserJid(userUuid.uuid, token);

          if (jid && jid.status === 200) {
            setJid(jid.data.jid);
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleClick = async (e: any) => {
    op.current?.toggle(e);
    if (token && qrCode == "" && jid == "") {
      try {
        const qrString = await connectWp({ token: token! });

        console.log(qrString);

        if (qrString.status === 200) {
          setQrCode(qrString.data.qrCode);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
    setLoading(false);
  };

  return (
    <HeaderButton
      onClick={(e) => {
        handleClick(e);
      }}
    >
      <Badge
        severity={jid != "" ? "success" : "danger"}
        className={styles.badge}
      />
      <SiWhatsapp size={20} />
      <OverlayPanel className={styles.poverlaypanel} ref={op}>
        {loading ? (
          <span className={styles.loader}></span>
        ) : jid == "" ? (
          <>
            <h4
              style={{
                textAlign: "center",
                color: "#fff",
                width: "100%",
                margin: " 0 0 0.5rem 0 ",
              }}
            >
              Conecte o WhatsApp
            </h4>
            <QRCode
              value={qrCode}
              className={styles.qrcode}
              fgColor="#fff"
              bgColor="transparent"
            />
          </>
        ) : (
          <h4
            style={{
              textAlign: "center",
              color: "#fff",
              width: "100%",
              margin: " 0 0 0.5rem 0 ",
            }}
          >
            WhatsApp conectado!
          </h4>
        )}
      </OverlayPanel>
    </HeaderButton>
  );
}
