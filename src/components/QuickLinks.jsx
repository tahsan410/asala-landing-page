import { Facebook, Globe, Lock, MessageCircle, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import { getFacebookUrl, getOfficialWebsite, getWhatsAppUrl } from '../utils/links';

function QuickCard({ href, icon: Icon, label, hint, delay }) {
  const inner = (
    <>
      <span className="qcard__icon">
        <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
      </span>
      <span className="qcard__body">
        <span className="qcard__label">{label}</span>
        {href ? (
          <span className="qcard__hint">{hint}</span>
        ) : (
          <span className="qcard__status">
            <Lock size={12} strokeWidth={2} aria-hidden="true" />
            <span className="bn">শীঘ্রই আসছে</span>
            <span aria-hidden="true">·</span>
            <span>Coming Soon</span>
          </span>
        )}
      </span>
      {href ? (
        <ArrowUpRight className="qcard__arrow" size={20} strokeWidth={1.6} aria-hidden="true" />
      ) : null}
    </>
  );

  if (!href) {
    // Disabled: a plain box, NOT a link. It cannot open anything.
    return (
      <Reveal className="qcard is-disabled" delay={delay} aria-disabled="true">
        {inner}
      </Reveal>
    );
  }

  return (
    <Reveal
      as="a"
      className="qcard"
      delay={delay}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {inner}
    </Reveal>
  );
}

export default function QuickLinks() {
  return (
    <section className="quick" aria-label="Quick links">
      <div className="container">
        <p className="quick__label">Explore &amp; Connect</p>
      </div>
      <div className="container quick__grid">
        <QuickCard
          href={getOfficialWebsite()}
          icon={Globe}
          label="Official Website"
          hint="Visit our website"
          delay={0}
        />
        <QuickCard
          href={getFacebookUrl()}
          icon={Facebook}
          label="Facebook Page"
          hint="Follow our page"
          delay={80}
        />
        <QuickCard
          href={getWhatsAppUrl()}
          icon={MessageCircle}
          label="WhatsApp"
          hint="Chat with us"
          delay={160}
        />
      </div>
    </section>
  );
}
