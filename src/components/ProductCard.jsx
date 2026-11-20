import { ArrowRight } from 'lucide-react';
import SafeImage from './SafeImage';
import Reveal from './Reveal';
import siteConfig from '../data/siteConfig';

export default function ProductCard({ product, onOpen, delay = 0 }) {
  const meta = [product.weight, product.price].filter((v) => v && String(v).trim());
  const showSample = product.sample && siteConfig.showSampleBadges;

  return (
    <Reveal as="article" delay={delay} className="pcard-wrap">
      <button
        type="button"
        className="pcard"
        onClick={() => onOpen(product)}
        aria-label={`View details: ${product.name}`}
      >
        <span className="pcard__media">
          <SafeImage
            src={product.image}
            alt={`${product.name} — ASALA`}
            label={product.name}
            className="pcard__img"
          />
          {showSample ? <span className="tag-sample">Sample</span> : null}
        </span>

        <span className="pcard__body">
          <span className="pcard__category">{product.category}</span>
          <span className="pcard__name">{product.name}</span>
          {product.shortDescription ? (
            <span className="pcard__desc">{product.shortDescription}</span>
          ) : null}
          {meta.length ? <span className="pcard__meta">{meta.join('  ·  ')}</span> : null}
          <span className="pcard__cta">
            View Details
            <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </span>
        </span>
      </button>
    </Reveal>
  );
}
