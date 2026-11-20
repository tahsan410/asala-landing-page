import { useCallback, useMemo, useState } from 'react';
import products from '../data/products';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import Reveal from './Reveal';

export default function Products() {
  const [category, setCategory] = useState('All');
  const [selected, setSelected] = useState(null);

  const categories = useMemo(() => {
    const unique = [];
    products.forEach((p) => {
      if (p.category && !unique.includes(p.category)) unique.push(p.category);
    });
    return unique.length > 1 ? ['All', ...unique] : [];
  }, []);

  const visible = category === 'All' ? products : products.filter((p) => p.category === category);
  const open = useCallback((product) => setSelected(product), []);
  const close = useCallback(() => setSelected(null), []);

  if (!products.length) return null;

  return (
    <section className="section section--light" id="products" aria-labelledby="products-title">
      <div className="container">
        <Reveal className="section-head">
          <h2 id="products-title" className="section-title">
            Our Products
          </h2>
          <p className="section-sub bn">আমাদের সংগ্রহ</p>
        </Reveal>

        {categories.length ? (
          <div className="filters" role="group" aria-label="Filter products by category">
            {categories.map((name) => (
              <button
                key={name}
                type="button"
                className={`chip${category === name ? ' is-active' : ''}`}
                aria-pressed={category === name}
                onClick={() => setCategory(name)}
              >
                {name}
              </button>
            ))}
          </div>
        ) : null}

        <div className="pgrid" key={category}>
          {visible.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpen={open}
              delay={Math.min(index, 5) * 60}
            />
          ))}
        </div>
      </div>

      {selected ? <ProductModal product={selected} onClose={close} /> : null}
    </section>
  );
}
