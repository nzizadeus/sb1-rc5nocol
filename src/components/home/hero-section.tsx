import { SearchBar } from './search-bar';
import { ServiceCategories } from './service-categories';

export function HeroSection() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-16 text-center lg:py-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Find Trusted Professionals</span>
            <span className="block text-blue-600">in Rwanda</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl">
            Connect with verified service providers for all your home and professional needs.
            Quality service, guaranteed satisfaction.
          </p>
          
          <div className="mt-8 w-full">
            <SearchBar />
          </div>

          <ServiceCategories />
        </div>
      </div>
    </div>
  );
}