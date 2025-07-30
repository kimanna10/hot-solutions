"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

export default function DropdownNavItem({ label, href, items = [], onClose }) {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = pathname.startsWith(href);

  const handleClick = useCallback(() => {
    router.push(href);
    onClose?.();
  }, [href]);

  return (
    <li className="relative inline-block group">
      <button
        onClick={handleClick}
        className={`hover:text-grey-light  py-2 transition cursor-pointer ${
          isActive ? "text-grey-light" : "text-white"
        } lg:px-1.5  px-0 w-full text-left `}
        aria-haspopup="true"
        aria-expanded="false"
      >
        {label}
        <ChevronDown
          size={16}
          className={`inline-block group-hover:rotate-180 transition`}
        />
      </button>

      {items.length > 0 && (
        <div className="left-0 z-50 mt-0 shadow lg:hidden lg:absolute top-full bg-secondary lg:min-w-max lg:group-hover:block ">
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
