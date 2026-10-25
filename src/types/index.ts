export interface Product {
  id: string;
  name: string;
  category: 'sun-control' | 'car-tinting' | 'frosted' | 'privacy' | 'decorative' | 'reflective' | 'safety';
  categoryLabel: string;
  tagline: string;
  description: string;
  vlt: string; // Visible Light Transmission
  heatRejection: string;
  uvProtection: string;
  glareReduction: string;
  thickness: string;
  warranty: string;
  idealFor: string[];
  features: string[];
  image: string;
  popular?: boolean;
}

export interface CartItem {
  product: Product;
  sqFt: number;
  notes?: string;
  vehicleType?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'commercial' | 'automotive' | 'residential' | 'frosted';
  categoryLabel: string;
  location: string;
  image: string;
  description: string;
  filmUsed: string;
}

export interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  thumbnail: string;
  youtubeId?: string;
  embedUrl: string;
  keyTakeaway: string;
}
