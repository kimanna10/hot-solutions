import Container from "@/components/layouts/Container";
import LawLayout from "@/components/layouts/LawLayout";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import { SquareCheck } from "lucide-react";

import LinkBlock from "@/components/ui/LinkBlock";
import { getCourseBySlug, getCourses } from "@/data/data.js";
import Image from "next/image";

export async function generateStaticParams() {
  const courses = getCourses();

  return courses.map((course) => ({
    name: course.slug,
  }));
}

export default async function CoursePage({ params }) {
  const { name } = await params;

  const course = getCourseBySlug(name);
  const courses = getCourses();

  if (!course) {
    return <div>Курс не найден</div>;
  }

  const aspects = [
    "Основание обучения",
    "Кто подлежит обучению?",
    "Периодичность",
    "Что выдается?",
  ];

  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Обучение", href: "/edu" },
    { label: course.breadcrumb, href: `/edu/${course.slug}` },
  ];

  return (
    <main>
      <section className="bg-primary">
        <Breadcrumbs items={breadcrumbs} />
        <Container className="text-white">
          <h1 className="text-3xl font-bold py-2.5">{course.title}</h1>
        </Container>
        <div className="relative w-full h-32">
          <Image
            src={course.banner}
            alt={course.title}
            className="object-cover"
            fill
          />
        </div>
        <Container className="bg-primary">
          <div className="grid grid-cols-1 gap-1 py-8 md:grid-cols-3 lg:grid-cols-4">
            {courses.map((item) => (
              <LinkBlock key={item.slug} href={`/edu/${item.slug}`}>
                <p className="leading-none">{item.title}</p>
              </LinkBlock>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-8">
        <Container className="space-y-8">
          <h2 className="text-2xl font-bold text-secondary">
            {course.subtitle}
          </h2>
          {course.desc.map((item, i) => (
            <div
              className={`flex gap-8 lg:flex-row flex-col items-center  ${
                i % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
              key={i}
            >
              <Image
                src={item.img}
                alt={course.title}
                className="object-cover sm:h-60 lg:flex-2/5 w-full lg:w-0"
                width={400}
                height={500}
              />
              <p className="flex-3/5 text-justify">{item.text}</p>
            </div>
          ))}
        </Container>
      </section>
      <section className="py-8">
        <Container className="space-y-8 ">
          {course.topics.length > 0 ? (
            <>
              <h2 className="text-2xl font-bold text-secondary">
                На курсе мы изучим:
              </h2>
              <ul className="space-y-3">
                {course.topics.map((topic, i) => (
                  <li key={i} className="flex items-center gap-5">
                    <SquareCheck
                      size={30}
                      strokeWidth={1}
                      className="flex-shrink-0"
                    />
                    <p className="text-base leading-tight">{topic}</p>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              {course.def.map((def, i) => (
                <div key={i} className="space-y-3">
                  <h2 className="text-2xl font-bold text-secondary">
                    {def.title}
                  </h2>
                  <p className="text-justify">{def.desc}</p>
                </div>
              ))}
            </>
          )}
        </Container>
      </section>
      <section>
        <LawLayout law={course.law} />
      </section>

      <section className="relative py-8 bg-grey">
        <Container className="space-y-8">
          <h2 className="text-2xl font-bold text-primary">Основные аспекты</h2>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {course.aspects.map((aspect, i) => (
              <div className="flex items-start gap-3 " key={i}>
                <span className="text-xl font-bold leading-relaxed text-center rounded-full text-primary min-h-11 min-w-11 border-secondary border-3">
                  {i + 1}
                </span>
                <div className=" text-primary">
                  <h3 className="text-lg font-bold">{aspects[i]}</h3>
                  {aspect.includes("\n") ? (
                    <div className="">
                      {aspect.split("\n").map((line, j) => (
                        <p key={j} className="text-base">
                          {line.trim()}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-base">{aspect}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>

        <Image
          src={"/fire-bg.svg"}
          width={200}
          height={100}
          className="absolute top-0 right-0 object-cover w-auto h-full"
          alt="fire-bg"
        />
      </section>
      <section className="py-8">
        <Container className="space-y-6">
          {course.program.length > 0 ? (
            <>
              <h2 className="text-2xl font-bold text-primary">
                Программа курса
              </h2>
              <ul>
                {course.program.map((prog, i) => (
                  <li
                    key={i}
                    className="py-2 text-base font-bold border-b border-b-grey-light text-secondary"
                  >
                    {prog}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-primary">
                Список необходимых документов для прохождения аттестации ИТР:
              </h2>
              <ul>
                {course.docs.map((doc, i) => (
                  <li
                    key={i}
                    className="py-2 text-base font-bold border-b border-b-grey-light text-secondary"
                  >
                    {doc}
                  </li>
                ))}
              </ul>
            </>
          )}
        </Container>
      </section>

      <section
        className="relative bg-cover h-96"
        style={{ backgroundImage: `url(${course.price.bg})` }}
      >
        <div className="absolute top-0 right-0 flex flex-col items-center justify-center w-full h-full gap-3 p-5 text-center lg:p-28 lg:w-auto bg-orange-80">
          <h2 className="text-2xl font-bold ">Цена курса</h2>
          <p className="text-xl font-bold">{course.title}</p>
          <p className="text-lg font-bold text-white">
            от {course.price.formats.distance} ₸
          </p>
          <Button variant="outlined" size="lg">
            Начать обучение
          </Button>
        </div>
      </section>
    </main>
  );
}
