import { getCourses } from "@/lib/api/courses";
import Link from "next/link";
import ContactInfo from "./ContactInfo";
import Container from "./Container";
import Logo from "./Logo";

export default async function Footer() {
  const footerLinks = await getCourses();

  return (
    <footer className="text-white font-medium ">
      <div className="bg-primary py-10">
        <Container className="flex justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15">
            <nav aria-label="Навигация в подвале" className="">
              <h4 className="text-2xl mb-6">Hot Solutions</h4>
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
              <h4 className="text-2xl mb-6">Обучение</h4>
              <ul className="space-y-1.5 text-base">
                {footerLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.slug}
                      className="hover:text-grey-light block"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h4 className="text-2xl mb-6">Контакты</h4>
              <ContactInfo />
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-grey-87 text-sm">
        <Container className="flex justify-between items-center py-1.5">
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
