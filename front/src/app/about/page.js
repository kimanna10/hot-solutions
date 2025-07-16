import Container from "@/components/layouts/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function About() {
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "О компании", href: `/about` },
  ];

  return (
    <main>
      <section className="bg-primary">
        <Breadcrumbs items={breadcrumbs} />

        <Container className="text-white">
          <h1 className="text-3xl font-bold py-2.5">О компании</h1>
        </Container>
      </section>
    </main>
  );
}
