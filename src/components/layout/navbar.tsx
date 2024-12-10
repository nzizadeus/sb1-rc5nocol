import { Button } from '@/components/ui/button';
import { Menu, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MobileMenu } from './mobile-menu';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Search className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold">ProHaus</span>
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <Link to="/services">
                  <Button variant="outline">Find Services</Button>
                </Link>
                <Link to="/become-pro">
                  <Button variant="outline">Become a Pro</Button>
                </Link>
                <Link to="/signin">
                  <Button>
                    <User className="mr-2 h-4 w-4" />
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>

            <div className="md:hidden">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}