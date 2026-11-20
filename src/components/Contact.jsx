import { ArrowUpRight, Mail, MapPin, MessageCircle, MessagesSquare, Phone } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import Reveal from './Reveal';
import { getMessengerUrl, getWhatsAppUrl } from '../utils/links';

function ContactCard({ href, icon: Icon, title, hint, delay }) {
  const body = (
    <>
      <span className="ccard__icon">
        <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
      </span>
      <span className="ccard__text">
        <span className="ccard__title">{title}</span>
        <span className="ccard__hint">
          {href ? (
            hint
          ) : (
            <>
              <span className="bn">শীঘ্রই আসছে</span> · Coming Soon
            </>
          )}
        </span>
      </span>
      {href ? <ArrowUpRight className="ccard__arrow" size={20} strokeWidth={1.5} aria-hidden="true" /> : null}
    </>
  );

  if (!href) {
    return (
      <Reveal className="ccard is-disabled" delay={delay} aria-disabled="true">
        {body}
      </Reveal>
    );
  }
  return (
    <Reveal
      as="a"
      className="ccard"
      delay={delay}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {body}
    </Reveal>
  );
}

export default function Contact() {
  const { contact, contactMessage } = siteConfig;
  const lines = [
    contact.phone && { icon: Phone, text: contact.phone, href: `tel:${contact.phone.replace(/\s+/g, '')}` },
    contact.email && { icon: Mail, text: contact.email, href: `mailto:${contact.email}` },
    contact.address && { icon: MapPin, text: contact.address },
  ].filter(Boolean);

  return (
    <section className="section section--green contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <h2 id="contact-title" className="section-title">
            Stay Connected
          </h2>
          <p className="section-sub bn">যোগাযোগ করুন</p>
          <p className="contact__message">{contactMessage}</p>
        </Reveal>

        <div className="contact__grid">
          <ContactCard
            href={getMessengerUrl()}
            icon={MessagesSquare}
            title="Facebook Messenger"
            hint="Send us a message"
            delay={0}
          />
          <ContactCard
            href={getWhatsAppUrl()}
            icon={MessageCircle}
            title="WhatsApp"
            hint="Chat with us"
            delay={90}
          />
        </div>

        {lines.length ? (
          <ul className="contact__lines">
            {lines.map(({ icon: Icon, text, href }) => (
              <li key={text}>
                <Icon size={16} strokeWidth={1.6} aria-hidden="true" />
                {href ? <a href={href}>{text}</a> : <span>{text}</span>}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
