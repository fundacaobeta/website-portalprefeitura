import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MarkdownRenderer } from '@/components/common/MarkdownRenderer';
import { Phone, FileText, Briefcase, User } from 'lucide-react';

const mainCards = [
  {
    title: 'Turista',
    description: 'Informações sobre a cultura, história, gastronomia e turismo na cidade de Betim...',
    href: '/turista',
  },
  {
    title: 'IPTU Betim',
    description: 'Confira explicação sobre as principais dúvidas e consultas em relação ao IPTU...',
    href: '/iptu',
  },
  {
    title: 'Nota Fiscal Betim',
    description: 'Confira as respostas para as principais dúvidas referentes a Nota Fiscal da Prefeitura de...',
    href: '/nota-fiscal',
  },
  {
    title: 'Contato',
    description: 'Neste site o morador pode encontrar com facilidade e comodidade informações da Prefeitura...',
    href: '/contato',
  },
];

export default async function Home() {
  const filePath = path.join(process.cwd(), '_content', 'home.md');
  const homeContent = await fs.readFile(filePath, 'utf8');

  return (
    <div className="flex flex-col gap-12">
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/40 px-4 md:px-6 overflow-hidden min-h-[400px] flex items-center justify-center">
        {/* Background Image Placeholder with Overlay */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/betim-city-placeholder.jpg')" }}></div>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}

        <div className="relative z-10 flex flex-col items-center space-y-6 text-center text-white"> {/* Text color changed to white */}
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none drop-shadow-lg"> {/* Added drop-shadow */}
            Portal de Apoio da Prefeitura de Betim
          </h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl drop-shadow-md"> {/* Text size and shadow adjusted */}
            Seu guia completo para encontrar informações e serviços da prefeitura de forma fácil e rápida.
          </p>
          <Button size="lg" className="mt-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90"> {/* Call to action button */}
            <Link href="/servicos-online">Acesse Nossos Serviços Online</Link>
          </Button>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 px-4 md:px-6">
        <div className="text-center mb-12"> {/* Title and description for the section */}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Serviços e Informações Essenciais
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            Explore os principais tópicos e serviços oferecidos pela Prefeitura de Betim.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto max-w-screen-xl">
          {mainCards.map((card) => (
            <Card key={card.title}>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-full">
                <p className="text-sm text-muted-foreground mb-4">{card.description}</p>
                <Button>
                  <Link href={card.href}>Leia mais</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* News and Announcements Section */}
      <section className="w-full py-12 md:py-24 bg-muted/40 px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Últimas Notícias e Comunicados
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            Fique por dentro dos acontecimentos e avisos importantes da Prefeitura.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-screen-xl">
          {/* Placeholder News Item 1 */}
          <Card>
            <CardHeader>
              <CardTitle>Prefeitura Lança Novo Programa Social</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Betim anuncia iniciativa para apoiar famílias em situação de vulnerabilidade social.
              </p>
              <Button variant="link" className="px-0">
                <Link href="#">Leia mais</Link>
              </Button>
            </CardContent>
          </Card>
          {/* Placeholder News Item 2 */}
          <Card>
            <CardHeader>
              <CardTitle>Campanha de Vacinação Contra a Gripe é Ampliada</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Novos postos de vacinação e horários estendidos para atender a população.
              </p>
              <Button variant="link" className="px-0">
                <Link href="#">Leia mais</Link>
              </Button>
            </CardContent>
          </Card>
          {/* Placeholder News Item 3 */}
          <Card>
            <CardHeader>
              <CardTitle>Obras de Infraestrutura Avançam no Bairro X</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Melhorias em pavimentação e saneamento básico trazem benefícios aos moradores.
              </p>
              <Button variant="link" className="px-0">
                <Link href="#">Leia mais</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
          <Button size="lg">
            <Link href="#">Ver Todas as Notícias</Link>
          </Button>
        </div>
      </section>

      {/* Quick Links and Services Section */}
      <section className="w-full py-12 md:py-24 px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Acesso Rápido a Serviços
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            Encontre rapidamente os serviços mais procurados pelos cidadãos de Betim.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mx-auto max-w-screen-xl">
          {/* Quick Link Item 1 */}
          <Card className="flex flex-col items-center text-center p-6">
            <FileText className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">IPTU 2ª Via</h3>
            <p className="text-sm text-muted-foreground mb-4">Emita seu boleto de IPTU rapidamente.</p>
            <Button variant="outline">
              <Link href="/iptu">Acessar</Link>
            </Button>
          </Card>
          {/* Quick Link Item 2 */}
          <Card className="flex flex-col items-center text-center p-6">
            <User className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Contra Cheque</h3>
            <p className="text-sm text-muted-foreground mb-4">Consulte seu holerite online.</p>
            <Button variant="outline">
              <Link href="/contra-cheque">Acessar</Link>
            </Button>
          </Card>
          {/* Quick Link Item 3 */}
          <Card className="flex flex-col items-center text-center p-6">
            <Briefcase className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Nota Fiscal Eletrônica</h3>
            <p className="text-sm text-muted-foreground mb-4">Emissão e consulta de NFS-e.</p>
            <Button variant="outline">
              <Link href="/nota-fiscal">Acessar</Link>
            </Button>
          </Card>
          {/* Quick Link Item 4 */}
          <Card className="flex flex-col items-center text-center p-6">
            <Phone className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Telefones Úteis</h3>
            <p className="text-sm text-muted-foreground mb-4">Contatos de emergência e serviços.</p>
            <Button variant="outline">
              <Link href="/telefones-uteis">Acessar</Link>
            </Button>
          </Card>
        </div>
        <div className="text-center mt-12">
          <Button size="lg">
            <Link href="/servicos-online">Ver Todos os Serviços Online</Link>
          </Button>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 px-4 md:px-6"> {/* Added px-4 md:px-6 here */}
        <Card>
          <CardHeader>
            <CardTitle>Sobre a Prefeitura Municipal de Betim</CardTitle>
          </CardHeader>
          <CardContent>
            <MarkdownRenderer content={homeContent} />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
