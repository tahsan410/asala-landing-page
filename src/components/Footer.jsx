import { Facebook, Instagram, MessageCircle, Youtube } from 'lucide-react';
import BrandLogo from './BrandLogo';
import siteConfig from '../data/siteConfig';
import { getFacebookUrl, getWhatsAppUrl, isValidUrl } from '../utils/links';

export default function Footer() {
  const { socialLinks, copyright } = siteConfig;
  const links = [
    { label: 'Facebook', icon: Facebook, href: getFacebookUrl() },
    { label: 'WhatsApp', icon: MessageCircle, href: getWhatsAppUrl() },
    { label: 'Instagram', icon: Instagram, href: isValidUrl(socialLinks.instagram) ? socialLinks.instagram : null },
    { label: 'YouTube', icon: Youtube, href: isValidUrl(socialLinks.youtube) ? socialLinks.youtube : null },
  ].filter((item) => item.href);

  return (
    <footer className="site-footer">
      <div className="container footer__inner">
        <BrandLogo variant="footer" />

        {links.length ? (
          <ul className="footer__links" aria-label="Social links">
            {links.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon size={17} strokeWidth={1.6} aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}

        <p className="footer__copy">{copyright}</p>
      </div>
    </footer>
  );
}
