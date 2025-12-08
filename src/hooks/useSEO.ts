import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { seoData } from "@/data/seo";

type PageKey = keyof typeof seoData.da;

export function useSEO(pageKey: PageKey) {
  const { language } = useLanguage();
  const seo = seoData[language][pageKey];

  useEffect(() => {
    // Update document title
    document.title = seo.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", seo.metaDescription);

    // Update Open Graph tags
    const ogTags = [
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.metaDescription },
      { property: "og:image", content: seo.openGraphImage },
      { property: "og:locale", content: language === "da" ? "da_DK" : "en_US" },
      { property: "og:type", content: "website" },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // Update Twitter tags
    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: seo.title },
      { name: "twitter:description", content: seo.metaDescription },
      { name: "twitter:image", content: seo.openGraphImage },
    ];

    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.href);

    // Update alternate language links (hreflang)
    const baseUrl = window.location.origin + window.location.pathname;
    
    // Remove existing hreflang tags
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
    
    // Add hreflang tags
    const hreflangs = [
      { hreflang: "da", href: baseUrl },
      { hreflang: "en", href: baseUrl },
      { hreflang: "x-default", href: baseUrl },
    ];

    hreflangs.forEach(({ hreflang, href }) => {
      const link = document.createElement("link");
      link.setAttribute("rel", "alternate");
      link.setAttribute("hreflang", hreflang);
      link.setAttribute("href", href);
      document.head.appendChild(link);
    });

  }, [seo, language]);

  return seo;
}
