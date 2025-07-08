import { Check } from "lucide-react";

const commitments = [
  "Linhagem 80% vermelha → gema consistente",
  "Alimentação balanceada com vitaminas e ômega-3 (laudo em andamento)",
  "Logística curta (10 km médios) reduz quebras e emissões"
];

export const CommitmentSection = () => {
  return (
    <section id="compromisso" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Video Section */}
          <div className="relative">
            <div className="aspect-video bg-muted rounded-2xl overflow-hidden shadow-caioni">
              {/* Placeholder for video - you can replace with actual video */}
              <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                    <div className="w-0 h-0 border-l-[8px] border-r-0 border-b-[6px] border-t-[6px] border-l-white border-t-transparent border-b-transparent ml-1"></div>
                  </div>
                  <p className="font-lato text-muted-foreground">Vídeo: Da granja à gôndola</p>
                </div>
              </div>
            </div>
            
            {/* Overlay text */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 text-white p-4 rounded-xl">
              <p className="font-lato text-sm">
                Da granja à gôndola em um circuito fechado de higiene e rastreabilidade.
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-6">
                Compromisso Caioni em cada passo
              </h2>
            </div>

            <div className="space-y-4">
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 bg-primary/10 p-1 rounded-full mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="font-lato text-foreground leading-relaxed">
                    {commitment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};