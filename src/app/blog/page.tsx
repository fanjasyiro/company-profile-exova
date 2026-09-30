import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function BlogPage() {
  return (
    <Section>
      <Container className="flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-h1">Blog</h1>
        <p className="mt-4 text-body">Blog page placeholder</p>
      </Container>
    </Section>
  );
}
