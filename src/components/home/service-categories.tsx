import { Button } from '@/components/ui/button';
import { serviceCategories } from '@/config/services';
import { Link } from 'react-router-dom';

export function ServiceCategories() {
  return (
    <div className="mt-12">
      <h2 className="text-center text-2xl font-semibold text-gray-900">Popular Services</h2>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {serviceCategories.map((category) => (
          <Link key={category.id} to={`/services/${category.id}`}>
            <Button
              variant="outline"
              className="h-auto w-full flex-col space-y-2 p-4"
            >
              <category.icon className="h-6 w-6 text-blue-600" />
              <span className="text-sm font-medium">{category.name}</span>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}