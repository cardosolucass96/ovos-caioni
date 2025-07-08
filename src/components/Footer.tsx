import { MapPin, Phone, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          
          {/* Logo and Address */}
          <div className="text-center md:text-left">
            <img 
              src="/logo-caioni.svg" 
              alt="Ovos Caioni Logo" 
              className="h-12 mx-auto md:mx-0 mb-4 filter brightness-0 invert"
            />
            <div className="flex items-start space-x-2 justify-center md:justify-start">
              <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
              <div className="font-lato text-sm">
                <p>Granja Caioni</p>
                <p>Alta Floresta, MT</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h4 className="font-montserrat font-semibold mb-4">Contato</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 justify-center">
                <Phone className="h-4 w-4" />
                <span className="font-lato text-sm">WhatsApp</span>
              </div>
              <div className="flex items-center space-x-2 justify-center">
                <Instagram className="h-4 w-4" />
                <span className="font-lato text-sm">@granjacaioni</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="text-center md:text-right">
            <h4 className="font-montserrat font-semibold mb-4">Informações</h4>
            <div className="space-y-2 font-lato text-sm">
              <p>
                <a href="#certificacao" className="hover:text-primary transition-colors">
                  Política de Qualidade
                </a>
              </p>
              <p>
                <a href="#certificacao" className="hover:text-primary transition-colors">
                  Certificação
                </a>
              </p>
              <p>
                <a href="#" className="hover:text-primary transition-colors">
                  Mídia Kit
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="font-lato text-sm text-background/80 mb-2">
            © 2025 Ovos Caioni. Todos os direitos reservados.
          </p>
          <p className="font-lato text-xs text-background/60">
            Laudo nutricional protocolado – divulgação prevista para out/2025.
          </p>
        </div>
      </div>
    </footer>
  );
};