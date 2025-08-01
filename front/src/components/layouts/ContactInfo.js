import { getContacts } from "@/data/data.js";
import Link from "next/link";
import InstagramIcon from "../icons/Instagram";
import TelegramIcon from "../icons/Telegram";
import WhatsappIcon from "../icons/Whatsapp";

export default async function ContactInfo() {
  const contact = getContacts();
  return (
    <address className="not-italic space-y-1.5 text-base">
      <p className="font-bold">{contact.company}</p>
      <p className="leading-snug">{contact.address}</p>
      <div className="flex flex-col gap-2.5">
        {contact.phones.map((phone, i) => (
          <Link
            key={i}
            title="Позвонить"
            href={`tel:${phone.replace(/\s+/g, "")}`}
            aria-label={`Позвонить по номеру  ${phone}`}
            className="block "
          >
            {phone}
          </Link>
        ))}
        <Link
          href="mailto:info@hotsolutions.kz?subject=Пишу с сайта"
          title="Отправить письмо"
          aria-label="Написать на почту info@hotsolutions.kz"
          className=""
        >
          {contact.email}
        </Link>

        <Link
          href="/files/offert.pdf"
          title="Публичная оферта"
          aria-label="Публичная оферта"
          target="_blank"
        >
          Публичная оферта
        </Link>

        <Link
          href="/files/policy.pdf"
          title="Политика конфиденциальности"
          aria-label="Политика конфиденциальности"
          target="_blank"
        >
          Политика конфиденциальности
        </Link>

        <div className="flex gap-8">
          <InstagramIcon
            href={contact.social.instagram}
            className="text-secondary hover:text-white"
          />
          <TelegramIcon
            href={contact.social.telegram}
            className="text-secondary hover:text-white"
          />
          <WhatsappIcon
            href={contact.social.whatsapp}
            className="text-secondary hover:text-white"
          />
        </div>
      </div>
    </address>
  );
}
