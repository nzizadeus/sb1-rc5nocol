import { Button } from '@/components/ui/button';
import { serviceCategories } from '@/config/services';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="flex h-16 items-center justify-between px-4">
        <span className="text-xl font-bold">Menu</span>
        <Button variant="outline" size="sm" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      <nav className="px-4 py-6">
        <div className="space-y-4">
          <Link
            to="/services"
            className="block rounded-lg p-3 text-base font-semibold hover:bg-gray-50"
            onClick={onClose}
          >
            Find Services
          </Link>
          <Link
            to="/become-pro"
            className="block rounded-lg p-3 text-base font-semibold hover:bg-gray-50"
            onClick={onClose}
          >
            Become a Pro
          </Link>
          <Link
            to="/signin"
            className="block rounded-lg p-3 text-base font-semibold hover:bg-gray-50"
            onClick={onClose}
          >
            Sign In
          </Link>
        </div>

        <div className="mt-8">
          <h3 className="px-3 text-sm font-semibold text-gray-500">Categories</h3>
          <div className="mt-4 space-y-2">
            {serviceCategories.map((category) => (
              <Link
                key={category.id}
                to={`/services/${category.id}`}
                className="flex items-center space-x-3 rounded-lg p-3 hover:bg-gray-50"
                onClick={onClose}
              >
                <category.icon className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}