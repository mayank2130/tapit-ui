import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";
import LaunchUI from "../../logos/launch-ui";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="w-full bg-black px-4">
      <div className="mx-auto max-w-container">
        <Footer className="bg-black">
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <LaunchUI />
                <h3 className="text-xl font-bold text-white">Launch UI</h3>
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold text-white">Product</h3>
              <Link href="/" className="text-sm text-muted-foreground">
                Changelog
              </Link>
              <Link href="/" className="text-sm text-muted-foreground">
                Documentation
              </Link>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold text-white">Company</h3>
              <Link href="/" className="text-sm text-muted-foreground">
                About
              </Link>
              <Link href="/" className="text-sm text-muted-foreground">
                Careers
              </Link>
              <Link href="/" className="text-sm text-muted-foreground">
                Blog
              </Link>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold text-white">Contact</h3>
              <Link href="/" className="text-sm text-muted-foreground">
                Discord
              </Link>
              <Link href="/" className="text-sm text-muted-foreground">
                Twitter
              </Link>
              <Link href="/" className="text-sm text-muted-foreground">
                Github
              </Link>
            </FooterColumn>
          </FooterContent>
          <FooterBottom className="border-t border-[#FFDB89]">
            <div>© 2024 Mayank Thakur. All rights reserved</div>
            <div className="flex items-center gap-4">
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Service</Link>
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
