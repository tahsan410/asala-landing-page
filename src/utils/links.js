import siteConfig from '../data/siteConfig';

// Only real https:// addresses are accepted. Anything else means "not set yet".
export function isValidUrl(value) {
  if (typeof value !== 'string') return false;
  try {
    const url = new URL(value.trim());
    return url.protocol === 'https:' && url.hostname.includes('.');
  } catch {
    return false;
  }
}

export function getOfficialWebsite() {
  const { status, url } = siteConfig.officialWebsite;
  return status === 'live' && isValidUrl(url) ? url.trim() : null;
}

export function getFacebookUrl() {
  const url = siteConfig.facebook.pageUrl;
  return isValidUrl(url) ? url.trim() : null;
}

export function getMessengerUrl() {
  const name = (siteConfig.facebook.messengerUsername || '').trim().replace(/^\/+|\/+$/g, '');
  return name ? `https://m.me/${encodeURIComponent(name)}` : null;
}

export function getWhatsAppUrl() {
  const digits = String(siteConfig.whatsapp.number || '').replace(/\D/g, '');
  if (digits.length < 8) return null;
  const text = encodeURIComponent(siteConfig.whatsapp.message || '');
  return `https://wa.me/${digits}${text ? `?text=${text}` : ''}`;
}

export function getYouTubeId(value) {
  if (!value) return null;
  const input = String(value).trim();
  if (/^[\w-]{11}$/.test(input)) return input;
  const match = input.match(/(?:youtu\.be\/|[?&]v=|embed\/|shorts\/)([\w-]{11})/);
  return match ? match[1] : null;
}
