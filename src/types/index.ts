export interface Feature {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

export interface SearchFilters {
  category?: string;
  location?: string;
  priceRange?: [number, number];
}