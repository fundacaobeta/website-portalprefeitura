
import Link from "next/link";
import { sidebarLinks, neighborLinks } from "@/lib/navigation";

export function Sidebar() {
  return (
    <aside className="w-full md:w-64 lg:w-72 flex-shrink-0">
      <div className="sticky top-20">
        <div className="mb-8">
          <h3 className="font-semibold mb-2 text-foreground">
            Pesquisar por:
          </h3>
          <ul className="space-y-2">
            {sidebarLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-foreground">
            Prefeituras Vizinhas
          </h3>
          <ul className="space-y-2">
            {neighborLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
