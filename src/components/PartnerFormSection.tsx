import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  nome: string;
  empresa: string;
  cidade: string;
  uf: string;
  whatsapp: string;
  volume: string;
  mensagem: string;
}

export const PartnerFormSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    empresa: '',
    cidade: '',
    uf: '',
    whatsapp: '',
    volume: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.nome || !formData.empresa || !formData.cidade || !formData.uf || !formData.whatsapp) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    try {
      // Here you would typically send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Proposta solicitada com sucesso!",
        description: "Em breve entraremos em contato com informações personalizadas.",
      });
      
      // Reset form
      setFormData({
        nome: '',
        empresa: '',
        cidade: '',
        uf: '',
        whatsapp: '',
        volume: '',
        mensagem: ''
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente em alguns minutos.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="seja-nosso-parceiro" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-4">
              Seja nosso parceiro
            </h2>
            <p className="font-lato text-lg text-muted-foreground">
              Pronto para oferecer mais qualidade nas suas gôndolas?
            </p>
            <p className="font-lato text-muted-foreground mt-2">
              Preencha e receba preços, prazos e logística sob medida.
            </p>
          </div>

          {/* Form */}
          <Card className="bg-card border-none rounded-2xl shadow-caioni">
            <CardHeader>
              <CardTitle className="font-montserrat text-2xl text-center text-foreground">
                Solicitar Proposta
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Nome */}
                <div>
                  <Label htmlFor="nome" className="font-montserrat font-medium text-foreground">
                    Nome *
                  </Label>
                  <Input
                    id="nome"
                    value={formData.nome}
                    onChange={(e) => handleInputChange('nome', e.target.value)}
                    className="mt-2 rounded-xl border-input"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>

                {/* Empresa */}
                <div>
                  <Label htmlFor="empresa" className="font-montserrat font-medium text-foreground">
                    Empresa *
                  </Label>
                  <Input
                    id="empresa"
                    value={formData.empresa}
                    onChange={(e) => handleInputChange('empresa', e.target.value)}
                    className="mt-2 rounded-xl border-input"
                    placeholder="Nome da sua empresa"
                    required
                  />
                </div>

                {/* Cidade e UF */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="cidade" className="font-montserrat font-medium text-foreground">
                      Cidade *
                    </Label>
                    <Input
                      id="cidade"
                      value={formData.cidade}
                      onChange={(e) => handleInputChange('cidade', e.target.value)}
                      className="mt-2 rounded-xl border-input"
                      placeholder="Sua cidade"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="uf" className="font-montserrat font-medium text-foreground">
                      UF *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange('uf', value)}>
                      <SelectTrigger className="mt-2 rounded-xl border-input">
                        <SelectValue placeholder="UF" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="MT">MT</SelectItem>
                        <SelectItem value="RO">RO</SelectItem>
                        <SelectItem value="AC">AC</SelectItem>
                        <SelectItem value="AM">AM</SelectItem>
                        <SelectItem value="PA">PA</SelectItem>
                        {/* Add more states as needed */}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <Label htmlFor="whatsapp" className="font-montserrat font-medium text-foreground">
                    Telefone/WhatsApp *
                  </Label>
                  <Input
                    id="whatsapp"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                    className="mt-2 rounded-xl border-input"
                    placeholder="(65) 99999-9999"
                    required
                  />
                </div>

                {/* Volume */}
                <div>
                  <Label htmlFor="volume" className="font-montserrat font-medium text-foreground">
                    Volume mensal estimado
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('volume', value)}>
                    <SelectTrigger className="mt-2 rounded-xl border-input">
                      <SelectValue placeholder="Selecione o volume" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ate-1000">Até 1.000 ovos</SelectItem>
                      <SelectItem value="1000-5000">1.000 - 5.000 ovos</SelectItem>
                      <SelectItem value="5000-10000">5.000 - 10.000 ovos</SelectItem>
                      <SelectItem value="mais-10000">Mais de 10.000 ovos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Mensagem */}
                <div>
                  <Label htmlFor="mensagem" className="font-montserrat font-medium text-foreground">
                    Mensagem adicional
                  </Label>
                  <Textarea
                    id="mensagem"
                    value={formData.mensagem}
                    onChange={(e) => handleInputChange('mensagem', e.target.value)}
                    className="mt-2 rounded-xl border-input"
                    placeholder="Conte-nos mais sobre suas necessidades..."
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-montserrat font-semibold text-lg py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-caioni transition-all duration-300 hover:shadow-caioni-lg"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Solicitar proposta
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};