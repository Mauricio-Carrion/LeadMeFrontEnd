import { Badge } from "primereact/badge";
import HeaderButton from "../HeaderButton/HeaderButton";
import { SiWhatsapp } from "react-icons/si";
import { OverlayPanel } from "primereact/overlaypanel";
import styles from "./whatsappbutton.module.sass";
import { useRef, useState } from "react";
import QRCode from "react-qr-code";
import { ProgressSpinner } from "primereact/progressspinner";

export default function WhatsAppButton(): React.ReactElement {
  const op = useRef<any>(null);
  const [loading, setLoading] = useState(true);

  const requestQrCode = {};

  return (
    <HeaderButton
      onClick={(e) => {
        op.current?.toggle(e);
      }}
    >
      <Badge severity="success" className={styles.badge} />
      <SiWhatsapp size={20} />
      <OverlayPanel className={styles.poverlaypanel} ref={op}>
        {loading ? (
          <span className={styles.loader}></span>
        ) : (
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
              value="https://web.whatsapp.com"
              className={styles.qrcode}
              fgColor="#fff"
              bgColor="transparent"
            />
          </>
        )}
      </OverlayPanel>
    </HeaderButton>
  );
}
