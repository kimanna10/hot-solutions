import BannerSlider from "@/components/blocks/BannerSlider";
import PartnersSlider from "@/components/blocks/PartnersSlider";
import Container from "@/components/layouts/Container";
import Button from "@/components/ui/Button";
import { getCompanyInfo, getCourses } from "@/data/data.js";
import { SquareCheck } from "lucide-react";

export default async function Home() {
  const courses = getCourses();
  const company = getCompanyInfo();
  return (
    <main>
      <section className="relative w-full sm:h-[600px] h-dvh overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
          preload="auto"
        >
          <source src="/videos/banner.mp4" type="video/mp4" />
          <source src="/videos/banner.webm" type="video/webm" />
          Ваш браузер не поддерживает видео.
        </video>
        <Container className="absolute inset-0 z-10 text-white">
          <BannerSlider />
        </Container>
      </section>

      <section className="py-12 bg-primary">
        <Container>
          <div className="grid grid-cols-5 gap-4">
            {courses.map((course, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-32 p-4 transition duration-300 bg-white cursor-pointer hover:shadow-xl"
              >
                <p>course.title</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-[url(/course-bg.webp)] object-cover text-white">
        <div className="bg-primary/50 w-full h-full">
          <Container className="flex lg:justify-end justify-center">
            <div className="text-center space-y-5 py-10">
              <p className="font-bold text-lg">
                Пройти онлайн обучение в нашей компании
              </p>
              <Button variant="secondary" size="lg" className="text-white">
                Подробнее
              </Button>
            </div>
          </Container>
        </div>
      </section>

      <section className="py-8 bg-primary text-white">
        <Container className="space-y-5">
          <h2 className="text-3xl font-bold text-center">Компания в цифрах</h2>
          <div className="grid md:grid-cols-3 grid-cols-1 lg:gap-20 gap-5">
            {company.statistics.map((stat, i) => (
              <div key={i} className="text-center xl:px-16 px-8">
                <p className="text-lg font-bold text-secondary">{stat.item}</p>
                <p>{stat.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="md:bg-secondary">
        <div className="md:bg-[linear-gradient(to_right,#FF842C_50%,transparent_50%),url('/back-bg.png')] bg-[url(/back-bg.png)] md:bg-contain bg-cover bg-right bg-no-repeat text-white">
          <Container className="grid lg:grid-cols-2 gap-10">
            <ul className="py-8 space-y-3 bg-primary/80 lg:bg-transparent lg:px-0 px-5 lg:my-0 my-10">
              {company.back.map((back, i) => (
                <li key={i} className="flex items-center gap-5 lg:max-w-100 ">
                  <SquareCheck
                    size={40}
                    strokeWidth={1}
                    className="flex-shrink-0"
                  />
                  <p className="font-medium leading-tight">{back}</p>
                </li>
              ))}
            </ul>
            <div className="xl:relative">
              <div className="xl:absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 border-8 border-secondary bg-primary py-7 px-12 text-center">
                <p className="text-2xl font-bold">Что Вы получаете?</p>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className="relative h-[700px] bg-[url('/contact-bg.png')] bg-cover bg-center">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#fff] to-transparent z-9"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#44423F] to-transparent z-10">
          <Container className=""></Container>
        </div>
      </section>

      <section className="py-2">
        <Container className="bg-white">
          <PartnersSlider />
        </Container>
      </section>
    </main>
  );
}
