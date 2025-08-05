import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, Leaf, Users, ShoppingBag, Award, ArrowRight, Fish, Palette, Sparkles, Shield, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-amazonia">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-terra/20 via-primary/10 to-secondary/20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        
        <div className="relative z-10 container mx-auto px-4 lg:px-6 h-full min-h-[90vh] flex items-center">
          <div className="max-w-4xl text-white">
            <div className="flex items-center mb-6 space-x-2">
              <MapPin className="h-6 w-6 text-amazonia" />
              <span className="text-amazonia font-semibold text-lg tracking-wide">Belém • Pará • Brasil</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Vitrine da <span className="text-amazonia">Amazônia</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white/90 max-w-3xl">
              Conectando a riqueza cultural e natural de Belém diretamente ao mundo. 
              Produtos autênticos com selo de origem, histórias verdadeiras, economia que preserva.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/produtos">
                <Button size="lg" className="bg-amazonia hover:bg-amazonia/90 text-white shadow-amazonia transition-smooth hover:scale-105 w-full sm:w-auto min-w-[200px] h-14">
                  <Leaf className="mr-3 h-5 w-5" />
                  Explorar Produtos
                </Button>
              </Link>
              <Link to="/sobre">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/80 text-white hover:bg-white hover:text-terra backdrop-blur-sm shadow-terra transition-smooth hover:scale-105 w-full sm:w-auto min-w-[200px] h-14"
                >
                  <Heart className="mr-3 h-5 w-5" />
                  Nossa História
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-amazonia" />
                <span className="text-sm font-medium">Selo de Autenticidade</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-amazonia" />
                <span className="text-sm font-medium">Economia Local</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Categorias Regionais
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-terra mb-6">
              Tesouros da Amazônia
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore as riquezas autênticas de Belém e da região amazônica
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {[
              { name: "Açaí e Polpas", icon: Fish, count: "150+ produtos" },
              { name: "Artesanato", icon: Palette, count: "300+ peças" },
              { name: "Cosméticos", icon: Sparkles, count: "80+ produtos" },
              { name: "Peixes e Frutos do Mar", icon: Fish, count: "45+ produtos" }
            ].map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index}
                  className="group cursor-pointer hover:shadow-amazonia transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50"
                >
                  <CardContent className="p-4 lg:p-6 text-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 lg:h-8 lg:w-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="font-semibold text-sm lg:text-base text-foreground mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.count}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-accent/10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Leaf,
                title: "Selo de Autenticidade",
                description: "Produtos certificados com origem garantida"
              },
              {
                icon: Users,
                title: "Economia Local",
                description: "Apoie diretamente produtores e artesãos paraenses"
              },
              {
                icon: ShoppingBag,
                title: "Entrega Segura",
                description: "Receba produtos frescos e bem embalados em casa"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="text-center group hover:shadow-amazonia transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50"
                >
                  <CardContent className="p-6 lg:p-8">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 lg:h-10 lg:w-10 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-semibold text-terra mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              Produtos Destacados
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-terra mb-6">
              Os Mais Procurados
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Produtos mais vendidos e bem avaliados da nossa vitrine amazônica
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                id: 1,
                name: "Açaí Premium Orgânico",
                price: 35.90,
                image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000",
                producer: "Cooperativa do Açaí",
                category: "Alimentos",
                rating: 4.8
              },
              {
                id: 2,
                name: "Artesanato Marajoara",
                price: 120.00,
                image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1000",
                producer: "Artesãs da Amazônia",
                category: "Artesanato",
                rating: 4.9
              },
              {
                id: 3,
                name: "Óleo de Andiroba Natural",
                price: 45.00,
                image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1000",
                producer: "Bioamazônia",
                category: "Cosméticos",
                rating: 4.7
              }
            ].map((product) => (
              <Link key={product.id} to={`/produto/${product.id}`}>
                <Card className="group overflow-hidden hover:shadow-amazonia transition-all duration-300 hover:-translate-y-1 bg-card/90 backdrop-blur-sm border-border/50">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground shadow-lg">
                      <Shield className="h-3 w-3 mr-1" />
                      Certificado
                    </Badge>
                    <div className="absolute top-3 right-3 flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star className="h-3 w-3 text-amazonia fill-current mr-1" />
                      <span className="text-xs font-medium text-foreground">{product.rating}</span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2 flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {product.producer}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-primary">
                        R$ {product.price.toFixed(2)}
                      </p>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/produtos">
              <Button size="lg" variant="outline" className="shadow-sm hover:shadow-amazonia transition-smooth">
                <Sparkles className="mr-2 h-5 w-5" />
                Ver Todos os Produtos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 lg:px-6">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-terra">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-terra mb-6">
                Faça Parte da Nossa História
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Junte-se a milhares de pessoas que valorizam a autenticidade amazônica
                e apoiam a economia local de Belém do Pará.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/produtos">
                  <Button size="lg" className="w-full sm:w-auto">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Começar a Comprar
                  </Button>
                </Link>
                <Link to="/produtores">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    <Users className="mr-2 h-5 w-5" />
                    Conhecer Produtores
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;