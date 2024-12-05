export interface ProductType {
    id: number;
    name: string;
    description: string;
    price: number;
    discountPercentage: number;
    discountedPrice: number;
    isNew: boolean;
    Category: string;
    image: string;
    tags: string[];
  };
  
  export interface BtnBackProps {
    goToPreviousPage: () => void;
    page: number; 
  }

  export interface FilterProps {
    setOption: React.Dispatch<React.SetStateAction<string>>;
    allProducts: ProductType[];
    setAllProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
    itemsPerPage: number;
  }
  