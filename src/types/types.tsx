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

  export interface CartProductType extends ProductType {
    quantity: number;
  }
  
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

  export interface AddressType {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
    pais: string | null;
  }

  export interface UserInfos extends AddressType {
    firstName: string;
    lastName: string;
    company: string | null;
    email: string;
  }


  