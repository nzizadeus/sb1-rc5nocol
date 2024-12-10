import { Wrench, Zap, Brush, GraduationCap, Car, Home, Scissors, Camera } from 'lucide-react';
import type { ServiceCategory } from '@/types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'plumbing',
    name: 'Plumbing',
    icon: Wrench,
    description: 'Professional plumbing services for your home and business',
  },
  {
    id: 'electrical',
    name: 'Electrical',
    icon: Zap,
    description: 'Licensed electricians for all electrical needs',
  },
  {
    id: 'cleaning',
    name: 'Cleaning',
    icon: Brush,
    description: 'Top-quality cleaning services for any space',
  },
  {
    id: 'tutoring',
    name: 'Tutoring',
    icon: GraduationCap,
    description: 'Expert tutors in various subjects',
  },
  {
    id: 'automotive',
    name: 'Automotive',
    icon: Car,
    description: 'Professional automotive repair and maintenance',
  },
  {
    id: 'home-improvement',
    name: 'Home Improvement',
    icon: Home,
    description: 'Quality home renovation and repair services',
  },
  {
    id: 'beauty',
    name: 'Beauty & Wellness',
    icon: Scissors,
    description: 'Professional beauty and wellness services',
  },
  {
    id: 'photography',
    name: 'Photography',
    icon: Camera,
    description: 'Professional photography services',
  },
];