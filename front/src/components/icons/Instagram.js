import { Instagram } from "lucide-react";
import Link from "next/link";

export default function InstagramIcon({
  size = 24,
  className = "",
  href = "",
}) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Instagram size={size} className={className} />
    </Link>
  );
}
