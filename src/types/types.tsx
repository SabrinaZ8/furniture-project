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
    totalItems: number;
    page: number;
    setItemsPerPage: React.Dispatch<React.SetStateAction<number>>
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
    infoAdd: string
  }

export interface DetailsProductProps {
  product: ProductType; 
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  handleAddToCart: () => void;
}

export interface InputsAddressProps {
  errors: { [key in keyof UserInfos]?: string };
  handleInputChange: <K extends keyof UserInfos>(field: K, value: UserInfos[K]) => void;
  address: UserInfos;
  cepUser: string;
  setCepUser: React.Dispatch<React.SetStateAction<string>>;
  cepSearch: AddressType | null
}

export interface FormContact {
  name: string;
  email: string;
  subject: string;
  message: string;
}
  