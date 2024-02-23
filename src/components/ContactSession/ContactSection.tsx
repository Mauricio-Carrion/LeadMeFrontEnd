"use client";
import { useJid } from "@/hooks/useJid";
import ContactItem from "../ContactItem/ContactItem";
import styles from "./ContactSection.module.sass";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Contacts, getContacts } from "@/services/whatsapp/getContacts";
import Loader from "@/app/home/components/Loader/Loader";

export default function ContactSection() {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState<Contacts[]>();
  const [page, setPage] = useState(1);
  const cookieToken = Cookies.get("LeadMeToken");
  const jid = useJid(cookieToken!);

  const loadContacts = (page = 1) => {
    if (jid != "") {
      getContacts({
        token: cookieToken!,
        wpNumber: jid.split(":")[0],
        registries: "10",
        page: page.toString(),
      }).then((data) => {
        console.log(data);
        setContacts(data);
        setLoading(false);
      });
    }
  };

  useEffect(() => {
    loadContacts();
  }, [jid, page]);

  return (
    <section className={styles.section}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {contacts?.map((contact) => {
            return (
              <ContactItem
                key={contact.TheirJid}
                fullname={contact.FullName}
                phone={contact.TheirJid.split("@")[0]}
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            );
          })}
        </>
      )}
    </section>
  );
}
