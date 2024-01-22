import { ReactElement } from "react";
import HeaderButton from "../HeaderButton/HeaderButton";
import { MdNotifications } from "react-icons/md";

export default function NotificationButton(): ReactElement {
  return (
    <HeaderButton>
      <MdNotifications size={20} />
    </HeaderButton>
  );
}
