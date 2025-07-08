import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const products = [
  {
    product: "Caioni Clássico 6 / 12 / 30",
    description: "Ovos vermelhos calibre médio, ideais para o dia a dia."
  },
  {
    product: "Caioni Jumbo 20",
    description: "Ovos >70g para padarias, cafeterias e público fitness."
  },
  {
    product: "Caioni Caipira (piloto)",
    description: "Gema alaranjada natural; lotes limitados sob reserva."
  }
];

export const ProductLineSection = () => {
  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-4">
              Nossa linha de produtos
            </h2>
          </div>

          {/* Products Table */}
          <div className="bg-card rounded-2xl shadow-caioni overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50 hover:bg-muted/50">
                  <TableHead className="font-montserrat font-semibold text-foreground py-6 text-lg">
                    Produto
                  </TableHead>
                  <TableHead className="font-montserrat font-semibold text-foreground py-6 text-lg">
                    Descrição
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product, index) => (
                  <TableRow key={index} className="hover:bg-muted/30 transition-colors duration-200">
                    <TableCell className="font-montserrat font-medium text-foreground py-6 text-base">
                      {product.product}
                    </TableCell>
                    <TableCell className="font-lato text-muted-foreground py-6 leading-relaxed">
                      {product.description}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="font-lato text-sm text-muted-foreground">
              * Todos os produtos seguem padrões rigorosos de qualidade e frescor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};