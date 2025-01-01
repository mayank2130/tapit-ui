import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <Section className="group relative overflow-hidden">
      <div className="relative z-10 mx-auto flex max-w-container flex-col items-center gap-6 text-center sm:gap-8">
        <h2 className="text-3xl font-semibold sm:text-5xl text-white">
          Start building
        </h2>
        <Button
          variant="default"
          className="border-t border-[#FFDB89]"
          size="lg"
          asChild
        >
          <a href={"/"}>Get Started</a>
        </Button>
      </div>
    </Section>
  );
}
