import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-family-background.jpg";


export const HeroSection = () => {
  const whatsappNumber = '556696829987';
  const whatsappMessage = encodeURIComponent('Olá, vim pelo site e queria saber mais sobre os Ovos Caioni');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(0px)',
      }}
    >
      {/* Overlay with blur effect */}
      <div 
        className="absolute inset-0 bg-black/20"
        style={{
          backdropFilter: 'blur(2px)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/logo-caioni.svg" 
              alt="Ovos Caioni Logo" 
              className="h-20 md:h-24 mx-auto mb-6"
            />
          </div>

          {/* Main Headline */}
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Ovos Caioni: qualidade de verdade, direto da nossa família para a sua mesa
          </h1>

          {/* Sub-headline */}
          <h2 className="font-lato text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Há mais de duas décadas, nossa dedicação e paixão pela qualidade produzem ovos que unem tradição, frescor e excelência em cada detalhe.
          </h2>

          {/* CTA Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              asChild
              size="lg"
              className="font-montserrat font-semibold text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl shadow-caioni-lg transition-all duration-300 hover:shadow-caioni hover:scale-105"
            >
              <span>
                Quero revender Ovos Caioni
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Button>
          </a>
        </div>
      </div>

      {/* Gradient overlay at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};