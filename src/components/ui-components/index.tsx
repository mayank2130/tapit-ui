import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const UiComponents = () => {

  
  return (
    <div className="ml-72 flex flex-col">
      <div className="flex flex-row gap-x-10 h-full ml-10">
        <Link href={`/components/scroll-tabs`}>
          <Card className="flex mt-40 flex-col items-center justify-center bg-black h-96 border-[#161616]">
            <CardContent>
              <Image
                src="/scrolltabs.png"
                height={300}
                width={400}
                alt="scroll-bar"
              />
            </CardContent>
          </Card>
          <CardTitle className="text-white pt-4">Scrollable Tabs</CardTitle>
          <p className="text-white pt-4 text-sm font-normal tracking-normal">
            Swipe over tabs to see them scroll horizontally
          </p>
        </Link>
        <Link href={`/components/button`}>
          <Card className="flex mt-40 flex-col items-center justify-center bg-black h-96 border-[#161616]">
            <CardContent>
              <Image
                src="/scrolltabs.png"
                height={300}
                width={400}
                alt="scroll-bar"
              />
            </CardContent>
          </Card>
          <CardTitle className="text-white pt-4">Button</CardTitle>
          <p className="text-white pt-4 text-sm font-normal tracking-normal">
            Add button and enjoy it&apos;s various variants
          </p>
        </Link>
      </div>

      <div className="flex flex-row gap-x-10 h-full ml-10">
        <Card className="flex mt-40 items-center justify-center">
          <CardContent>
            <Image
              src="./globe.svg"
              height={300}
              width={400}
              alt="scroll-bar"
            />
          </CardContent>
        </Card>
        <Card className="flex mt-40 items-center justify-center">
          <CardContent>
            <Image
              src="./globe.svg"
              height={300}
              width={400}
              alt="scroll-bar"
            />
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-row gap-x-10 h-full ml-10">
        <Card className="flex mt-40 items-center justify-center">
          <CardContent>
            <Image
              src="./globe.svg"
              height={300}
              width={400}
              alt="scroll-bar"
            />
          </CardContent>
        </Card>
        <Card className="flex mt-40 items-center justify-center">
          <CardContent>
            <Image
              src="./globe.svg"
              height={300}
              width={400}
              alt="scroll-bar"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UiComponents;
