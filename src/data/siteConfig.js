// ============================================================================
//  ASALA — SITE CONFIGURATION
//  Everything you will ever need to change on the main page lives in this file.
//  Edit the text between the quotation marks " ", save, and the page updates.
// ============================================================================

const siteConfig = {
  // ---- Brand ---------------------------------------------------------------
  brandName: 'ASALA',
  tagline: 'AUTHENTICITY IS OUR ORIGIN',

  // ---- Images (files live in the "public" folder) ---------------------------
  // Replace public/logo.png with the official ASALA logo (same file name),
  // or change the path here if you use a different file name.
  logo: '/logo.png',
  // Big picture at the top of the page. Replace public/images/hero.jpg.
  // Best: a wide (landscape) photo, at least 1600 px wide.
  heroImage: '/images/hero.jpg',
  heroImageAlt:
    'Spices, tea, honey, wheat and natural ingredients arranged on linen, with the ASALA logo',
  // Picture beside the About text. Replace public/images/about.jpg
  // (or set aboutImage: '' to hide it).
  aboutImage: '/images/about.jpg',
  aboutImageAlt: 'Turmeric, wheat, leaves and spices arranged on linen',

  // ---- Welcome section text -------------------------------------------------
  hero: {
    title: 'Welcome to',
    subtitleBn: 'আসলের খোঁজে, ASALA-র সাথে।',
    text: 'Discover our collection, explore our story and stay connected with us.',
  },

  // ---- Official website -----------------------------------------------------
  // The button stays DISABLED ("Coming Soon") until BOTH are true:
  //   1) status is "live"
  //   2) url is a real address starting with https://
  // Later, when the website is ready, change status to "live" and paste the URL.
  officialWebsite: {
    status: 'coming-soon', // "coming-soon"  or  "live"
    url: '', // e.g. 'https://www.asala.com.bd'
  },

  // ---- Facebook -------------------------------------------------------------
  facebook: {
    // Full address of the Facebook page, e.g. 'https://www.facebook.com/asalabd'
    pageUrl: 'https://www.facebook.com/profile.php?id=61596785697913',
    // The page's username (the part after facebook.com/), used for Messenger.
    // e.g. if the page is facebook.com/asalabd  →  'asalabd'
    messengerUsername: 'https://www.facebook.com/profile.php?id=61596785697913',
  },

  // ---- WhatsApp -------------------------------------------------------------
  whatsapp: {
    // Country code + number, digits only, no + sign or spaces.
    // Bangladesh example: 8801XXXXXXXXX
    number: '+8801572915209',
    // Message that is already typed when the customer opens the chat.
    message: 'Hello ASALA! I would like to know more about your products.',
  },

  // ---- Optional contact details (leave "" to hide a line) -------------------
  contact: {
    phone: '01572915209', // e.g. '+8801XXXXXXXXX'
    email: 'asala.bd.official@gmail.com', // e.g. 'hello@asala.com.bd'
    address: 'BPATC,SAVAR,DHAKA', // e.g. 'Dhaka, Bangladesh'
  },

  // ---- Optional extra social links (leave "" to hide) -----------------------
  socialLinks: {
    instagram: '',
    youtube: '',
  },

  // ---- About section --------------------------------------------------------
  about: {
    en: 'ASALA is built around a simple belief — authenticity matters. We aim to bring carefully selected products to our customers with a focus on quality, trust and a meaningful experience.',
    bn: 'বিশুদ্ধতা ও গুণগত মানের প্রতি যত্নশীল থেকে ASALA এগিয়ে যেতে চায়। আমাদের প্রতিটি সংগ্রহের পেছনে রয়েছে মানসম্মত পণ্য এবং গ্রাহকের আস্থাকে গুরুত্ব দেওয়ার প্রচেষ্টা।',
    // Small words shown under the text. Remove or change freely.
    values: ['Authenticity', 'Quality', 'Trust'],
  },

  // ---- Contact section message ----------------------------------------------
  contactMessage: "Have a question about our products? We'd love to hear from you.",

  // ---- Footer ---------------------------------------------------------------
  copyright: '© 2026 ASALA. All Rights Reserved.',

  // ---- Sample content badge -------------------------------------------------
  // While products are demonstration content they carry a small "Sample" tag.
  // Each product can also be switched with  sample: true / false  in products.js.
  showSampleBadges: true,
};

export default siteConfig;
