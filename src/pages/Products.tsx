import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Star, Filter, Search } from "lucide-react";
import { Link } from "react-router-dom";

const mockProducts = [
  {
    id: "1",
    name: "Açaí Premium Orgânico",
    price: 35.90,
    retailPrice: 28.90,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    producer: "Cooperativa do Açaí",
    category: "Gastronomia",
    rating: 4.8,
    reviews: 152
  },
  {
    id: "2",
    name: "Artesanato Indígena Tradicional",
    price: 120.00,
    retailPrice: 95.00,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    producer: "Aldeia Kayapó",
    category: "Artesanato",
    rating: 4.9,
    reviews: 89
  },
  {
    id: "3",
    name: "Óleo de Andiroba Puro",
    price: 45.00,
    retailPrice: 38.00,
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    producer: "Bioamazônia",
    category: "Cosméticos",
    rating: 4.7,
    reviews: 76
  },
  {
    id: "4",
    name: "Mel de Abelha Nativa",
    price: 65.00,
    retailPrice: 52.00,
    image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
    producer: "Apiário São João",
    category: "Gastronomia",
    rating: 4.6,
    reviews: 134
  },
  {
    id: "5",
    name: "Cerâmica Marajoara",
    price: 180.00,
    retailPrice: 145.00,
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
    producer: "Ateliê Marajó",
    category: "Artesanato",
    rating: 4.8,
    reviews: 67
  },
  {
    id: "6",
    name: "Sabonete de Cupuaçu",
    price: 25.00,
    retailPrice: 20.00,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    producer: "Natura Amazônica",
    category: "Cosméticos",
    rating: 4.5,
    reviews: 203
  }
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [userType] = useState<'consumer' | 'retailer'>('consumer'); // Mock user type

  const categories = ["Gastronomia", "Artesanato", "Cosméticos"];

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.producer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange !== "all") {
      const price = userType === 'retailer' ? product.retailPrice : product.price;
      switch(priceRange) {
        case "0-50":
          matchesPrice = price <= 50;
          break;
        case "50-100":
          matchesPrice = price > 50 && price <= 100;
          break;
        case "100+":
          matchesPrice = price > 100;
          break;
      }
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case "price-low":
        return (userType === 'retailer' ? a.retailPrice : a.price) - (userType === 'retailer' ? b.retailPrice : b.price);
      case "price-high":
        return (userType === 'retailer' ? b.retailPrice : b.price) - (userType === 'retailer' ? a.retailPrice : a.price);
      case "rating":
        return b.rating - a.rating;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Produtos da Amazônia</h1>
        {userType === 'retailer' && (
          <Badge className="mb-4 bg-blue-600">
            Preços especiais para lojistas
          </Badge>
        )}
      </div>

      {/* Filters */}
      <div className="bg-muted/50 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-5 w-5" />
          <h2 className="text-lg font-semibold">Filtros</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as categorias</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Price Filter */}
          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger>
              <SelectValue placeholder="Faixa de preço" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os preços</SelectItem>
              <SelectItem value="0-50">Até R$ 50</SelectItem>
              <SelectItem value="50-100">R$ 50 - R$ 100</SelectItem>
              <SelectItem value="100+">Acima de R$ 100</SelectItem>
            </SelectContent>
          </Select>

          {/* Sort */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Destaque</SelectItem>
              <SelectItem value="price-low">Menor preço</SelectItem>
              <SelectItem value="price-high">Maior preço</SelectItem>
              <SelectItem value="rating">Melhor avaliação</SelectItem>
              <SelectItem value="name">Nome A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-muted-foreground">
          {sortedProducts.length} produtos encontrados
        </p>
        <Button 
          variant="outline" 
          onClick={() => {
            setSearchTerm("");
            setSelectedCategory("all");
            setPriceRange("all");
            setSortBy("featured");
          }}
        >
          Limpar filtros
        </Button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <Link key={product.id} to={`/produto/${product.id}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
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
                {userType === 'retailer' && (
                  <Badge className="absolute top-2 right-2 bg-blue-600">
                    Atacado
                  </Badge>
                )}
              </div>
              <CardContent className="p-4 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-sm leading-tight">{product.name}</h3>
                  <div className="flex items-center ml-2">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-xs ml-1">{product.rating}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{product.producer}</p>
                <Badge variant="secondary" className="mb-3 text-xs w-fit">{product.category}</Badge>
                <div className="mt-auto">
                  {userType === 'retailer' && (
                    <p className="text-sm text-muted-foreground line-through">
                      R$ {product.price.toFixed(2)}
                    </p>
                  )}
                  <p className="text-lg font-bold text-green-600">
                    R$ {(userType === 'retailer' ? product.retailPrice : product.price).toFixed(2)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {product.reviews} avaliações
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground mb-4">
            Nenhum produto encontrado com os filtros selecionados.
          </p>
          <Button 
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
              setPriceRange("all");
            }}
          >
            Limpar filtros
          </Button>
        </div>
      )}
    </div>
  );
};

export default Products;