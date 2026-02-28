import { Helmet } from "react-helmet-async";

const BASE_URL = "https://franceprepacademy.fr";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

/**
 * Composant SEO réutilisable — à placer en début de chaque page.
 *
 * Props :
 *   title       : titre de la page (sans le nom du site)
 *   description : description meta (150-160 caractères)
 *   canonical   : chemin absolu ex. "/courses"
 *   image       : URL absolue de l'image OG (optionnel)
 *   type        : og:type ("website" | "article" | "product")  — défaut "website"
 *   noindex     : true pour les pages privées (dashboard, profil…)
 *   jsonLd      : objet JSON-LD supplémentaire (structured data)
 */
export default function SEO({
  title,
  description,
  canonical = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  jsonLd = null,
}) {
  const fullTitle = title
    ? `${title} | FrancePrepAcademy`
    : "FrancePrepAcademy - Réussissez votre vie en France";

  const canonicalUrl = `${BASE_URL}${canonical}`;

  return (
    <Helmet>
      {/* Primaire */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="FrancePrepAcademy" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD structured data (optionnel) */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
