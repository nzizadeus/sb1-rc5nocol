import { Clock, Shield, Star, Wallet } from 'lucide-react';

const features = [
  {
    name: 'Verified Professionals',
    description: 'All service providers are thoroughly vetted and verified for your safety and peace of mind.',
    icon: Shield,
  },
  {
    name: 'Quick Booking',
    description: 'Book services instantly with our easy-to-use platform, available 24/7.',
    icon: Clock,
  },
  {
    name: 'Secure Payments',
    description: 'Multiple payment options including mobile money and secure card payments.',
    icon: Wallet,
  },
  {
    name: 'Quality Guaranteed',
    description: 'Rate and review services. We ensure high standards and customer satisfaction.',
    icon: Star,
  },
];

export function FeaturesSection() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose ProHaus
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            We connect you with the best service providers in Rwanda
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-white px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-blue-600 p-3 shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}