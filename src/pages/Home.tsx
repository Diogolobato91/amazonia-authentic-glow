import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  Shield, 
  Star, 
  Users, 
  Utensils, 
  Palette, 
  Sparkles, 
  Shirt,
  TreePine,
  Heart,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";

const featuredProducts = [
  {
    id: "1",
    name: "Açaí Premium Orgânico",
    price: 35.90,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    producer: "Cooperativa do Açaí",
    category: "Gastronomia"
  },
  {
    id: "2",
    name: "Artesanato Indígena",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    producer: "Aldeia Kayapó",
    category: "Artesanato"
  },
  {
    id: "3",
    name: "Óleo de Andiroba",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    producer: "Bioamazônia",
    category: "Cosméticos"
  }
];

const categories = [
  { 
    name: "Gastronomia", 
    icon: Utensils, 
    count: 150, 
    description: "Açaí, cupuaçu, tucumã e mel",
    color: "text-emerald-600"
  },
  { 
    name: "Artesanato", 
    icon: Palette, 
    count: 89, 
    description: "Cerâmica, palha e madeira",
    color: "text-amber-600"
  },
  { 
    name: "Cosméticos", 
    icon: Sparkles, 
    count: 67, 
    description: "Óleos e sabonetes naturais",
    color: "text-green-600"
  },
  { 
    name: "Têxtil", 
    icon: Shirt, 
    count: 45, 
    description: "Tecidos e fibras regionais",
    color: "text-blue-600"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-forest-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e')"
          }}
        />
        {/* Elementos decorativos flutuantes */}
        <div className="absolute top-20 left-10 opacity-20 animate-pulse">
          <TreePine className="h-24 w-24 text-white" />
        </div>
        <div className="absolute bottom-32 right-16 opacity-15 animate-pulse delay-1000">
          <Leaf className="h-32 w-32 text-white" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-6 h-full min-h-screen flex items-center">
          <div className="max-w-3xl text-white">
            <div className="flex items-center mb-6 space-x-2">
              <MapPin className="h-6 w-6 text-yellow-300" />
              <span className="text-yellow-300 font-medium text-lg">Belém • Pará • Brasil</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Vitrine da <span className="text-yellow-300">Amazônia</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white/90 max-w-2xl">
              Conectando a riqueza cultural e natural de Belém diretamente ao mundo. 
              Produtos autênticos com selo de origem, histórias verdadeiras, economia que preserva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/produtos">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-terra transition-smooth hover:scale-105 w-full sm:w-auto">
                  <Leaf className="mr-2 h-5 w-5" />
                  Explorar Produtos
                </Button>
              </Link>
              <Link to="/sobre">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/80 text-white hover:bg-white/10 backdrop-blur-sm shadow-amazonia transition-smooth hover:scale-105 w-full sm:w-auto"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Nossa História
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-yellow-300" />
                <span className="text-sm font-medium">Selo de Autenticidade</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-yellow-300" />
                <span className="text-sm font-medium">Economia Local</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32 bg-accent/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">Nossa Missão Amazônica</h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Valorizamos a autenticidade da cultura paraense, a sustentabilidade da floresta e o desenvolvimento das comunidades locais, 
              conectando produtores de Belém e região a consumidores que valorizam qualidade, origem e responsabilidade social.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <Card className="text-center p-8 shadow-amazonia hover:shadow-terra transition-all duration-500 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="mb-6 relative">
                  <Shield className="h-16 w-16 text-primary mx-auto" />
                  <div className="absolute inset-0 animate-ping opacity-20">
                    <Shield className="h-16 w-16 text-primary mx-auto" />
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-foreground">Autenticidade Certificada</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Selo digital único e inalterável para cada produtor belenense, 
                  garantindo origem autêntica e qualidade tradicional da Amazônia.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 shadow-amazonia hover:shadow-terra transition-all duration-500 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="mb-6 relative">
                  <TreePine className="h-16 w-16 text-primary mx-auto" />
                  <div className="absolute inset-0 animate-pulse opacity-30">
                    <TreePine className="h-16 w-16 text-primary mx-auto" />
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-foreground">Preservação Florestal</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Produtos que respeitam os ciclos naturais da floresta amazônica 
                  e promovem práticas sustentáveis das comunidades tradicionais.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 shadow-amazonia hover:shadow-terra transition-all duration-500 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="mb-6 relative">
                  <Users className="h-16 w-16 text-primary mx-auto" />
                  <div className="absolute inset-0 animate-bounce opacity-20">
                    <Users className="h-16 w-16 text-primary mx-auto" />
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-foreground">Desenvolvimento Local</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fortalecendo a economia de Belém e região, valorizando o conhecimento 
                  ancestral e gerando renda digna para as famílias produtoras.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-accent/10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">Tesouros da Região</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore as riquezas autênticas de Belém e da Amazônia paraense
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link key={category.name} to={`/produtos?categoria=${category.name.toLowerCase()}`}>
                  <Card className="group text-center p-6 lg:p-8 hover:shadow-terra transition-all duration-300 cursor-pointer border-0 bg-card/60 backdrop-blur-sm hover:-translate-y-2 hover:bg-card/80">
                    <CardContent className="pt-6">
                      <div className={`mb-4 ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-12 w-12 lg:h-16 lg:w-16 mx-auto" />
                      </div>
                      <h3 className="font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-xs lg:text-sm text-muted-foreground mb-2 leading-relaxed">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
                        <span className="font-medium">{category.count}</span>
                        <span>produtos</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 lg:py-32 bg-accent/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-4">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Produtos em Destaque</h2>
              <p className="text-lg text-muted-foreground">Os mais vendidos e bem avaliados da nossa vitrine</p>
            </div>
            <Link to="/produtos">
              <Button variant="outline" size="lg" className="shadow-sm hover:shadow-amazonia transition-smooth">
                <Sparkles className="mr-2 h-4 w-4" />
                Ver Todos os Produtos
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/produto/${product.id}`}>
                <Card className="group overflow-hidden hover:shadow-terra transition-all duration-500 cursor-pointer border-0 bg-card/80 backdrop-blur-sm hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm border-0 shadow-lg">
                      <Shield className="h-3 w-3 mr-1" />
                      Certificado Amazônia
                    </Badge>
                    <div className="absolute top-3 right-3 flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
                      <span className="text-xs font-medium">4.8</span>
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
                      <Badge variant="secondary" className="text-xs bg-accent/60">
                        {product.category}
                      </Badge>
                    </div>
                    <div className="flex items-end justify-between">
                      <p className="text-2xl font-bold text-primary">
                        R$ {product.price.toFixed(2)}
                      </p>
                      <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        Ver Produto
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;