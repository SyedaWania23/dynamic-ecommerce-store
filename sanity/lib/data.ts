

// Type definition for a single product
interface Product {
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    discountPercentage: number;
    isFeaturedProduct: boolean;
    stockLevel: number;
    category: string;
    imagePath: string;
    slug:{
      _type:"Slug";
      current:string;
    };
  }



  