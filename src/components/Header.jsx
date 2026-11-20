import BrandLogo from './BrandLogo';
import siteConfig from '../data/siteConfig';
import products from '../data/products';
import advertisements from '../data/advertisements';

export default function Header() {
  // Small jump-links, shown on larger screens only. Sections that are empty are left out.
  const links = [
    products.length && { href: '#products', label: 'Products' },
    advertisements.some((ad) => ad && ad.title) && { href: '#discover', label: 'Discover' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ].filter(Boolean);

  return (
    <header className="site-header">
      <div className="container header__inner">
        <a href="#top" className="header__home" aria-label={`${siteConfig.brandName} — back to top`}>
          <BrandLogo variant="header" />
        </a>
        <nav className="header__nav" aria-label="Page sections">
          {links.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
