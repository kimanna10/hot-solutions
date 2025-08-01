import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappIcon({ size = 24, className = "", href = "" }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="Whatsapp"
      aria-label="Whatsapp"
    >
      <FaWhatsapp size={size} className={className} />
    </Link>
  );
}
