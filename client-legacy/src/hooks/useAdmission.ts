import { useContext } from 'react';
import { AdmissionContext, type AdmissionContextType } from '../context/AdmissionContext';

export const useAdmission = (): AdmissionContextType => {
  const context = useContext(AdmissionContext);
  if (!context) throw new Error('useAdmission must be used within AdmissionProvider');
  return context;
};
