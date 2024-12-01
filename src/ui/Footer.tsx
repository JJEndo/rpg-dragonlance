import { Link } from "@nextui-org/react";
import { ReactNode } from "react";

interface FooterLinkProps {
    href: string;
    children: ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
    <Link href={href} className="text-foreground-secondary">
        {children}
    </Link>
);


export default function Footer() {
  return (
    <footer className="bg-background text-foreground-secondary flex flex-row items-center justify-center gap-4">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 sm:flex-row">
            <div className="flex items-center gap-4">
                <p>&copy;</p>
                <FooterLink href="https://es.wikipedia.org/wiki/Dragonlance">About</FooterLink>
                <h1>Creado por <a href="#" className="text-foreground-secondary">Jonathan Endo</a></h1>
            </div>
        </div>
        </div>
    </footer>
    );
}