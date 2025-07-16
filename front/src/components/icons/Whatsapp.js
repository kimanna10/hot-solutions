import { MessageCircleMore } from "lucide-react";
import Link from "next/link";

export default function WhatsappIcon({ size = 24, className = "", href = "" }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <MessageCircleMore size={size} className={className} />
    </Link>
  );
}
