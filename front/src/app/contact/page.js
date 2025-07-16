import ContactInfo from "@/components/layouts/ContactInfo";
import Container from "@/components/layouts/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function Contact() {
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Контакты", href: `/contact` },
  ];

  return (
    <main>
      <section className="bg-primary">
        <Breadcrumbs items={breadcrumbs} />

        
        <Container className="text-white ">
          <h1 className="text-3xl font-bold py-2.5">Контакты</h1>
        </Container>
      </section>

      <section className="text-primary py-14">
        <Container className="">
          <div></div>
          <ContactInfo />
        </Container>
      </section>
    </main>
  );
}
