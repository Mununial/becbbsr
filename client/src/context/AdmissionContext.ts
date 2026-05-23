import { createContext } from 'react';

export interface AdmissionContextType {
  isOpen: boolean;
  open: (course?: string) => void;
  close: () => void;
}

export const AdmissionContext = createContext<AdmissionContextType | null>(null);
