import { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

// An image that never shows as "broken".
// If the file is missing (or no path is given) an elegant placeholder
// is shown instead, so you can add real pictures whenever you are ready.
export default function SafeImage({ src, alt, label, className = '', ...rest }) {
  const [failed, setFailed] = useState(!src);

  useEffect(() => {
    setFailed(!src);
  }, [src]);

  if (failed) {
    return (
      <div className={`img-fallback ${className}`.trim()} role="img" aria-label={alt}>
        <Leaf size={30} strokeWidth={1.2} aria-hidden="true" />
        {label ? <span>{label}</span> : null}
      </div>
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
