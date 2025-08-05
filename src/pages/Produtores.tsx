import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Users, Search, Star, Heart, MessageCircle, Leaf, Fish, Palette, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Mock data for producers
const mockProducers = [
  {
    id: 1,
    name: "Cooperativa do Açaí Ribeirinho",
    location: "Várzea, Belém - PA",
    specialties: ["Açaí", "Frutas amazônicas"],
    image: "/lovable-uploads/acai-producer.jpg",
    rating: 4.8,
    reviews: 156,
    description: "Produtores tradicionais de açaí das ilhas de Belém, mantendo técnicas ancestrais de extração.",
    products: 15,
    category: "alimentos",
    established: "1985"
  },
  {
    id: 2,
    name: "Artesãs da Amazônia",
    location: "Cidade Velha, Belém - PA",
    specialties: ["Cerâmica marajoara", "Artesanato"],
    image: "/lovable-uploads/artisan-producer.jpg",
    rating: 4.9,
    reviews: 89,
    description: "Grupo de artesãs especializadas em cerâmica marajoara e peças decorativas tradicionais.",
    products: 32,
    category: "artesanato",
    established: "1992"
  },
  {
    id: 3,
    name: "Pescadores do Ver-o-Peso",
    location: "Mercado Ver-o-Peso, Belém - PA",
    specialties: ["Peixes amazônicos", "Camarão"],
    image: "/lovable-uploads/fisherman-producer.jpg",
    rating: 4.7,
    reviews: 203,
    description: "Pescadores tradicionais que fornecem peixes frescos direto das águas amazônicas.",
    products: 8,
    category: "alimentos",
    established: "1960"
  },
  {
    id: 4,
    name: "Cosméticos Naturais da Floresta",
    location: "Marco, Belém - PA",
    specialties: ["Cosméticos naturais", "Óleos essenciais"],
    image: "/lovable-uploads/cosmetics-producer.jpg",
    rating: 4.6,
    reviews: 124,
    description: "Produção de cosméticos naturais usando ingredientes amazônicos como andiroba e copaíba.",
    products: 28,
    category: "cosmeticos",
    established: "2005"
  },
  {
    id: 5,
    name: "Família Ribeiro - Farinha Artesanal",
    location: "Outeiro, Belém - PA",
    specialties: ["Farinha de mandioca", "Tapioca"],
    image: "/lovable-uploads/flour-producer.jpg",
    rating: 4.8,
    reviews: 78,
    description: "Produção familiar de farinha de mandioca tradicional em forno de barro há 3 gerações.",
    products: 6,
    category: "alimentos",
    established: "1950"
  },
  {
    id: 6,
    name: "Joias da Amazônia",
    location: "Nazaré, Belém - PA",
    specialties: ["Joias com sementes", "Biojoias"],
    image: "/lovable-uploads/jewelry-producer.jpg",
    rating: 4.9,
    reviews: 92,
    description: "Criação de joias únicas usando sementes amazônicas, madeiras nobres e pedras regionais.",
    products: 45,
    category: "artesanato",
    established: "1998"
  }
];

const Produtores = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedLocation, setSelectedLocation] = useState("todos");

  const categories = [
    { value: "todos", label: "Todas as categorias", icon: Users },
    { value: "alimentos", label: "Alimentos regionais", icon: Leaf },
    { value: "artesanato", label: "Artesanato", icon: Palette },
    { value: "cosmeticos", label: "Cosméticos naturais", icon: Sparkles }
  ];

  const locations = [
    { value: "todos", label: "Todas as regiões" },
    { value: "centro", label: "Centro histórico" },
    { value: "varzea", label: "Várzea" },
    { value: "outeiro", label: "Outeiro" },
    { value: "marco", label: "Marco" },
    { value: "nazare", label: "Nazaré" }
  ];

  const filteredProducers = mockProducers.filter(producer => {
    const matchesSearch = producer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         producer.specialties.some(specialty => 
                           specialty.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesCategory = selectedCategory === "todos" || producer.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-amazonia">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-terra mb-4">
            Produtores Locais
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça os artesãos, agricultores e produtores que mantêm viva a tradição amazônica.
            Cada produto tem uma história, cada produtor tem uma missão.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-terra border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar produtores..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background/50 border-border/60 focus:bg-background transition-all"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-background/50 border-border/60">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <SelectItem key={category.value} value={category.value}>
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4" />
                        {category.label}
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>

            {/* Location Filter */}
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="bg-background/50 border-border/60">
                <SelectValue placeholder="Região" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location.value} value={location.value}>
                    {location.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Encontrados <span className="font-semibold text-primary">{filteredProducers.length}</span> produtores
          </p>
        </div>

        {/* Producers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducers.map((producer) => (
            <Link key={producer.id} to={`/produtor/${producer.id}`}>
              <Card className="overflow-hidden group hover:shadow-amazonia transition-all duration-300 hover:-translate-y-1 bg-card/90 backdrop-blur-sm border-border/50">
                <div className="relative overflow-hidden">
                  <img
                    src={producer.image}
                    alt={producer.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground shadow-lg">
                      Desde {producer.established}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {producer.name}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <MapPin className="h-3 w-3" />
                        {producer.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {producer.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {producer.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="font-medium">{producer.rating}</span>
                        <span>({producer.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Leaf className="h-4 w-4" />
                        <span>{producer.products} produtos</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Conhecer Produtor
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredProducers.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nenhum produtor encontrado</h3>
            <p className="text-muted-foreground mb-4">
              Tente ajustar os filtros ou termos de busca
            </p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("todos");
                setSelectedLocation("todos");
              }}
              variant="outline"
            >
              Limpar filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Produtores;