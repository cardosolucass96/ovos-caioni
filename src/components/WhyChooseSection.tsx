import { Clock, Sparkles, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Clock,
    title: "Frescor em cada ovo",
    description: "Direto da nossa granja para sua mesa, preservando sabor e nutrientes."
  },
  {
    icon: Sparkles,
    title: "Qualidade que brilha na gema.",
    description: "Nutrição equilibrada que garante ovos com gema e clara mais consistentes, cor vibrante e frescor prolongado."
  },
  {
    icon: ShieldCheck,
    title: "Qualidade comprovada",
    description: "Cumprimos todas as exigências do MAPA, com fiscalização contínua que garante a qualidade dos nossos ovos."
  }
];

export const WhyChooseSection = () => {
  return (
    <section
      id="por-que-escolher"
      className="py-20 bg-caioni-gradient relative"
      style={{
        backgroundImage: "url('/bg-why.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <style>{`
        @media (max-width: 767px) {
          #por-que-escolher {
            background-image: url('/bg-why-mobile.jpg') !important;
          }
        }
      `}</style>
      <div className="container mx-auto px-4">

        <div className="text-center mb-8">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-4">
            Por que escolher Ovos Caioni?
          </h2>
          <img
            src="/logo-completa.svg"
            alt="Logo Caioni Completa"
            className="mx-auto my-8"
            style={{ maxWidth: '250px', width: '60%', height: 'auto' }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-card border-none rounded-2xl shadow-caioni hover:shadow-caioni-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="bg-primary/10 p-4 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="font-montserrat font-semibold text-2xl text-foreground mb-4">
                  {feature.title}
                </h3>
                
                <p className="font-lato text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};