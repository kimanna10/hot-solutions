import Container from "@/components/layouts/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function Expert() {
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Экспертные работы", href: `/ekspertnye-raboty` },
  ];
  return (
    <main>
      <section className="bg-primary">
        <Breadcrumbs items={breadcrumbs} />
        <Container className="text-white ">
          <h1 className="text-3xl font-bold py-2.5">Экспертные работы</h1>
        </Container>
      </section>
    </main>
  );
}
