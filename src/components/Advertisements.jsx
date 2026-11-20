import { useState } from 'react';
import advertisements from '../data/advertisements';
import Reveal from './Reveal';
import { getYouTubeId } from '../utils/links';

function AdMedia({ ad, youtubeId, onBroken }) {
  if (ad.type === 'youtube') {
    return (
      <iframe
        className="ad__frame"
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`}
        title={ad.title}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
      />
    );
  }

  if (ad.type === 'video') {
    return (
      <video
        className="ad__video"
        controls
        playsInline
        preload="metadata"
        poster={ad.poster || undefined}
        onError={onBroken}
        aria-label={ad.title}
      >
        <source src={ad.src} type="video/mp4" onError={onBroken} />
      </video>
    );
  }

  return (
    <img
      className="ad__img"
      src={ad.src}
      alt={ad.alt || ad.title}
      loading="lazy"
      decoding="async"
      onError={onBroken}
    />
  );
}

function AdCard({ ad, delay }) {
  const youtubeId = ad.type === 'youtube' ? getYouTubeId(ad.youtube || ad.src) : null;
  const missingSource = ad.type === 'youtube' ? !youtubeId : !ad.src;
  const [broken, setBroken] = useState(false);

  // A missing file / bad link hides its card instead of showing a broken box.
  if (broken || missingSource) return null;

  return (
    <Reveal as="article" className="ad" delay={delay}>
      <div className="ad__media">
        <AdMedia ad={ad} youtubeId={youtubeId} onBroken={() => setBroken(true)} />
      </div>
      <div className="ad__body">
        <h3 className="ad__title">{ad.title}</h3>
        {ad.description ? <p className="ad__desc">{ad.description}</p> : null}
      </div>
    </Reveal>
  );
}

export default function Advertisements() {
  const items = advertisements.filter((ad) => ad && ad.title);
  if (!items.length) return null; // no advertisements → no section

  return (
    <section className="section section--beige" id="discover" aria-labelledby="discover-title">
      <div className="container">
        <Reveal className="section-head">
          <h2 id="discover-title" className="section-title">
            Discover ASALA
          </h2>
          <p className="section-sub">Explore our latest advertisements and brand stories.</p>
        </Reveal>

        <div className="adgrid">
          {items.map((ad, index) => (
            <AdCard key={ad.id ?? index} ad={ad} delay={Math.min(index, 4) * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}
