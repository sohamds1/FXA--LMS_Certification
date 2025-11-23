import React from 'react';

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  location: string;
}

export enum SectionType {
  HERO = 'HERO',
  FEATURES = 'FEATURES',
  PROCESS = 'PROCESS',
  TESTIMONIALS = 'TESTIMONIALS',
  CTA = 'CTA'
}