import { HTMLAttributes, ReactNode } from "react";

export interface CryptoLogo {
  label: string;
  id: number;
  icon: ReactNode;  
}

export interface CryptoLogoProps extends HTMLAttributes<HTMLUListElement> {
  logos: CryptoLogo[];
}
