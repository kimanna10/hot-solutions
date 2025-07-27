// import Container from "@/components/layouts/Container";
// import Button from "@/components/ui/Button";
// import { getPosters } from "@/data/data.js";
// import Image from "next/image";

// export default function PosterSection({ tariff = "standart" }) {
//   const posters = getPosters();

//   return (
//     {posters.map((poster, ) => (
//       <section className="scroll-mt-16" id={`paket-${tariff}`}>
//       <div className="py-3 border-y border-y-primary ">
//         <Container>
//           <h2 className="text-2xl font-bold text-secondary">Пакет: </h2>
//         </Container>
//       </div>
//       <div className="py-5">
//         <Container className="space-y-5">
//           <div className="grid grid-cols-4 gap-5">
//           {poster.items.map((src, i) => (
//                       <Image
//                       key={i}
//                       src={`/${path}`}
//                       height={100}
//                       width={100}
//                       alt={`poster-${i}`}
//                       className="w-full h-auto "
//                     />
//       ))}

//             {/* {posters.map((path, i) => (
//               <Image
//                 key={i}
//                 src={`/${path}`}
//                 height={100}
//                 width={100}
//                 alt={`poster-${i}`}
//                 className="w-full h-auto rounded shadow"
//               />
//             ))} */}
//           </div>
//           <Button variant="primary" size="lg">
//             Заказать
//           </Button>
//         </Container>
//       </div>
//     </section>
//     ))}

//   );
// }
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
                className="w-full h-auto rounded shadow"
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
