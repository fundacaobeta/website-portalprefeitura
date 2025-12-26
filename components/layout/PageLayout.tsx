
import { Sidebar } from "./Sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="py-8 px-4 md:px-6">
      <div className="flex flex-col md:flex-row gap-8">
        <main className="flex-1 min-w-0">
          {children}
          {/* General Call to Action */}
          <div className="mt-12 pt-8 border-t border-border text-center">
            <h3 className="text-xl font-semibold mb-4">Precisa de mais informações ou serviços?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/servicos-online">Acesse Nossos Serviços Online</Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="/contato">Entre em Contato</Link>
              </Button>
            </div>
          </div>
        </main>
        <Sidebar />
      </div>
    </div>
  );
}
