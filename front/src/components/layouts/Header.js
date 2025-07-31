"use client";
import DropdownNavItem from "@/components/ui/DropdownNavItem";
import { Menu, User, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import NavLink from "@/components/ui/NavLink";
import Container from "./Container";
import Logo from "./Logo";

import Modal from "@/components/ui/PriceNav";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 text-base font-medium text-white bg-primary">
      <Container className="flex items-center justify-between py-1">
        <div className="flex items-center gap-3.5">
          <Logo />

          <nav aria-label="Главная навигация" className="hidden lg:block">
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

              <Modal />
              <li>
                <NavLink href="/contact">Контакты</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden lg:flex items-center gap-3.5">
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

        {/* Бургер на мобилке */}
        <div className="relative w-7 h-7 lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {/* Бургер иконка */}
            <Menu
              size={28}
              className={`absolute transition-opacity duration-500 ${
                isMenuOpen ? "opacity-0 " : "opacity-100 "
              }`}
            />

            {/* Крестик */}
            <X
              size={28}
              className={`absolute transition-opacity duration-500 ${
                isMenuOpen ? "opacity-100 " : "opacity-0 "
              }`}
            />
          </button>
        </div>
      </Container>

      {/* Мобильное меню */}
      <div
        className={`overflow-auto transition-all duration-500 ease-in-out lg:hidden absolute right-0 left-0  bg-primary ${
          isMenuOpen ? "h-screen" : "h-0 "
        }`}
      >
        <Container className="py-2">
          <nav aria-label="Мобильная навигация">
            <ul className="flex flex-col gap-1">
              <li>
                <NavLink href="/about" onClick={() => setIsMenuOpen(false)}>
                  О компании
                </NavLink>
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
                onClose={() => setIsMenuOpen(false)}
              />

              {/* <DropdownNavItem
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
                onClose={() => setIsMenuOpen(false)}
              /> */}

              <li>
                <NavLink
                  href="/ekspertnye-raboty"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Экспертные работы
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/poligrafiya"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Полиграфия
                </NavLink>
              </li>

              <Modal />
              <li>
                <NavLink href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Контакты
                </NavLink>
              </li>

              <li>
                <NavLink
                  href="https://portal.hot-solutions.kz"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Образовательный портал
                </NavLink>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </header>
  );
}
