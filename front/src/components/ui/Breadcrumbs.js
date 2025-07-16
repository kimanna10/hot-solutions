import Container from "@/components/layouts/Container";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Breadcrumbs({ items }) {
  return (
    <nav
      className="text-sm border-y border-white font-medium  text-white bg-primary"
      aria-label="Хлебные крошки"
    >
      <Container>
        <ol className="flex flex-wrap items-center gap-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <Link
                href={item.href}
                className={`py-2 ${index === items.length - 1 ? "" : ""}`}
                aria-current={index === items.length - 1 ? "page" : undefined}
              >
                {item.label}
              </Link>
              {index < items.length - 1 && <ChevronRight size={22} />}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}
