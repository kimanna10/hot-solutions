"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

export default function DropdownNavItem({ label, href, items = [] }) {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = pathname.startsWith(href);

  const handleClick = useCallback(() => {
    router.push(href);
  }, [href]);

  return (
    <li className="relative group inline-block">
      <button
        onClick={handleClick}
        className={`hover:text-grey-light py-2 px-1.5 transition cursor-pointer ${
          isActive ? "text-grey-light" : "text-white"
        }`}
        aria-haspopup="true"
        aria-expanded="false"
      >
        {label}
        <ChevronDown size={16} className="inline-block" />
      </button>

      {items.length > 0 && (
        <div className="absolute left-0 top-full mt-0 hidden group-hover:block bg-secondary shadow z-50 min-w-max">
          <ul className="py-2">
            {items.map((item) => {
              const isSubActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block hover:text-primary transition px-4 py-1 ${
                      isSubActive ? "text-primary" : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
}
