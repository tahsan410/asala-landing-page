import { useState } from 'react';
import siteConfig from '../data/siteConfig';
import Reveal from './Reveal';

export default function About() {
  const { about, aboutImage, aboutImageAlt } = siteConfig;
  const [imageOk, setImageOk] = useState(Boolean(aboutImage));

  return (
    <section className="section section--light about" id="about" aria-labelledby="about-title">
      <div className="container about__grid">
        <Reveal className="about__head">
          <h2 id="about-title" className="section-title">
            About ASALA
          </h2>
          <p className="section-sub bn">আমাদের সম্পর্কে</p>
          {imageOk ? (
            <figure className="about__figure">
              <img
                src={aboutImage}
                alt={aboutImageAlt}
                loading="lazy"
                decoding="async"
                onError={() => setImageOk(false)}
              />
            </figure>
          ) : null}
        </Reveal>

        <Reveal className="about__copy" delay={100}>
          {about.en ? <p className="about__en">{about.en}</p> : null}
          {about.bn ? <p className="about__bn bn">{about.bn}</p> : null}
          {about.values && about.values.length ? (
            <ul className="about__values">
              {about.values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
