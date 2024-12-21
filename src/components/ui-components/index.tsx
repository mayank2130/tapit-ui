import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { componentsData } from "@/lib/componentsData";
import Image from "next/image";
import Link from "next/link";

const UiComponents = () => {
  return (
    <div className="ml-72 md:mr-20 flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 h-full ml-10 mt-20">
        {componentsData.map((component) => (
          <Link href={component.link} key={component.name}>
            <Card className="flex mt-20 flex-col items-center justify-center bg-black h-72 border border-[#282727]">
              <CardContent>
                <Image
                  src={component.imageSrc}
                  height={300}
                  width={400}
                  objectFit="contain"
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
