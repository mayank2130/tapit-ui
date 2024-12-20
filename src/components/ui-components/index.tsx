import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";

const UiComponents = () => {
  
  const componentsData = [
    {
      name: "scroll-tabs",
      imageSrc: "/scrolltabs.png",
      title: "Scrollable Tabs",
      description: "Swipe over tabs to see them scroll horizontally",
      link: "/components/scroll-tabs",
    },
    {
      name: "card",
      imageSrc: "/card.png",
      title: "Card",
      description: "Add Card and enjoy its various variants",
      link: "/components/card",
    },
    {
      name: "flipwords",
      imageSrc: "/flipwords.jpeg",
      title: "Flip Words",
      description: "Custom Flip Words with various options",
      link: "/components/card",
    },
    {
      name: "otp",
      imageSrc: "/otp.jpeg",
      title: "Otp Input",
      description: "Handle user Otp Input in style",
      link: "/components/otp-input",
    },
  ];

  return (
    <div className="ml-72 md:mr-20 flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 h-full ml-10 mt-20">
        {componentsData.map((component) => (
          <Link href={component.link} key={component.name}>
            <Card className="flex mt-20 flex-col items-center justify-center bg-black h-96 border-[#161616]">
              <CardContent>
                <Image
                  src={component.imageSrc}
                  height={300}
                  width={400}
                  alt={component.name}
                />
              </CardContent>
            </Card>
            <CardTitle className="text-white pt-4">{component.title}</CardTitle>
            <p className="text-white pt-4 text-sm font-normal tracking-normal">
              {component.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UiComponents;
