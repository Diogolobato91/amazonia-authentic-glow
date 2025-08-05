import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  User, 
  Search, 
  Leaf,
  Menu
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [cartItems, setCartItems] = useState(3); // Mock cart count
  const [userType, setUserType] = useState<'consumer' | 'producer' | 'retailer'>('consumer');

  const getUserTypeLabel = () => {
    switch(userType) {
      case 'producer': return 'Produtor';
      case 'retailer': return 'Lojista';
      default: return 'Consumidor';
    }
  };

  return (
    <nav className="bg-card/95 backdrop-blur-md border-b border-border/50 shadow-amazonia sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 transition-smooth hover:scale-105">
            <div className="relative">
              <Leaf className="h-8 w-8 lg:h-10 lg:w-10 text-primary" />
              <div className="absolute inset-0 animate-pulse opacity-30">
                <Leaf className="h-8 w-8 lg:h-10 lg:w-10 text-primary" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-bold text-primary leading-tight">
                Vitrine da Amazônia
              </span>
              <span className="text-xs text-muted-foreground font-medium hidden sm:block">
                Belém • Pará
              </span>
            </div>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar açaí, artesanato, cosméticos..." 
                className="pl-12 h-11 rounded-full border-border/60 bg-background/50 backdrop-blur-sm focus:bg-background transition-all duration-300 focus:shadow-amazonia"
              />
            </div>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/produtos" 
              className="text-foreground/80 hover:text-primary transition-smooth font-medium relative group"
            >
              Produtos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/produtores" 
              className="text-foreground/80 hover:text-primary transition-smooth font-medium relative group"
            >
              Produtores
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/sobre" 
              className="text-foreground/80 hover:text-primary transition-smooth font-medium relative group"
            >
              Nossa História
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-3">
            {/* User Type Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden lg:flex shadow-sm hover:shadow-amazonia transition-smooth">
                  <User className="h-4 w-4 mr-2" />
                  {getUserTypeLabel()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-card/95 backdrop-blur-md border-border/60 shadow-terra">
                <DropdownMenuItem 
                  onClick={() => setUserType('consumer')}
                  className="hover:bg-accent/50 transition-smooth"
                >
                  🛍️ Consumidor Final
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setUserType('retailer')}
                  className="hover:bg-accent/50 transition-smooth"
                >
                  🏪 Lojista/Revendedor
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setUserType('producer')}
                  className="hover:bg-accent/50 transition-smooth"
                >
                  🌱 Produtor Local
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Cart */}
            <Link to="/carrinho">
              <Button variant="outline" size="sm" className="relative shadow-sm hover:shadow-amazonia transition-smooth group">
                <ShoppingCart className="h-4 w-4 group-hover:scale-110 transition-transform" />
                {cartItems > 0 && (
                  <Badge 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-destructive animate-pulse"
                    variant="destructive"
                  >
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="lg:hidden shadow-sm hover:shadow-amazonia transition-smooth">
                  <Menu className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-card/95 backdrop-blur-md border-border/60 shadow-terra" align="end">
                <DropdownMenuItem asChild className="hover:bg-accent/50 transition-smooth">
                  <Link to="/produtos" className="flex items-center">
                    🌿 Produtos Regionais
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-accent/50 transition-smooth">
                  <Link to="/produtores" className="flex items-center">
                    👥 Produtores Locais
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-accent/50 transition-smooth">
                  <Link to="/sobre" className="flex items-center">
                    📖 Nossa História
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-accent/50 transition-smooth">
                  <User className="h-4 w-4 mr-3" />
                  {getUserTypeLabel()}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden pb-4 pt-2">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Buscar açaí, artesanato, cosméticos..." 
              className="pl-12 h-11 rounded-full border-border/60 bg-background/80 backdrop-blur-sm focus:bg-background transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;