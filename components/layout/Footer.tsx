
import Link from "next/link";
import { navLinks } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-8">
      <div className="px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-foreground">
              Prefeitura Municipal de Betim
            </h3>
            <p className="mt-2 text-sm">
              Rua Pará de Minas, 640 • Brasiléia • Betim-MG • CEP. 32.600-412
            </p>
            <p className="text-sm mt-2">Telefone: 0800 256 3236</p>
            {/* Social Media Icons Placeholder */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a2.41 2.41 0 0 1-.5-1.5c0-1 .5-4 2-5.5 1.5-1.5 4-2 5.5-2h.5c1.5 0 4 .5 5.5 2 1.5 1.5 2 4.5 2 5.5a2.41 2.41 0 0 1-.5 1.5c-1.5 1.5-4 2-5.5 2h-.5c-1.5 0-4-.5-5.5-2z"/><path d="M10 9.5v5"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Institucional</h3>
            <ul className="mt-2 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Serviços</h3>
            <ul className="mt-2 space-y-2">
              <li><Link href="/servicos-online" className="text-sm hover:text-foreground">Serviços Online</Link></li>
              <li><Link href="/iptu" className="text-sm hover:text-foreground">IPTU</Link></li>
              <li><Link href="/cnd" className="text-sm hover:text-foreground">CND</Link></li>
              <li><Link href="/nota-fiscal" className="text-sm hover:text-foreground">Nota Fiscal</Link></li>
              <li><Link href="/contra-cheque" className="text-sm hover:text-foreground">Contra Cheque</Link></li>
              <li><Link href="/concurso-publico" className="text-sm hover:text-foreground">Concursos</Link></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold text-foreground">ATENÇÃO</h3>
            <p className="mt-2 text-sm">
              Este site não é oficial da Prefeitura de Betim e não representa
              nenhum órgão público ou privado. As notícias e orientações
              contidas neste site têm caráter informativo.
            </p>
            <p className="mt-2 text-sm text-red-600 dark:text-red-400 font-medium">
              **Atenção:** As informações contidas neste site são de caráter meramente informativo e podem conter imprecisões ou estar desatualizadas. Este portal foi gerado com o auxílio de Inteligência Artificial e não possui vínculo oficial com a Prefeitura Municipal de Betim. Para informações oficiais e atualizadas, consulte sempre o site oficial da prefeitura.
            </p>
             <p className="mt-2 text-sm">
                O site oficial da Prefeitura pode ser acessado em:{' '}
                <a
                href="https://www.betim.mg.gov.br"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
                >
                https://www.betim.mg.gov.br
                </a>
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-xs">
          <p>
            © {new Date().getFullYear()} Portal Prefeitura de Betim. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
