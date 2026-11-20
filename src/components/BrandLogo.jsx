import { useState } from 'react';
import siteConfig from '../data/siteConfig';

// Logo image + brand name + tagline.
// If the logo file is missing, only the brand name and tagline are shown.
export default function BrandLogo({ variant = 'header' }) {
  const { brandName, tagline, logo } = siteConfig;
  const [logoOk, setLogoOk] = useState(Boolean(logo));

  return (
    <div className={`brand brand--${variant}`}>
      {logoOk ? (
        <span className="brand__mark">
          <img
            src={logo}
            alt={`${brandName} logo`}
            width="480"
            height="419"
            onError={() => setLogoOk(false)}
          />
        </span>
      ) : null}
      <span className="brand__text">
        <span className="brand__name">{brandName}</span>
        <span className="brand__tagline">{tagline}</span>
      </span>
    </div>
  );
}
