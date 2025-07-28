import { User } from "lucide-react";
import Link from "next/link";
import DropdownNavItem from "../ui/DropdownNavItem";

import NavLink from "../ui/NavLink";
import Container from "./Container";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 text-base font-medium text-white bg-primary">
      <Container className="flex justify-between py-1">
        <div className="flex items-center gap-3.5">
          <Logo />
          <nav aria-label="Главная навигация">
            <ul className="flex items-center">
              <li>
                <NavLink href="/about">О компании</NavLink>
              </li>

              <DropdownNavItem
                label="Обучение"
                href="/edu"
                items={[
                  {
                    label: "Безопасность и Охрана Труда",
                    href: "/edu/bezopasnost-truda",
                  },
                  {
                    label: "Пожарно-Технический Минимум",
                    href: "/edu/pozharno-tekhnicheskiy-minimum",
                  },
                  {
                    label: "Промышленная безопасность",
                    href: "/edu/promyshlennaya-bezopasnost",
                  },
                  {
                    label: "Электробезопасность",
                    href: "/edu/elektrobezopasnost",
                  },
                  { label: "Антитеррор", href: "/edu/antiterror" },
                  { label: "Антикоррупция", href: "/edu/antikorrupciya" },
                  {
                    label: "Первая доврачебная помощь",
                    href: "/edu/pervaya-pomoshch",
                  },
                  { label: "Аттестация ИТР", href: "/edu/attestaciya-itr" },
                  {
                    label: "Экологическая безопасность",
                    href: "/edu/ekologicheskaya-bezopasnost",
                  },
                ]}
              />

              <DropdownNavItem
                label="Экспертные работы"
                href="/ekspertnye-raboty"
                items={[
                  {
                    label: "Экспертизы промышленной безопасности",
                    href: "/ekspertnye-raboty#prombez-ekspertiza",
                  },
                  {
                    label: "Разработка деклараций",
                    href: "/ekspertnye-raboty#razrabotka-deklaracii",
                  },
                  {
                    label: "Разрешение на применение оборудований",
                    href: "/ekspertnye-raboty#razreshenie-na-oborudovanie",
                  },
                  {
                    label: "Техническое освидетельствование ГПМ",
                    href: "/ekspertnye-raboty#osvidetelstvovanie-gpm",
                  },
                  {
                    label: "Разработка дубликатов паспортов",
                    href: "/ekspertnye-raboty#dublikaty-pasportov",
                  },
                  {
                    label: "Аттестация рабочих мест",
                    href: "/ekspertnye-raboty#attestaciya-rabochikh-mest",
                  },
                ]}
              />

              <DropdownNavItem
                label="Полиграфия"
                href="/poligrafiya"
                items={[
                  {
                    label: "Пакет: Стандарт",
                    href: "/poligrafiya#paket-standart",
                  },
                  {
                    label: "Пакет: Оптимальный",
                    href: "/poligrafiya#paket-optimalnyy",
                  },
                  {
                    label: "Пакет: Универсальный",
                    href: "/poligrafiya#paket-universalnyy",
                  },
                  {
                    label: "Журналы",
                    href: "/poligrafiya#zhurnaly",
                  },
                ]}
              />

              <li>
                <NavLink href="/contact">Контакты</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-3.5">
          <address className="flex flex-col not-italic text-right ">
            <Link
              href="tel:+77473545456"
              title="Позвонить"
              aria-label="Позвонить по номеру +7 747 354 54 56"
            >
              +7 747 354 54 56
            </Link>
            <Link
              href="mailto:info@hotsolutions.kz?subject=Пишу с сайта"
              title="Отправить письмо"
              aria-label="Написать на почту info@hotsolutions.kz"
            >
              info@hotsolutions.kz
            </Link>
          </address>
          <Link
            href="https://portal.hot-solutions.kz"
            title="Образовательный портал"
            aria-label="Перейти на образовательный портал"
          >
            <User size={24} />
          </Link>
        </div>
      </Container>
    </header>
  );
}
