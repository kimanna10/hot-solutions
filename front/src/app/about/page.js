import GallerySlider from "@/components/blocks/GallerySlider";
import Container from "@/components/layouts/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default async function About() {
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "О компании", href: `/about` },
  ];

  return (
    <main>
      <section className="bg-primary">
        <Breadcrumbs items={breadcrumbs} />

        <div className="py-5 text-white">
          <Container className="space-y-2.5">
            <h1 className="text-3xl font-bold">О компании</h1>
            <p className="text-base">
              ТОО «Hot Solutions» осуществляет свою деятельность с 2019 года,
              является компанией №1 Республики Казахстан по предоставлению услуг
              по безопасности и охране труда, промышленной безопасности,
              пожарной безопасности, электробезопасности. Наш центр располагает
              всем необходимым для организации эффективного образовательного
              процесса. Наша цель – поддержание долгосрочных партнерских
              отношений.
            </p>
          </Container>
        </div>
      </section>

      <section className="py-5 ">
        <Container>
          <iframe
            src="/files/presentation.pdf"
            className="w-full h-[600px]"
            title="Презентация Hot Solutions"
          ></iframe>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <h2 className="mb-5 text-2xl font-bold">Фотогалерея</h2>
          <GallerySlider />
        </Container>
      </section>
    </main>
  );
}
