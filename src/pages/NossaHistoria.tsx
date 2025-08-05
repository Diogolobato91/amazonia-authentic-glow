import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Users, Target, Award, MapPin, Clock, Lightbulb } from "lucide-react";

const NossaHistoria = () => {
  const timelineEvents = [
    {
      year: "2018",
      title: "O Início",
      description: "Nasceu da paixão pela riqueza cultural amazônica e o desejo de conectar produtores locais ao mundo.",
      icon: Lightbulb
    },
    {
      year: "2019",
      title: "Primeiros Parceiros",
      description: "Estabelecemos parcerias com 15 produtores locais, focando em açaí e artesanato tradicional.",
      icon: Users
    },
    {
      year: "2020",
      title: "Expansão Digital",
      description: "Lançamos nossa plataforma online durante a pandemia, aumentando o alcance dos produtores.",
      icon: Target
    },
    {
      year: "2021",
      title: "Certificação Sustentável",
      description: "Implementamos processos de certificação para garantir práticas sustentáveis em toda cadeia.",
      icon: Leaf
    },
    {
      year: "2022",
      title: "Reconhecimento Nacional",
      description: "Fomos reconhecidos pelo Ministério do Meio Ambiente como exemplo de economia circular.",
      icon: Award
    },
    {
      year: "2023",
      title: "Rede Amazônica",
      description: "Expandimos para outros estados da região Norte, conectando mais de 200 produtores.",
      icon: MapPin
    }
  ];

  const values = [
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Promovemos práticas que preservam a floresta e beneficiam as comunidades locais."
    },
    {
      icon: Heart,
      title: "Autenticidade",
      description: "Cada produto carrega a história e tradição de quem o produz, mantendo a cultura viva."
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Fortalecemos laços entre produtores e consumidores, criando uma rede de apoio mútuo."
    },
    {
      icon: Target,
      title: "Transparência",
      description: "Garantimos rastreabilidade total, do produtor ao consumidor final."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-amazonia">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            Nossa História
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-terra mb-6">
            Conectando a Amazônia
            <span className="text-primary block">ao Mundo</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Nascemos do sonho de valorizar a riqueza cultural e natural de Belém do Pará, 
            criando pontes entre tradição e modernidade, entre floresta e cidade, 
            entre produtores locais e o mundo inteiro.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-16 bg-card/80 backdrop-blur-sm border-border/50 shadow-terra">
          <CardContent className="p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-terra mb-4">Nossa Missão</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Ser a vitrine que mostra ao mundo a autenticidade dos produtos amazônicos, 
                  garantindo que cada compra preserve tradições, sustente famílias e 
                  proteja nossa floresta.
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <Heart className="h-5 w-5 fill-current" />
                  <span className="font-medium">Feito com amor pela Amazônia</span>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/90aaa03b-cf9e-4399-b090-c6f73be9d301.png"
                  alt="Vitrine da Amazônia"
                  className="rounded-2xl shadow-amazonia w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-terra text-center mb-12">
            Nossa Jornada
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary/50 rounded-full"></div>
            <div className="space-y-8">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                return (
                  <div
                    key={event.year}
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                      <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-terra">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <Badge variant="outline" className="border-primary/30 text-primary">
                              {event.year}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-semibold text-terra mb-2">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {event.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-amazonia">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-terra text-center mb-12">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="text-center group hover:shadow-amazonia transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-terra mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Impact Numbers */}
        <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-primary/20 shadow-terra">
          <CardContent className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-terra text-center mb-8">
              Nosso Impacto
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <p className="text-muted-foreground">Produtores Parceiros</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1.500+</div>
                <p className="text-muted-foreground">Produtos Únicos</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50.000+</div>
                <p className="text-muted-foreground">Famílias Beneficiadas</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5</div>
                <p className="text-muted-foreground">Estados Alcançados</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NossaHistoria;