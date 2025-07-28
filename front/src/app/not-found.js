import Container from "@/components/layouts/Container";
export default function NotFound() {
  return (
    <main className="flex items-center text-center h-dvh">
      <Container>
        <h1 className="text-3xl font-bold text-primary">
          404 — Страница не найдена
        </h1>
        <p className="mt-2 text-grey-87">Попробуйте вернуться на главную</p>
      </Container>
    </main>
  );
}
