export interface ProductType {
    id: number;
    name: string;
    description: string;
    price: string; // Mantido como string devido ao formato "Rp 150.000"
    discountPercentage: number; // Mantido como string devido ao formato textual
    discountedPrice: string; // Caso vazio, mantém como string
    isNew: boolean; // Mantido como string, mas idealmente seria boolean (true/false)
    Category: string;
    image: string;
    tags: string[]; // Array de strings
  };
  
  export interface BtnBackProps {
    goToPreviousPage: () => void; // Função sem retorno
    page: number; // Número da página atual
  }