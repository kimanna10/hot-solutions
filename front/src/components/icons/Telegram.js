import Link from "next/link";
import { LiaTelegramPlane } from "react-icons/lia";

export default function TelegramIcon({ size = 24, className = "", href = "" }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="Telegram"
      aria-label="Telegram"
    >
      <LiaTelegramPlane size={size} className={className} />

      {/* <Telegram /> */}
    </Link>
  );
}
