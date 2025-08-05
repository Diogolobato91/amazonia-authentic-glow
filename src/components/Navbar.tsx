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
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-green-800">
              Vitrine da Amazônia
            </span>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar produtos, produtores..." 
                className="pl-10"
              />
            </div>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/produtos" 
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Produtos
            </Link>
            <Link 
              to="/produtores" 
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Produtores
            </Link>
            <Link 
              to="/sobre" 
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Sobre
            </Link>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* User Type Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden md:flex">
                  <User className="h-4 w-4 mr-2" />
                  {getUserTypeLabel()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setUserType('consumer')}>
                  Consumidor Final
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setUserType('retailer')}>
                  Lojista/Revendedor
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setUserType('producer')}>
                  Produtor
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Cart */}
            <Link to="/carrinho">
              <Button variant="outline" size="sm" className="relative">
                <ShoppingCart className="h-4 w-4" />
                {cartItems > 0 && (
                  <Badge 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
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
                <Button variant="outline" size="sm" className="md:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuItem asChild>
                  <Link to="/produtos">Produtos</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/produtores">Produtores</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/sobre">Sobre</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <User className="h-4 w-4 mr-2" />
                  {getUserTypeLabel()}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Buscar produtos..." 
              className="pl-10"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;