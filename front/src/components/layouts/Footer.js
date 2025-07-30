import { getCourses } from "@/data/data.js";
import Link from "next/link";
import ContactInfo from "./ContactInfo";
import Container from "./Container";
import Logo from "./Logo";

export default async function Footer() {
  const footerLinks = getCourses();

  return (
    <footer className="font-medium text-white ">
      <div className="py-10 bg-primary">
        <Container className="flex justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15">
            <nav aria-label="Навигация в подвале" className="">
              <h4 className="mb-6 text-2xl">Hot Solutions</h4>
              <ul className="space-y-1.5 text-base">
                <li>
                  <Link href="/" className="block hover:text-grey-light">
                    Главная
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="block hover:text-grey-light">
                    О компании
                  </Link>
                </li>
                <li>
                  <Link href="/edu" className="block hover:text-grey-light">
                    Обучение
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ekspertnye-raboty"
                    className="block hover:text-grey-light"
                  >
                    Экспертные работы
                  </Link>
                </li>
                <li>
                  <Link
                    href="/poligrafiya"
                    className="block hover:text-grey-light "
                  >
                    Полиграфия
                  </Link>
                </li>
              </ul>
            </nav>

            <nav aria-label="Навигация в подвале" className="">
              <h4 className="mb-6 text-2xl">Обучение</h4>
              <ul className="space-y-1.5 text-base">
                {footerLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={`/edu/${link.slug}`}
                      className="block hover:text-grey-light"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h4 className="mb-6 text-2xl">Контакты</h4>
              <ContactInfo />
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-grey-87 text-sm py-1.5">
        <Container className="flex items-center justify-between ">
          <Logo />

          <div className="text-right">
            <p>© Все права защищены</p>
            <p>ТОО Hot Solutions, 2019-{new Date().getFullYear()}</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
