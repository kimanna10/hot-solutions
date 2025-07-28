import Container from "@/components/layouts/Container";
import Button from "@/components/ui/Button";
import { getPosterById } from "@/data/data.js";
import Image from "next/image";

export default function PosterSection({
  tariff = "standart",
  id = `paket-${tariff}`,
}) {
  const poster = getPosterById(tariff);

  if (!poster) return null;

  return (
    <section className="scroll-mt-16" id={id}>
      <div className="py-3 border-y border-primary">
        <Container>
          <h2 className="text-2xl font-bold text-secondary">{poster.name}</h2>
        </Container>
      </div>

      <div className="py-5">
        <Container className="space-y-5">
          <div className="grid grid-cols-4 gap-5">
            {poster.items.map((src, i) => (
              <Image
                key={i}
                src={`/${src}`}
                height={100}
                width={100}
                alt={`poster-${i}`}
                className="w-full h-auto"
              />
            ))}
          </div>

          <Button variant="primary" size="lg">
            Заказать
          </Button>
        </Container>
      </div>
    </section>
  );
}
