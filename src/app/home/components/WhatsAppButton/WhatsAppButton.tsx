import { Badge } from "primereact/badge";
import HeaderButton from "../HeaderButton/HeaderButton";
import { SiWhatsapp } from "react-icons/si";
import { OverlayPanel } from "primereact/overlaypanel";
import styles from "./whatsappbutton.module.sass";
import { useRef, useState } from "react";
import QRCode from "react-qr-code";
import { connectWp } from "@/services/whatsapp/connectWp";
import Cookies from "js-cookie";
import { useJid } from "@/hooks/useJid";
import Loader from "../Loader/Loader";

export default function WhatsAppButton(): React.ReactElement {
  const op = useRef<any>(null);
  const [loading, setLoading] = useState(true);
  const [qrCode, setQrCode] = useState<string>("");
  const token = Cookies.get("LeadMeToken");
  const jid = useJid(token!);

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
          <Loader />
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
