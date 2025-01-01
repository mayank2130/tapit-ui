import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Section } from "@/components/ui/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionData = [
  {
    id: "item-1",
    question: "Why having a great UI is critical for your Ideas?",
    answer:
      "In today's AI-driven world, standing out is harder than ever. While anyone can build a product, a professional landing page makes the difference between success and failure.",
    answer2: "Tap UI helps you ship faster without compromising on quality.",
  },
  {
    id: "item-2",
    question: "Why use Tap UI instead of a no-code tool?",
    answer:
      "No-code tools lock you into their ecosystem with recurring fees and limited control. They often come with performance issues and make it difficult to integrate with your product.",
    answer2:
      "Unlike many libraries that rely on outdated CSS practices and old dependencies, Tap UI is built with modern technologies and best practices in mind.",
    answer3: "",
  },
  {
    id: "item-3",
    question: "Why exactly does it mean that 'The code is yours'?",
    answer:
      "The basic version of Tap UI is open-source and free forever, under a do-whatever-you-want license.",
    answer2:
      "The pro version that contains more components and options is a one-time purchase that gives you lifetime access to all current and future content.",
    answer3:
      "Use it for unlimited personal and commercial projects - no recurring fees or restrictions.",
  },
  // Add more items as needed
];

const Qna = () => {
  return (
    <MaxWidthWrapper>
      <Section>
        <h2 className="text-center text-white text-3xl font-semibold sm:text-5xl">
          Questions and Answers
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-2/3 mt-10 mx-auto text-white"
        >
          {accordionData.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="bg-gradient-to-b from-[#111111] to-black border-t border-[#FFDB89] p-2 px-4 rounded-md mt-3"
            >
              <AccordionTrigger className="font-mono hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-balance font-mono">
                {item.answer}
                <p className="mt-3">{item.answer2}</p>
                <p className="mt-3">{item.answer3}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </MaxWidthWrapper>
  );
};

export default Qna;
