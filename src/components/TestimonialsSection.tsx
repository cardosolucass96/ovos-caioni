import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Proprietária - Supermercado Central",
    content: "A qualidade dos ovos Caioni é incomparável. A gema é mais escura que ovo caipira e nossos clientes notaram a diferença imediatamente.",
    location: "Alta Floresta, MT"
  },
  {
    name: "João Santos",
    role: "Gerente - Padaria do Bairro",
    content: "Desde que mudamos para Caioni, nossas receitas ficaram muito melhores. O frescor e a consistência fazem toda a diferença.",
    location: "Sinop, MT"
  },
  {
    name: "Ana Costa",
    role: "Chef - Restaurante Família",
    content: "Trabalho com ovos Caioni há 2 anos. A entrega é sempre pontual e a qualidade nunca decepciona. Meus pratos ganharam outro nível.",
    location: "Carlinda, MT"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-20 bg-caioni-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-4">
              Histórias que inspiram
            </h2>
            <p className="font-lato text-muted-foreground text-lg">
              Parceiros que confiam na qualidade Caioni
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <Card className="bg-card border-none rounded-2xl shadow-caioni">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="h-12 w-12 text-primary mx-auto" />
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="font-lato text-lg md:text-xl text-foreground leading-relaxed mb-8">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="border-t border-muted pt-6">
                    <p className="font-montserrat font-semibold text-foreground text-lg">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="font-lato text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="font-lato text-sm text-muted-foreground mt-1">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Historical Photo Note */}
          <div className="mt-12 text-center">
            <p className="font-lato text-sm text-muted-foreground italic">
              Família Caioni - Três gerações dedicadas à qualidade desde 1979
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};