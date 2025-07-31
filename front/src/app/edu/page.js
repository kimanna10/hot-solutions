import Container from "@/components/layouts/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getCourses, getEducationInfo } from "@/data/data";
import { FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Education() {
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Обучение", href: `/edu` },
  ];

  const education = getEducationInfo();
  const courses = getCourses();
  return (
    <main>
      <section>
        <Breadcrumbs items={breadcrumbs} />
      </section>

      <section className="bg-[url(/education/education-bg.webp)] h-96 bg-center bg-cover">
        <div className="bg-black/60 h-full w-full text-white space-y-5 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-bold">{education.title}</h1>
          <p className="max-w-lg">{education.desc}</p>
        </div>
      </section>

      <section className="bg-primary">
        <Container>
          <div className="grid grid-cols-1 gap-3 py-8 md:grid-cols-3 lg:grid-cols-4">
            {courses.map((item) => (
              <Link
                key={item.slug}
                href={`/edu/${item.slug}`}
                className="flex flex-col bg-white items-center text-lg font-bold text-center hover:text-white hover:bg-secondary  transition"
              >
                <Image
                  src={item.price.bg}
                  width={1000}
                  height={1000}
                  alt={item.banner}
                  className="object-cover h-40"
                />
                <p className="leading-none p-5">{item.title}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[url(/education/work.webp)] bg-center bg-cover">
        <div className="bg-white/60 h-full w-full  flex flex-col justify-between items-center text-center py-8 ">
          <Container className="space-y-10">
            <h2 className="text-3xl font-bold">Как мы работаем?</h2>
            <div className="bg-primary/80 h-full w-full p-5 grid grid-cols-1 md:grid-cols-2 text-white md:gap-8 gap-12 md:p-10 ">
              <div className="space-y-10">
                <h3 className="text-2xl font-bold">Юридические лица</h3>
                <ul className="lg:space-y-20 space-y-14">
                  {education.work.legal.map((work, i) => (
                    <li
                      key={i}
                      className="flex flex-col items-center gap-2 xl:min-h-44 md:min-h-60 min-h-auto"
                    >
                      <FileText size={40} />
                      <p className="font-bold">
                        {i + 1}. {work.item}
                      </p>
                      <p className="leading-tight">{work.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-10">
                <h3 className="text-2xl font-bold">Физические лица</h3>
                <ul className="lg:space-y-20 space-y-14">
                  {education.work.individual.map((work, i) => (
                    <li
                      key={i}
                      className="flex flex-col items-center gap-2 xl:min-h-44 md:min-h-60 min-h-auto"
                    >
                      <FileText size={40} />
                      <p className="font-bold">
                        {i + 1}. {work.item}
                      </p>
                      <p className="leading-tight">{work.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </main>
  );
}
