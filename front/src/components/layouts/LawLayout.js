import Container from "./Container";

export default function LawLayout({ law = "" }) {
  return (
    <div className="py-5 bg-secondary">
      <Container>
        <p className="text-base text-justify text-white ">{law}</p>
      </Container>
    </div>
  );
}
