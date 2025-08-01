import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

export default function InstagramIcon({
  size = 24,
  className = "",
  href = "",
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="Instagram"
      aria-label="Instagram"
    >
      <FaInstagram size={size} className={className} />

      {/* <Instagram size={size} className={className} /> */}
    </Link>
  );
}
