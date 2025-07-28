import Container from "@/components/layouts/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
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
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </main>
  );
}
