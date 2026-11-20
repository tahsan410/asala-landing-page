// ============================================================================
//  ASALA — PRODUCTS
//
//  The six products below are SAMPLE / DEMONSTRATION content (sample: true).
//  They do not describe real ASALA product specifications. Replace the text,
//  then change  sample: true  to  sample: false  (or delete the line) so the
//  small "Sample" tag disappears.
//
//  HOW TO ADD A PRODUCT: copy one whole block { ... }, paste it at the end of
//  the list (add a comma between blocks), give it a new unique id, and edit.
//
//  FIELDS
//   id                unique number
//   name              product name
//   category          used for the filter buttons (new categories appear automatically)
//   image             path to a picture inside the "public" folder
//                     e.g. "/images/products/black-tea.jpg"
//                     If the file does not exist yet, an elegant placeholder is shown.
//   shortDescription  one line shown on the card
//   price             optional, e.g. "৳170"   (leave "" to hide)
//   weight            optional, e.g. "250g"    (leave "" to hide)
//   description       longer text shown in the details window
//   details           every line is optional — leave "" to hide it
//   sample            true = shows a "Sample" tag (see above)
// ============================================================================

const products = [
  {
    id: 1,
    name: 'Premium Black Tea',
    category: 'Tea',
    image: '/images/products/black-tea.jpg',
    shortDescription: 'A carefully selected black tea collection.',
    price: '৳170',
    weight: '250g',
    description:
      'Sample description — replace this with the real product description for ASALA Premium Black Tea.',
    details: {
      ingredients: 'Sample text — add the real ingredients here.',
      origin: 'Sample text — add the actual origin here.',
      taste: 'Sample text — add taste and aroma details here.',
      preparation: 'Sample text — add preparation instructions here.',
      storage: 'Store in a cool and dry place.',
    },
    sample: true,
  },
  {
    id: 2,
    name: 'Green Tea',
    category: 'Tea',
    image: '/images/products/green-tea.jpg',
    shortDescription: 'A light green tea selection.',
    price: '',
    weight: '100g',
    description:
      'Sample description — replace this with the real product description for ASALA Green Tea.',
    details: {
      ingredients: 'Sample text — add the real ingredients here.',
      origin: '',
      taste: '',
      preparation: 'Sample text — add preparation instructions here.',
      storage: 'Store in a cool and dry place.',
    },
    sample: true,
  },
  {
    id: 3,
    name: 'Natural Honey',
    category: 'Honey',
    image: '/images/products/honey.jpg',
    shortDescription: 'A honey selection for everyday enjoyment.',
    price: '',
    weight: '',
    description:
      'Sample description — replace this with the real product description for ASALA Natural Honey.',
    details: {
      ingredients: '',
      origin: 'Sample text — add the actual origin here.',
      taste: 'Sample text — add taste and aroma details here.',
      preparation: '',
      storage: 'Store in a cool and dry place.',
    },
    sample: true,
  },
  {
    id: 4,
    name: 'Pure Ghee',
    category: 'Ghee',
    image: '/images/products/ghee.jpg',
    shortDescription: 'A traditional ghee selection.',
    price: '',
    weight: '',
    description:
      'Sample description — replace this with the real product description for ASALA Pure Ghee.',
    details: {
      ingredients: 'Sample text — add the real ingredients here.',
      origin: '',
      taste: '',
      preparation: '',
      storage: 'Store in a cool and dry place.',
    },
    sample: true,
  },
  {
    id: 5,
    name: 'Premium Spices',
    category: 'Spices',
    image: '/images/products/spices.jpg',
    shortDescription: 'A curated range of everyday spices.',
    price: '',
    weight: '',
    description:
      'Sample description — replace this with the real product description for ASALA Premium Spices.',
    details: {
      ingredients: 'Sample text — add the real ingredients here.',
      origin: '',
      taste: 'Sample text — add taste and aroma details here.',
      preparation: '',
      storage: 'Store in a cool and dry place.',
    },
    sample: true,
  },
  {
    id: 6,
    name: 'Nuts & Dry Fruits',
    category: 'Nuts & Dry Fruits',
    image: '/images/products/nuts-dry-fruits.jpg',
    shortDescription: 'A mixed selection of nuts and dry fruits.',
    price: '',
    weight: '',
    description:
      'Sample description — replace this with the real product description for ASALA Nuts & Dry Fruits.',
    details: {
      ingredients: 'Sample text — add the real ingredients here.',
      origin: '',
      taste: '',
      preparation: '',
      storage: 'Store in a cool and dry place.',
    },
    sample: true,
  },
];

export default products;
