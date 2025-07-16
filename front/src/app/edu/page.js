import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function Education() {
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Обучение", href: `/edu` },
  ];
  return (
    <div>
      <Breadcrumbs items={breadcrumbs} />
    </div>
  );
}
