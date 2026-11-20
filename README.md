# ASALA — Brand Landing Page

A fast, mobile-first landing page for customers who scan the QR code on ASALA packaging.
Built with React + Vite. No backend, no database, no paid services.

You do **not** need to be a programmer to update it. Almost everything is changed by
editing three simple text files:

| What you want to change | File to edit |
| --- | --- |
| Links, phone number, logo path, about text | `src/data/siteConfig.js` |
| Products | `src/data/products.js` |
| Advertisements, videos | `src/data/advertisements.js` |

Pictures and videos go in the **`public`** folder (see Part 5).

---

## What is placeholder right now?

- **Logo** — the official ASALA logo is already in `public/logo.png` (trimmed of extra empty margin and compressed for fast loading). The untouched original is kept in `brand-assets/` — it is not published.
- **Hero picture** — your supplied flat-lay photo is in `public/images/hero.jpg`. It is only 960 px wide, so a larger original (1600 px or wider) would look even sharper (Part 4).
- **Products** — six *sample* products with a small "Sample" tag. Replace the text and pictures (Parts 6–7).
- **Facebook / WhatsApp / Messenger** — not filled in yet, so those buttons show **Coming Soon** until you add them (Part 9).
- **Advertisements** — none yet, so the "Discover ASALA" section is hidden until you add one (Part 8).
- **Favicon** — `public/favicon.svg` is a simple placeholder; replace it with your own.

If a product picture is missing, the page shows an elegant placeholder instead of a broken image.

---

## 1. Install (one time)

1. Install **Node.js** (version 18 or newer) from <https://nodejs.org> — choose the "LTS" button.
2. Open a terminal (Command Prompt / PowerShell / Terminal) inside this project folder.
3. Run:

```bash
npm install
```

Wait until it finishes. A `node_modules` folder will appear — that is normal.

## 2. Run on your computer

```bash
npm run dev
```

Open the address it prints (usually <http://localhost:5173>). Every time you save a file,
the page refreshes by itself. Press `Ctrl + C` in the terminal to stop.

To test on your phone, run `npm run dev -- --host` and open the "Network" address on a phone
connected to the same Wi-Fi.

To make the final website files:

```bash
npm run build
```

This creates a `dist` folder — that is what gets published. (`npm run preview` lets you look at it.)

---

## 3. Replace the ASALA logo

1. Take the official logo file (PNG with a transparent background works best).
2. Name it **`logo.png`**.
3. Put it in the **`public`** folder and replace the existing `logo.png`.

That's all. If your logo has a different name (for example `asala-logo.svg`), put it in `public`
and change this line in `src/data/siteConfig.js`:

```js
logo: '/asala-logo.svg',
```

Do not edit or recolour the logo — the page shows it as supplied. The logo has its own
tan background. The header uses the same colour (`--logo-bg` at the top of `src/styles/global.css`,
currently `#edd4ad`) so the logo blends in with no visible edge. If you ever replace the logo with one
that has a different background colour, change that one value. In the footer the logo is a small rounded tile.

Also replace `public/favicon.svg` (browser tab icon) if you want the tab icon to match.

## 4. Replace the hero picture

Put a picture named **`hero.jpg`** in `public/images/` (replace the existing file).

The hero picture is shown in a rounded frame at the top of the page (wide on desktop, slightly
taller on phones, where the sides are trimmed a little). Use a wide landscape photo of at least
**1600 px** width, saved as JPG at medium quality so it stays under about **250 KB**. Keep the
important things (like the logo) near the middle.

The picture next to the About text is `public/images/about.jpg` (path: `aboutImage` in `siteConfig.js`).
Replace it with any photo, or set `aboutImage: ''` to hide it. Link-preview picture: `public/og-image.jpg`.

To use a different file name, edit `heroImage` in `src/data/siteConfig.js`.

---

## 5. Where do pictures and videos go?

```
public/
  logo.png                      ← ASALA logo
  favicon.svg                   ← browser tab icon
  og-image.jpg                  ← picture shown when the link is shared (1200 × 630 px)
  images/
    hero.jpg                    ← top-of-page picture
    about.jpg                   ← picture beside the About text
    products/                   ← product pictures
    advertisements/             ← advertisement pictures
  videos/                       ← MP4 videos
```

**The rule is always the same:**

1. Copy the file into the right folder inside `public`.
2. In the matching data file, write the path that starts with `/` and does **not** include the word `public`.

Example: the file `public/images/products/black-tea.jpg` is written as `"/images/products/black-tea.jpg"`.

- To **replace** a picture: save the new file with the **same name** over the old one, or put a new file in the folder and change the path.
- To **remove** a picture: delete the file (or set `image: ""`). The page automatically shows the placeholder.

Image tips for fast loading on mobile data: product pictures about **800 × 1000 px** (4:5 shape), JPG, under **150 KB** each.
Free tools such as <https://squoosh.app> shrink images without visible quality loss.

---

## 6. Add a new product

Open `src/data/products.js`. Copy one whole block from `{` to `},`, paste it after the last
product, and change the values:

```js
{
  id: 7,                                     // must be a new, unique number
  name: 'Mustard Oil',
  category: 'Oil',                           // a new filter button appears automatically
  image: '/images/products/mustard-oil.jpg',
  shortDescription: 'One short line for the card.',
  price: '৳350',                             // optional — use '' to hide
  weight: '500ml',                           // optional — use '' to hide
  description: 'Longer description shown in the details window.',
  details: {
    ingredients: '...',                      // every line is optional —
    origin: '...',                           // use '' to hide a line
    taste: '...',
    preparation: '...',
    storage: 'Store in a cool and dry place.',
  },
},
```

Don't forget the comma between products. To **remove** a product, delete its block.

## 7. Edit product details and add product pictures

- **Edit details:** change the text between the quotation marks in `src/data/products.js`.
- **Hide any line:** set it to `''`. Empty lines never appear on the page.
- **Remove the "Sample" tag:** change `sample: true` to `sample: false` (or delete that line) for each product you have filled in with real information. To hide every "Sample" tag at once, set `showSampleBadges: false` in `siteConfig.js`.
- **Add a picture:** put the file in `public/images/products/` and set `image` to its path (Part 5).

---

## 8. Add advertisements and videos

Open `src/data/advertisements.js`. There are three ready-made examples in comments. Remove
the `//` at the start of each line to switch one on, and edit the text. The "Discover ASALA"
section appears automatically once at least one advertisement exists.

- **Picture ad:** put the picture in `public/images/advertisements/` →
  `{ id: 1, type: 'image', title: '...', src: '/images/advertisements/ad-1.jpg' }`
- **MP4 video:** put the video in `public/videos/` →
  `{ id: 2, type: 'video', title: '...', src: '/videos/brand-story.mp4', poster: '/images/advertisements/cover.jpg' }`
  (`poster` is the optional cover picture). Keep videos small — under about 15 MB, ideally compressed to 720p.
  Videos never start by themselves.
- **YouTube video:** `{ id: 3, type: 'youtube', title: '...', youtube: 'https://www.youtube.com/watch?v=XXXXXXXXXXX' }`

`description` is optional. To remove an advertisement, delete its block or put `//` in front of each of its lines.
If a picture or video file is missing, that card simply doesn't appear.

---

## 9. Update Facebook, WhatsApp and Messenger

Open `src/data/siteConfig.js` and fill in the empty values:

```js
facebook: {
  pageUrl: 'https://www.facebook.com/your-page-name',   // Facebook Page button + footer
  messengerUsername: 'your-page-name',                  // Messenger button (m.me/your-page-name)
},
whatsapp: {
  number: '8801XXXXXXXXX',     // country code + number, digits only (no + or spaces)
  message: 'Hello ASALA! I would like to know more about your products.',
},
```

Phone, email and address (optional) are in the `contact` block — they only appear when filled in.
Instagram and YouTube links (optional) are in `socialLinks`.

Until a value is filled in, its button shows **Coming Soon** and is not clickable — visitors never land on a broken link.
After deploying, scan your QR code and tap each button once to confirm.

## 10. Activate the official website link later

Today the "Official Website" button is disabled and shows **শীঘ্রই আসছে · Coming Soon**.

When the website is ready, edit `src/data/siteConfig.js`:

```js
officialWebsite: {
  status: 'live',
  url: 'https://www.your-website.com',
},
```

Both must be set (status `'live'` **and** a real `https://` address). Save, redeploy (Part 12), done.

---

## 11. Deploy on Netlify

**Easiest way — drag and drop:**

1. Run `npm install` and then `npm run build` on your computer.
2. Go to <https://app.netlify.com/drop> (create a free account if asked).
3. Drag the **`dist`** folder onto the page. Your site is live in seconds.
4. In Netlify, open *Site configuration → Change site name* to choose a nicer address.

**Better way — connect GitHub (updates automatically):**

1. Upload this project to a GitHub repository.
2. In Netlify choose *Add new site → Import an existing project* and pick the repository.
3. Netlify reads `netlify.toml` and fills everything in (build command `npm run build`, publish folder `dist`). Click **Deploy**.

The included `netlify.toml` also makes sure refreshing the page never shows a 404.

**Custom domain:** *Domain management → Add a domain* in Netlify.

**Link-preview picture:** after you know your final address, open `index.html` and change
`content="/og-image.jpg"` to the full address, e.g. `content="https://your-site.netlify.app/og-image.jpg"`
(some apps need the full address to show the preview picture). Replace `public/og-image.jpg` with a
1200 × 630 px picture of your own.

## 12. Update the website after deployment

1. Change the files (data files, pictures, videos).
2. Check them with `npm run dev`.
3. **Drag-and-drop users:** run `npm run build` again, then in Netlify open *Deploys* and drag the new `dist` folder onto the deploy area.
4. **GitHub users:** commit and push the changes — Netlify rebuilds and publishes automatically.

The QR code never changes, because the web address stays the same.

---

## Project map

```
src/
  data/
    siteConfig.js       ← links, contact, about text, logo path
    products.js         ← products
    advertisements.js   ← advertisements
  components/           ← page sections (you normally never edit these)
  utils/links.js        ← builds Facebook / WhatsApp / Messenger links safely
  styles/global.css     ← colours, fonts, spacing (brand colours are at the top)
public/                 ← pictures, videos, logo, favicon
netlify.toml            ← Netlify settings (build + 404 protection)
```

## Troubleshooting

- **A picture doesn't show:** check the path starts with `/`, doesn't contain `public`, and the file name and capital letters match exactly (`Honey.JPG` is not `honey.jpg`).
- **A button says Coming Soon:** its link/number in `siteConfig.js` is still empty or isn't a full `https://` address.
- **The page is blank after an edit:** you probably removed a comma, quote or bracket in a data file. Compare with the original example. The terminal shows the exact line.
- **A video won't play:** use MP4 (H.264). Re-export it if needed.
