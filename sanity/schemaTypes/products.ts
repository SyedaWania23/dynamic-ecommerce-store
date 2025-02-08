export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'id',  // Custom id field
      type: 'string',
      title: 'Product ID',
      description: 'Unique product identifier (optional, but useful for references)',
    },
   
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name:"slug",
      type:"slug",
      title:"Slug",
      options:{
        source:"name"
      }
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true, // Enable image cropping
      },
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'discountPercentage',
      type: 'number',
      title: 'Discount Percentage',
    },
    {
      name: 'isFeaturedProduct',
      type: 'boolean',
      title: 'Featured Product',
    },
    {
      name: 'stockLevel',
      type: 'number',
      title: 'Stock Level',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
    },
    {
      name: 'imagePath',  // Adding the missing field
      type: 'url',  // Assuming this field will store the URL of an image
      title: 'Image Path',
    },
    {
      name: 'topPick',
      title: 'Top Pick',
      type: 'boolean',
      description: 'Mark this product as a top pick',
      initialValue: false, // By default, topPick is false
    },
  ],
};
