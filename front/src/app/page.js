import BannerSlider from "@/components/blocks/BannerSlider";
import PartnersSlider from "@/components/blocks/PartnersSlider";
import Container from "@/components/layouts/Container";
import { getCourses } from "@/data/data.js";

export default async function Home() {
  const courses = getCourses();
  return (
    <main>
      <section className="relative w-full h-[600px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          preload="auto"
        >
          <source src="/videos/banner.mp4" type="video/mp4" />
          <source src="/videos/banner.webm" type="video/webm" />
          Ваш браузер не поддерживает видео.
        </video>
        <Container className="text-white absolute inset-0 z-10">
          <BannerSlider />
        </Container>
      </section>

      <section className="bg-primary py-12">
        <Container className="">
          <div className="grid grid-cols-5 gap-4">
            {courses.map((course, i) => (
              <div
                key={i}
                className="bg-white h-32 flex items-center justify-center p-4 transition duration-300 hover:shadow-xl  cursor-pointer"
              >
                <p>course.title</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container className="bg-white">
          <PartnersSlider />
        </Container>
      </section>
    </main>
  );
}
