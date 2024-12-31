import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
  SquarePenIcon,
} from "lucide-react";
import {
  Item,
  ItemIcon,
  ItemTitle,
  ItemDescription,
} from "@/components/ui/item";
import { Section } from "@/components/ui/section";

const itemsData = [
  {
    icon: <ScanFaceIcon className="h-7 w-7 stroke-1" />,
    title: "Accessibility first",
    description: "Fully WCAG 2.0 compliant, made with best a11y practices",
  },
  {
    icon: <MonitorSmartphoneIcon className="h-7 w-7 stroke-1" />,
    title: "Responsive design",
    description: "Looks and works great on any device and screen size",
  },
  {
    icon: <EclipseIcon className="h-7 w-7 stroke-1" />,
    title: "Light and dark mode",
    description: "Seamless switching between color schemes, 6 themes included",
  },
  {
    icon: <BlocksIcon className="h-7 w-7 stroke-1" />,
    title: "Easy to customize",
    description: "Flexible options to match your product or brand",
  },
  {
    icon: <FastForwardIcon className="h-7 w-7 stroke-1" />,
    title: "Top-level performance",
    description: "Made for lightning-fast load times and smooth interactions",
  },
  {
    icon: <RocketIcon className="h-7 w-7 stroke-1" />,
    title: "Production ready",
    description: "Thoroughly tested and launch-prepared",
  },
];

export default function Items() {
  return (
    <Section>
      <div className="mx-auto text-white flex max-w-container flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl font-semibold font-mono leading-tight sm:text-5xl sm:leading-tight">
          Everything you need. Nothing you don&apos;t.
        </h2>
        <div className="grid auto-rows-fr grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-3">
          {itemsData.map((item, index) => (
            <Item key={index}>
              <div className="flex flex-row gap-6 items-center">
                <ItemIcon className="bg-[#1B1B1B] rounded-full p-5 border-t text-white">
                  {item.icon}
                </ItemIcon>
                <div className="flex flex-col gap-2">
                  <ItemTitle className="flex text-white  font-mono tracking-normal items-center gap-2">
                    {item.title}
                  </ItemTitle>
                  <ItemDescription className="tracking-normal font-mono">{item.description}</ItemDescription>
                </div>
              </div>
            </Item>
          ))}
        </div>
      </div>
    </Section>
  );
}
