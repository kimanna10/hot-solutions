// "use client";

import { getPartners } from "@/data/data";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function PartnersSlider() {
  const partners = getPartners();

  return (
    <Marquee speed={90} gradient={false} pauseOnClick={true}>
      {partners.map((src, i) => (
        <div
          className="flex justify-center items-center h-40 overflow-hidden"
          key={i}
        >
          <Image
            src={src}
            alt={`partner-${i}`}
            width={80}
            height={100}
            className="object-contain my-0 lg:mx-14 mx-6 "
          />
        </div>
      ))}
    </Marquee>
  );
}
