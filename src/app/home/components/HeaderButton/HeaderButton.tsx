"use client";

import { Button } from "primereact/button";
import styles from "./headerbutton.module.sass";
import { OverlayPanel } from "primereact/overlaypanel";
import { useRef, useState } from "react";

type HeaderButtonProps = {
  children?: React.ReactNode;
  onClick?: (e: any) => void;
};

export default function HeaderButton({
  children,
  onClick,
}: HeaderButtonProps): React.ReactElement {
  const [op, setOp] = useState(null);

  const requestQrCode = {};

  const handleClick = (event: any) => {
    setOp(event.currentTarget);
  };

  return (
    <>
      <Button className={styles.headerbutton} onClick={onClick} unstyled>
        {children}
      </Button>
    </>
  );
}
