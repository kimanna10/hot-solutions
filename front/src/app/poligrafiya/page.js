import PosterSection from "@/components/blocks/PosterSection";
import Container from "@/components/layouts/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function Poligrafiya() {
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Полигафия", href: `/poligrafiya` },
  ];

  return (
    <main>
      <section className="bg-primary">
        <Breadcrumbs items={breadcrumbs} />
        <Container className="text-white ">
          <h1 className="text-3xl font-bold py-2.5">Полигафия</h1>
        </Container>
      </section>

      <PosterSection tariff="standart" />
      <PosterSection tariff="optimalnyy" />
      <PosterSection tariff="universalnyy" />
      <PosterSection tariff="zhurnaly" id="zhurnaly" />
    </main>
  );
}
