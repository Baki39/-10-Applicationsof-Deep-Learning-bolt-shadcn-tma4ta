import { LucideIcon } from 'lucide-react';

export interface Application {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  applications?: string[];
  futurePotential?: string;
}