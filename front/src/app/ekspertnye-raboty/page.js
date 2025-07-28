import Container from "@/components/layouts/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import { getExpertItems, getExpertOverview } from "@/data/data";
import { SquareCheck } from "lucide-react";
import Image from "next/image";

export default async function Expert() {
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Экспертные работы", href: `/ekspertnye-raboty` },
  ];

  const overview = getExpertOverview();
  const items = getExpertItems();
  return (
    <main>
      <section className="text-white bg-primary ">
        <Breadcrumbs items={breadcrumbs} />
        <Container>
          <h1 className="text-3xl font-bold py-2.5">Экспертные работы</h1>
        </Container>
        <div className="relative w-full h-32">
          <Image
            src="/education/expertnye-raboty.png"
            alt="Экспертные работы"
            className="object-cover"
            fill
          />
        </div>
      </section>

      <section className="scroll-mt-16" id="prombez-ekspertiza">
        <div className="bg-primary py-7">
          <Container className="space-y-1">
            <h2 className="text-2xl font-bold text-secondary">
              Экспертизы промышленной безопасности
            </h2>
            <p className="text-base text-white">
              Экспертизы промышленной безопасности – это процесс подтверждения
              соответствия объекта, механизмов и оборудований , прописанных в
              нормах и правилах промышленной безопасности
            </p>
          </Container>
        </div>

        <div className="py-6 text-white bg-grey">
          <Container className="space-y-5">
            <p className="text-base">
              Экспертизам промышленной безопасности подлежат:
            </p>
            <ul className="space-y-4">
              {overview.map((item, i) => (
                <li key={i} className="flex items-center gap-5">
                  <SquareCheck
                    size={30}
                    strokeWidth={1}
                    className="flex-shrink-0"
                  />
                  <p className="text-base leading-tight">{item}</p>
                </li>
              ))}
            </ul>
            <p className="text-base">
              Результатом проведения экспертизы промышленной безопасности
              является экспертное заключение.
            </p>
          </Container>
        </div>
      </section>

      {items.map((item, i) => (
        <section
          className="flex flex-col gap-5 bg-white border-b py-7 scroll-mt-16 border-b-primary"
          id={item.id}
          key={i}
        >
          <Container className="space-y-3">
            <h2 className="text-2xl font-bold text-secondary">{item.title}</h2>
            <p className="text-base text-primary">{item.desc}</p>
          </Container>
          {item.law && (
            <div className="bg-secondary">
              <Container>
                <p className="my-5 text-base text-center text-white">
                  {item.law}
                </p>
              </Container>
            </div>
          )}

          {item.paragraph?.length > 0 && (
            <div className="text-primary">
              <Container className="space-y-3">
                {item.subtitle && (
                  <h3 className="text-xl font-bold text-secondary">
                    {item.subtitle}
                  </h3>
                )}
                {item.list?.length > 0 && (
                  <ul>
                    {item.list?.map((l, i) => (
                      <li key={i} className="text-base">
                        — {l}
                      </li>
                    ))}
                  </ul>
                )}

                {item.paragraph.map((p, i) => (
                  <p key={i} className="text-base">
                    {p}
                  </p>
                ))}
              </Container>
            </div>
          )}
          <Container>
            <Button variant="primary" size="lg">
              Заказать
            </Button>
          </Container>
        </section>
      ))}
    </main>
  );
}
