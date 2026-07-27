import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string | string[];
  canonical?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  schema?: Record<string, any>;
}

export const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = 'https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629472/becweb/logo.png',
  ogTitle,
  ogDescription,
  schema
}: SEOProps) => {
  const { pathname } = useLocation();
  const currentUrl = `https://becbbsr.ac.in${pathname}`;

  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title.includes('BEC') || title.includes('Bhubaneswar Engineering College') 
      ? title 
      : `${title} | BEC Bhubaneswar`;
    document.title = formattedTitle;

    // Helper to get or create meta tags
    const updateOrCreateMeta = (attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to get or create link tags
    const updateOrCreateLink = (relVal: string, hrefVal: string) => {
      let element = document.querySelector(`link[rel="${relVal}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', relVal);
        document.head.appendChild(element);
      }
      element.setAttribute('href', hrefVal);
    };

    // 2. Update Standard Meta Tags
    updateOrCreateMeta('name', 'description', description);
    
    if (keywords) {
      const keywordsStr = Array.isArray(keywords) ? keywords.join(', ') : keywords;
      updateOrCreateMeta('name', 'keywords', keywordsStr);
    }

    // 3. Update Canonical Tag
    updateOrCreateLink('canonical', canonical || currentUrl);

    // 4. Update Open Graph Meta Tags
    updateOrCreateMeta('property', 'og:url', canonical || currentUrl);
    updateOrCreateMeta('property', 'og:type', ogType);
    updateOrCreateMeta('property', 'og:title', ogTitle || formattedTitle);
    updateOrCreateMeta('property', 'og:description', ogDescription || description);
    updateOrCreateMeta('property', 'og:image', ogImage);

    // 5. Update Twitter Card Meta Tags
    updateOrCreateMeta('property', 'twitter:url', canonical || currentUrl);
    updateOrCreateMeta('property', 'twitter:title', ogTitle || formattedTitle);
    updateOrCreateMeta('property', 'twitter:description', ogDescription || description);
    updateOrCreateMeta('property', 'twitter:image', ogImage);

    // 6. Update Schema.org Structured Data
    let schemaScript = document.getElementById('seo-schema-script') as HTMLScriptElement | null;
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'seo-schema-script';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      // Inject standard context if missing
      const fullSchema = {
        '@context': 'https://schema.org',
        ...schema
      };
      schemaScript.textContent = JSON.stringify(fullSchema, null, 2);
    } else {
      // Remove schema script if none exists for this page
      if (schemaScript) {
        schemaScript.remove();
      }
    }

    // Cleanup logic (though not strictly necessary on page transitions as next page will overwrite)
    return () => {
      // We can leave standard metas as they get overwritten, but we remove the schema if we unmount the page
    };
  }, [title, description, keywords, canonical, ogType, ogImage, ogTitle, ogDescription, schema, currentUrl]);

  return null; // This component does not render any visual UI elements
};
