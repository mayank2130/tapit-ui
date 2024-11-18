import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const UiComponents = (props: Props) => {
  const name = "card";
  return (
    <div className="ml-72 flex flex-col">
      <div className="flex flex-row gap-x-10 h-full ml-10">
        <Link href={`/components/${name}`}>
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
        </Link>
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
