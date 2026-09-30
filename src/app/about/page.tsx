import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function AboutPage() {
  return (
    <Section>
      <Container className="flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-h1">About</h1>
        <p className="mt-4 text-body">About page placeholder</p>
      </Container>
    </Section>
  );
}
