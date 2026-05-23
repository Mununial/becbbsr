export type Slide = {
  id: string;
  type: 'image' | 'video';
  url: string;                                          
  title: string;        
  subtitle: string;
  description: string;
  ctaText: string;
}

export type GalleryImage = {
  id: string;
  url: string;
  title: string;
  category: string;
}

export type Notice = {
   id: string;
   title: string;
   date: string;
   category: 'Admission' | 'Academic' | 'Placement' | 'Events' | 'Notice';
   url: string;
   type: 'image' | 'pdf';
   isNew: boolean;
   image?: string;
}

export type Hotspot = {
   x: number;
   y: number;
   type: 'scene' | 'info';
   text: string;
   targetId?: string;
}

export type Scene = {
   id: string;
   name: string;
   image: string;
   initialX?: number;
   hotspots?: Hotspot[];
}

export type SelectedStudent = {
  id: string;
  companyRole: string;
  name: string;
  branch: string;
  degree: string;
  batch: string;
  packageInfo: string;
  companyLogo: string;
  photo: string;
  bgColor: string;
}

export type Leader = {
  id: string;
  role: string;
  title: string;
  name: string;
  subtitle: string;
  quote: string;
  image: string;
  link: string;
  color: string;
}

export type Highlight = {
  id: string;
  title: string;
  date: string;
  image: string;
  link?: string;
}

export type Faculty = {
  id: string;
  name: string;
  role: string;
  email: string;
  department: string;
  image?: string;
}
