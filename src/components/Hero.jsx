import { useState } from 'react';
import siteConfig from '../data/siteConfig';
import Reveal from './Reveal';

export default function Hero() {
  const { hero, heroImage, heroImageAlt, brandName } = siteConfig;
  const [imageOk, setImageOk] = useState(Boolean(heroImage));

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        {imageOk ? (
          <Reveal as="figure" className="hero__frame">
            <img
              src={heroImage}
              alt={heroImageAlt}
              decoding="async"
              onError={() => setImageOk(false)}
            />
          </Reveal>
        ) : null}

        <Reveal className="hero__copy" delay={120}>
          <span className="ornament" aria-hidden="true">
            <i />
          </span>
          <h1 id="hero-title" className="hero__title">
            {hero.title} <em>{brandName}</em>
          </h1>
          <p className="hero__bn bn">{hero.subtitleBn}</p>
          <p className="hero__text">{hero.text}</p>
        </Reveal>
      </div>
    </section>
  );
}
