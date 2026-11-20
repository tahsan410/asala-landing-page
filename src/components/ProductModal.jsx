import { useCallback, useEffect, useRef, useState } from 'react';
import { Archive, ChefHat, Coffee, Leaf, MapPin, Scale, Tag, X } from 'lucide-react';
import SafeImage from './SafeImage';
import siteConfig from '../data/siteConfig';

const DETAIL_FIELDS = [
  ['ingredients', 'Ingredients', Leaf],
  ['origin', 'Origin', MapPin],
  ['taste', 'Taste & Aroma', Coffee],
  ['preparation', 'Preparation', ChefHat],
  ['storage', 'Storage', Archive],
];

const has = (value) => typeof value === 'string' && value.trim().length > 0;

export default function ProductModal({ product, onClose }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const [closing, setClosing] = useState(false);
  const closingRef = useRef(false);

  const requestClose = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    setClosing(true);
    window.setTimeout(onClose, 220);
  }, [onClose]);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        requestClose();
        return;
      }
      if (event.key === 'Tab' && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused && previouslyFocused.focus) previouslyFocused.focus();
    };
  }, [requestClose]);

  const details = product.details || {};
  const rows = DETAIL_FIELDS.filter(([key]) => has(details[key]));
  const showSample = product.sample && siteConfig.showSampleBadges;

  return (
    <div
      className={`modal${closing ? ' is-closing' : ''}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) requestClose();
      }}
    >
      <div
        className="modal__panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        <button
          type="button"
          className="modal__close"
          ref={closeRef}
          onClick={requestClose}
          aria-label="Close product details"
        >
          <X size={20} strokeWidth={1.8} aria-hidden="true" />
        </button>

        <div className="modal__scroll">
          <div className="modal__media">
            <SafeImage
              src={product.image}
              alt={`${product.name} — ASALA`}
              label={product.name}
              className="modal__img"
              loading="eager"
            />
            {showSample ? <span className="tag-sample">Sample</span> : null}
          </div>

          <div className="modal__body">
            {has(product.category) ? <p className="modal__category">{product.category}</p> : null}
            <h3 id="product-modal-title" className="modal__title">
              {product.name}
            </h3>

            {has(product.weight) || has(product.price) ? (
              <ul className="modal__chips">
                {has(product.weight) ? (
                  <li>
                    <Scale size={15} strokeWidth={1.7} aria-hidden="true" />
                    <span className="sr-only">Weight: </span>
                    {product.weight}
                  </li>
                ) : null}
                {has(product.price) ? (
                  <li>
                    <Tag size={15} strokeWidth={1.7} aria-hidden="true" />
                    <span className="sr-only">Price: </span>
                    {product.price}
                  </li>
                ) : null}
              </ul>
            ) : null}

            {has(product.description) ? (
              <p className="modal__description">{product.description}</p>
            ) : null}

            {rows.length ? (
              <dl className="modal__details">
                {rows.map(([key, label, Icon]) => (
                  <div className="modal__row" key={key}>
                    <dt>
                      <Icon size={16} strokeWidth={1.6} aria-hidden="true" />
                      {label}
                    </dt>
                    <dd>{details[key]}</dd>
                  </div>
                ))}
              </dl>
            ) : null}

            {showSample ? (
              <p className="modal__note">
                Sample content — this information is for demonstration only and is editable in
                src/data/products.js.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
