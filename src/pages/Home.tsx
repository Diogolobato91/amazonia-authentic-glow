import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Shield, Star, Users } from "lucide-react";
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
  { name: "Gastronomia", icon: "🍎", count: 150 },
  { name: "Artesanato", icon: "🎨", count: 89 },
  { name: "Cosméticos", icon: "🌿", count: 67 },
  { name: "Têxtil", icon: "👕", count: 45 }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-green-600 to-green-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843')"
          }}
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Vitrine da Amazônia
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Conectando a riqueza da Amazônia diretamente ao seu lar. 
              Produtos autênticos, histórias reais, economia sustentável.
            </p>
            <div className="flex gap-4">
              <Link to="/produtos">
                <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
                  Explorar Produtos
                </Button>
              </Link>
              <Link to="/sobre">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
                  Nossa Missão
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossa Missão</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Valorizamos a autenticidade, sustentabilidade e cultura local, 
              conectando produtores amazônicos a consumidores que valorizam qualidade e origem.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Autenticidade Garantida</h3>
                <p className="text-muted-foreground">
                  Selo digital único para cada produtor, garantindo origem e qualidade.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Sustentabilidade</h3>
                <p className="text-muted-foreground">
                  Produtos que respeitam a natureza e as comunidades locais.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Economia Local</h3>
                <p className="text-muted-foreground">
                  Fortalecendo a economia regional e valorizando o trabalho local.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Categorias</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.name} to={`/produtos?categoria=${category.name.toLowerCase()}`}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="font-semibold mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count} produtos</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Produtos em Destaque</h2>
            <Link to="/produtos">
              <Button variant="outline">Ver Todos</Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/produto/${product.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-2 left-2 bg-green-600">
                      <Shield className="h-3 w-3 mr-1" />
                      Certificado
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{product.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm ml-1">4.8</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{product.producer}</p>
                    <Badge variant="secondary" className="mb-3">{product.category}</Badge>
                    <p className="text-xl font-bold text-green-600">
                      R$ {product.price.toFixed(2)}
                    </p>
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