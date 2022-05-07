import { ReactNode } from 'react';

export interface VariantsProps {
  action?: boolean;
  currency?: ReactNode;
  oldPrice?: string;
  payment?: string;
  buttonType?: string;
  oldPayment?: string;
}
