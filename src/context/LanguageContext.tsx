'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type Language = 'EN' | 'TR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isInitialized: boolean;
}

// Basic Dictionary for Demo Translation
const dictionary = {
  EN: {
    // Header
    free_shipping: "Free Shipping on Orders Over Rs. 5000 - Code HAYAT15 for 15% OFF",
    nav_home: "Home",
    nav_abayas: "Abayas",
    nav_dresses: "Dresses",
    nav_shalwar: "Shalwar Kameez",
    nav_coord: "Coord Sets",
    nav_all: "All",
    nav_sale: "🔥 Sale",
    bag: "Bag",
    login: "Login",
    
    // Home Hero
    exclusive_collection: "Exclusive Collection",
    ottoman: "Ottoman",
    elegance: "Elegance",
    hero_desc: "Hand-embroidered abayas & velvet gowns with the finest fabrics.",
    view_collection: "View Collection →",
    shop_now: "Shop Now",
    
    // Icons Bar
    styles: "Styles",
    sale_off: "Up to 40% Off",
    
    // Metrics
    happy_customers: "Happy Customers",
    unique_styles: "Unique Styles",
    average_rating: "Average Rating",
    easy_returns: "Easy Returns",
    
    // Shop By Category
    shop_by_category: "Shop by Category",
    choose_looking_for: "Choose what you are looking for",
    premium_collection: "Premium Collection",
    
    // Home Sections
    limited_time: "Limited Time",
    sale_banner_title: "Get 40% Off - Today Only!",
    trending_now: "Trending Now",
    trending_desc: "Discover our most loved pieces",
    
    // Features
    free_shipping_title: "Free Shipping",
    free_shipping_desc: "Free on orders over Rs. 5000",
    easy_returns_desc: "14-day return policy",
    secure_payment: "Secure Payment",
    secure_payment_desc: "100% safe checkout",
    premium_quality: "Premium Quality",
    premium_quality_desc: "Handpicked fabrics",
    
    // Testimonials
    customer_love: "Customer Love",
    what_customers_say: "What Our Customers Say",
    verified: "Verified",
    
    // Newsletter
    join_community: "Join Our Community",
    get_off: "Get 15% Off Your First Order",
    newsletter_desc: "New arrivals, exclusive offers & style inspiration delivered to your inbox.",
    email_placeholder: "Your email address",
    get_discount: "Get 15% Off",

    // Footer
    footer_desc: "Elevating modest fashion with premium fabrics, elegant designs, and unparalleled craftsmanship. Designed for the modern modest woman.",
    footer_shop: "Shop",
    footer_help: "Help & Info",
    footer_about: "About Us",
    footer_contact: "Contact Us",
    footer_shipping: "Shipping Policy",
    footer_returns: "Returns & Exchanges",
    footer_faq: "FAQ",
    footer_contact_title: "Contact",
    footer_copyright: "© 2026 Modest Fashion Store. All rights reserved.",
    // Product Details
    add_to_bag: "Add to Bag",
    add_to_wishlist: "Add to Wishlist",
    remove_from_wishlist: "Remove from Wishlist",
    size_guide: "Size Guide",
    color: "Color",
    size: "Size",
    quantity: "Quantity",
    description: "Description",
    details: "Details",
    reviews: "Reviews",
    product_details_tab1: "Product Details",
    product_details_tab2: "Shipping & Returns",

    // Cart
    cart_title: "Your Shopping Bag",
    cart_empty: "Your bag is currently empty.",
    continue_shopping: "Continue Shopping",
    order_summary: "Order Summary",
    subtotal: "Subtotal",
    cart_shipping: "Shipping",
    total: "Total",
    proceed_checkout: "Proceed to Checkout",

    // Checkout
    checkout_title: "Checkout",
    contact_info: "Contact Information",
    shipping_address: "Shipping Address",
    payment_method: "Payment Method",
    place_order: "Place Order",
    first_name: "First Name",
    last_name: "Last Name",
    address: "Address",
    city: "City",
    postal_code: "Postal Code",
    country: "Country",
    phone: "Phone",

    // Hero Banner
    hero_title_1: "Effortless Grace",
    hero_subtitle_1: "Premium Modest Wear & Luxury Abayas",
    hero_btn_1: "Explore Collection",
    hero_title_2: "Timeless Modern Fashion",
    hero_subtitle_2: "Elegant designs crafted for everyday comfort",
    hero_btn_2: "Shop New Arrivals",
    hero_title_3: "Ottoman Elegance",
    hero_subtitle_3: "Traditional embroidery meets modern elegance",
    hero_btn_3: "View Special Edition",

    // Header specific
    nav_bag: "Bag",
    my_account: "My Account",
    my_orders: "My Orders",
    notifications: "Notifications",
    admin_panel: "Admin Panel",
    sign_out: "Sign Out",
    search_placeholder: "Search for abayas, dresses..."
  },
  TR: {
    // Header
    free_shipping: "5000 TL Üzeri Siparişlerde Ücretsiz Kargo - %15 İNDİRİM için Kod: HAYAT15",
    nav_home: "Ana Sayfa",
    nav_abayas: "Abayalar",
    nav_dresses: "Elbiseler",
    nav_shalwar: "Şalvar Kamiz",
    nav_coord: "Takımlar",
    nav_all: "Tümü",
    nav_sale: "🔥 İndirim",
    bag: "Sepet",
    login: "Giriş",
    
    // Home Hero
    exclusive_collection: "Özel Koleksiyon",
    ottoman: "Osmanlı",
    elegance: "Zarafeti",
    hero_desc: "En iyi kumaşlarla elde işlenmiş abayalar ve kadife elbiseler.",
    view_collection: "Koleksiyonu İncele →",
    shop_now: "Şimdi Alışveriş Yap",
    
    // Icons Bar
    styles: "Model",
    sale_off: "%40'a Varan İndirim",
    
    // Metrics
    happy_customers: "Mutlu Müşteri",
    unique_styles: "Özgün Model",
    average_rating: "Ortalama Puan",
    easy_returns: "Kolay İade",
    
    // Shop By Category
    shop_by_category: "Kategoriye Göre Alışveriş",
    choose_looking_for: "Aradığınızı seçin",
    premium_collection: "Premium Koleksiyon",

    // Home Sections
    limited_time: "Sınırlı Süre",
    sale_banner_title: "%40 İndirim Kazanın - Sadece Bugün!",
    trending_now: "Şu An Trend",
    trending_desc: "En sevilen parçalarımızı keşfedin",
    
    // Features
    free_shipping_title: "Ücretsiz Kargo",
    free_shipping_desc: "5000 TL üzeri siparişlerde",
    easy_returns_desc: "14 gün iade politikası",
    secure_payment: "Güvenli Ödeme",
    secure_payment_desc: "%100 güvenli alışveriş",
    premium_quality: "Premium Kalite",
    premium_quality_desc: "Özenle seçilmiş kumaşlar",
    
    // Testimonials
    customer_love: "Müşteri Sevgisi",
    what_customers_say: "Müşterilerimiz Neler Diyor",
    verified: "Onaylı",
    
    // Newsletter
    join_community: "Topluluğumuza Katılın",
    get_off: "İlk Siparişinizde %15 İndirim Kazanın",
    newsletter_desc: "Yeni ürünler, özel teklifler ve stil ilhamı doğrudan gelen kutunuza gelsin.",
    email_placeholder: "E-posta adresiniz",
    get_discount: "%15 İndirim Al",

    // Footer
    footer_desc: "Premium kumaşlar, zarif tasarımlar ve eşsiz işçilikle mütevazı modayı yükseltiyoruz. Modern mütevazı kadınlar için tasarlandı.",
    footer_shop: "Alışveriş",
    footer_help: "Yardım & Bilgi",
    footer_about: "Hakkımızda",
    footer_contact: "Bize Ulaşın",
    footer_shipping: "Kargo Politikası",
    footer_returns: "İade & Değişim",
    footer_faq: "SSS",
    footer_contact_title: "İletişim",
    footer_copyright: "© 2026 Modest Fashion Store. Tüm hakları saklıdır.",
    // Product Details
    add_to_bag: "Sepete Ekle",
    add_to_wishlist: "Favorilere Ekle",
    remove_from_wishlist: "Favorilerden Çıkar",
    size_guide: "Beden Tablosu",
    color: "Renk",
    size: "Beden",
    quantity: "Miktar",
    description: "Açıklama",
    details: "Detaylar",
    reviews: "Değerlendirmeler",
    product_details_tab1: "Ürün Detayları",
    product_details_tab2: "Kargo & İade",

    // Cart
    cart_title: "Alışveriş Sepetiniz",
    cart_empty: "Sepetiniz şu anda boş.",
    continue_shopping: "Alışverişe Devam Et",
    order_summary: "Sipariş Özeti",
    subtotal: "Ara Toplam",
    cart_shipping: "Kargo",
    total: "Toplam",
    proceed_checkout: "Ödemeye Geç",

    // Checkout
    checkout_title: "Ödeme",
    contact_info: "İletişim Bilgileri",
    shipping_address: "Teslimat Adresi",
    payment_method: "Ödeme Yöntemi",
    place_order: "Siparişi Ver",
    first_name: "Ad",
    last_name: "Soyad",
    address: "Adres",
    city: "Şehir",
    postal_code: "Posta Kodu",
    country: "Ülke",
    phone: "Telefon",

    // Hero Banner
    hero_title_1: "Zahmetsiz Zarafet",
    hero_subtitle_1: "Birinci Sınıf Tesettür Giyim & Lüks Abayalar",
    hero_btn_1: "Koleksiyonu Keşfet",
    hero_title_2: "Zamansız Modern Moda",
    hero_subtitle_2: "Günlük rahatlık için hazırlanmış zarif tasarımlar",
    hero_btn_2: "Yeni Gelenleri Satın Al",
    hero_title_3: "Osmanlı Zarafeti",
    hero_subtitle_3: "Geleneksel nakış modern zarafetle buluşuyor",
    hero_btn_3: "Özel Sürümü Görüntüle",

    // Header specific
    nav_bag: "Sepet",
    my_account: "Hesabım",
    my_orders: "Siparişlerim",
    notifications: "Bildirimler",
    admin_panel: "Yönetici Paneli",
    sign_out: "Çıkış Yap",
    search_placeholder: "Abaya, elbise ara..."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('EN');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check local storage for language preference on mount
    const savedLang = localStorage.getItem('site_language') as Language;
    if (savedLang && (savedLang === 'EN' || savedLang === 'TR')) {
      setLanguageState(savedLang);
    }
    setIsInitialized(true);
  }, []);

  const setLanguage = (lang: Language) => {
    localStorage.setItem('site_language', lang);
    setLanguageState(lang);
  };

  const t = (key: string) => {
    const translation = dictionary[language][key as keyof typeof dictionary['EN']];
    return translation || key; // fallback to key if not found
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isInitialized }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}