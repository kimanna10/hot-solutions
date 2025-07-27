import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function ApplicationForm() {
  return (
    <form
      className="space-y-4"
      aria-label="Форма заявки"
      onSubmit={(e) => e.preventDefault()}
    >
      <Input
        id="name"
        name="name"
        label="Имя"
        required
        autoComplete="name"
        placeholder="Введите имя"
      />
      <Input
        id="email"
        name="email"
        label="Email"
        type="email"
        placeholder="Введите email"
        required
      />
      <Input
        id="phone"
        name="phone"
        label="Телефон"
        type="tel"
        placeholder="Введите телефон"
        required
      />
      <Input
        id="theme"
        name="theme"
        label="Тема"
        placeholder="Введите тему"
        required
      />
      <Button variant="primary" size="lg" type="submit" className="w-full">
        Подать заявку
      </Button>
    </form>
  );
}
