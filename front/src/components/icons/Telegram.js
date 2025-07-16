import { Send as Telegram } from "lucide-react";
import Link from "next/link";

export default function TelegramIcon({ size = 24, className = "", href = "" }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Telegram size={size} className={className} />
    </Link>
  );
}
