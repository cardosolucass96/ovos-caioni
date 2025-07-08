import { Egg, Dumbbell, Leaf } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const products = [
  {
    product: "Caioni Clássico 6 / 12 / 30",
    description: "Ovos vermelhos calibre médio, ideais para o dia a dia.",
    icon: Egg,
    badge: "mais vendido",
  },
  {
    product: "Caioni Jumbo 20",
    description: "Ovos >70 g para padarias, cafeterias e público fitness.",
    icon: Dumbbell,
    badge: "extra grande",
  },
  {
    product: "Caioni Caipira (piloto)",
    description: "Gema alaranjada natural; lotes limitados sob reserva.",
    icon: Leaf,
    badge: "produção limitada",
  },
] as const;

export const ProductLineSection = () => (
  <section id="produtos" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Nossa linha de produtos
          </h2>
        </div>

        {/* =========================  MOBILE  ========================= */}
        <div className="space-y-4 md:hidden">
          {products.map((p, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 p-4 rounded-2xl bg-muted/10 ring-1 ring-muted/30 shadow-caioni"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 text-primary">
                  <p.icon className="w-5 h-5" />
                </span>
                <h3 className="font-montserrat font-semibold text-lg text-foreground flex-1">
                  {p.product}
                </h3>
                {p.badge && (
                  <Badge variant="secondary" className="whitespace-nowrap">
                    {p.badge}
                  </Badge>
                )}
              </div>
              <p className="font-lato text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* =========================  DESKTOP  ========================= */}
        <div className="hidden md:block relative overflow-x-auto rounded-2xl shadow-caioni ring-1 ring-muted/40 backdrop-blur">
          <Table className="min-w-full divide-y divide-muted/40">
            {/* Cabeçalho fixo no scroll */}
            <TableHeader className="bg-muted/20 backdrop-blur-md supports-[backdrop-filter]:bg-muted/50 sticky top-0 z-10">
              <TableRow>
                <TableHead className="py-5 pl-6 font-montserrat text-lg text-foreground">
                  Produto
                </TableHead>
                <TableHead className="py-5 px-6 font-montserrat text-lg text-foreground">
                  Descrição
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((p, i) => (
                <TableRow
                  key={i}
                  className="even:bg-muted/10 hover:bg-primary/5 transition-colors group"
                >
                  <TableCell className="py-6 pl-6 flex items-center gap-3 font-montserrat font-medium text-foreground">
                    {/* Ícone */}
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-primary/10 text-primary group-hover:bg-primary/20">
                      <p.icon className="w-4 h-4" />
                    </span>
                    {p.product}
                    {/* Badge opcional */}
                    {p.badge && (
                      <Badge variant="secondary" className="ml-3 whitespace-nowrap">
                        {p.badge}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="py-6 px-6 font-lato text-muted-foreground leading-relaxed">
                    {p.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Nota de rodapé */}
        <p className="mt-6 text-center font-lato text-xs sm:text-sm text-muted-foreground">
          * Todos os produtos seguem padrões rigorosos de qualidade e frescor
        </p>
      </div>
    </div>
  </section>
);
