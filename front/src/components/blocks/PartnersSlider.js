// "use client";

import { getPartners } from "@/data/data";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function PartnersSlider() {
  const partners = getPartners();

  return (
    <Marquee speed={40} gradient={false} pauseOnClick={true}>
      {partners.map((src, i) => (
        <div className="flex justify-center h-28" key={i}>
          <Image
            src={src}
            alt={`partner-${i}`}
            width={100}
            height={100}
            className="object-contain my-0 mx-13"
          />
        </div>
      ))}
    </Marquee>
  );
}
