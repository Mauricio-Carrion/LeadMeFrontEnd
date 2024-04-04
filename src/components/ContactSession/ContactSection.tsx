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
  const [isLoadingPage, setIsLoadingPage] = useState(false);
  const [contacts, setContacts] = useState<Contacts[]>();
  const [actualPage, setActualPage] = useState(1);
  const cookieToken = Cookies.get("LeadMeToken");
  const jid = useJid(cookieToken!);

  const loadContacts = (page = 0) => {
    //if (page > 1) {
    setIsLoadingPage(true);
    //}
    if (jid != "" && page) {
      getContacts({
        token: cookieToken!,
        wpNumber: jid.split(":")[0],
        registries: "10",
        page: page.toString(),
      }).then((data) => {
        console.log(data);
        setContacts((curr) => {
          if (curr) {
            return [...curr, ...data];
          } else {
            return data;
          }
        });
        setLoading(false);
        setIsLoadingPage(false);
      });
    }
  };

  const handleScroll = (e: any) => {
    if (isLoadingPage) {
      return;
    }
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setActualPage(actualPage + 10);
    }
  };

  useEffect(() => {
    loadContacts(actualPage);
  }, [jid, actualPage]);

  return (
    <section className={styles.contactSection} onScroll={handleScroll}>
      {loading ? (
        <Loader color="#3da5d9" size={2} />
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

          {isLoadingPage && <Loader color="#3da5d9" size={1} top="100vh" />}
        </>
      )}
    </section>
  );
}
