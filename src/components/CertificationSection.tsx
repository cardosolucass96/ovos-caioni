import { ShieldCheck } from "lucide-react";

export const CertificationSection = () => {
  return (
    <section id="certificacao" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Selo SIM */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-primary rounded-full shadow-caioni-lg">
              <ShieldCheck className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>

          {/* Content */}
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
            Inspecionada, segura, confiável.
          </h2>
          
          <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Produção auditada desde 2018. Cada lote segue padrões de higiene, rastreabilidade e bem-estar animal.
          </p>
          
          {/* Additional badge/seal info */}
          <div className="mt-8 inline-block bg-card px-6 py-3 rounded-xl shadow-caioni">
            <p className="font-montserrat font-semibold text-primary text-sm">
              SELO SIM - CERTIFICAÇÃO SANITÁRIA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};