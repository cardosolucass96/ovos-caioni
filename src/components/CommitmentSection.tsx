import { Check } from "lucide-react";

const commitments = [
  "Linhagem 80 % vermelha: gemas mais consistentes",
  "Alimentação balanceada com vitaminas e ômega-3 (laudo em andamento)",
  "Logística curta (10 km médios) reduz quebras e emissões"
];

export const CommitmentSection = () => {
  return (
    <section id="compromisso" className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

      {/* Vídeo */}
      <div className="relative">
        {/* Mantém o aspect-ratio mas sem background preto */}
        <div
          className="relative w-full max-w-xs mx-auto overflow-hidden rounded-2xl shadow-caioni aspect-[9/16]"
        >
          <iframe
            src="https://player-vz-fab3c7e6-e73.tv.pandavideo.com.br/embed/?v=41675b4d-3f11-497c-96a0-73af46207239"
            title="Vídeo: Da granja à gôndola"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>

      {/* Conteúdo */}
      <div className="space-y-8">

        <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-2">
          Compromisso com a qualidade
        </h2>
        <p className="font-lato text-lg text-muted-foreground mb-6">
          Ovo não é tudo igual. A Granja Caioni é uma empresa familiar que valoriza a tradição e o cuidado em cada detalhe. Desde a escolha dos grãos que alimentam nossas aves até o controle rigoroso de cada etapa da produção, garantimos que cada ovo carrega o nosso compromisso com a qualidade. Gemas cheias de sabor, prontas para enriquecer sua alimentação.
        </p>

        <div className="space-y-4">
          {commitments.map((c, i) => (
            <div key={i} className="flex items-start space-x-3">
              <div className="flex-shrink-0 bg-primary/10 p-1 rounded-full mt-1">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <p className="font-lato text-foreground leading-relaxed">{c}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

  );
};