const title = 'Urnau.';
const description =
  'Urnau desc';

const SEO = {
  title,
  description,
  canonical: 'https://localhost',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://localhost',
    title,
    description,
    images: [
      {
        url: 'https://localhost/og.png',
        alt: title,
        width: 1200,
        height: 700
      }
    ]
  }
};

export default SEO;