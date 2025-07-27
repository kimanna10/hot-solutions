// "use client";

import { getPartners } from "@/data/data";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function PartnersSlider() {
  const partners = getPartners();

  return (
    <Marquee speed={40} gradient={false} pauseOnClick={true}>
      {partners.map((src, i) => (
        <div className="h-28 flex justify-center">
          <Image
            key={i}
            src={src}
            alt={`partner-${i}`}
            width={100}
            height={100}
            className="my-0 mx-13 object-contain"
          />
        </div>
      ))}
    </Marquee>
  );
}
