import { MetadataRoute } from 'next'
import { Language } from '@/types/Language'
import { getLanguages } from '@/utils/getLanguages';
import { articles } from '@/mdx-database/articles';
import { parseTitleHref } from '@/utils/parseTitleHref';

type PageMap = {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

const addLanguage = (pageMap: PageMap): MetadataRoute.Sitemap => {
  const languages = getLanguages();
  const keyLanguages = [...languages.keys()];

  const urlMaps: MetadataRoute.Sitemap = [];
  keyLanguages.forEach((lang) => {
    const urlSplit = pageMap.url.split('/');
    urlSplit.splice(3, 0, lang);
    const urlWithLang = urlSplit.join('/');

    urlMaps.push({
      url: urlWithLang,
      lastModified: pageMap.lastModified,
      changeFrequency: pageMap.changeFrequency,
      priority: pageMap.priority,
    });
  });

  return urlMaps;
}

const makeUrlMap = () => {
  const urlMap: MetadataRoute.Sitemap = [];
  urlMap.push(...addLanguage({
    url: 'https://erickcestari.dev',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  }));
  urlMap.push(...addLanguage({
    url: 'https://erickcestari.dev/projects',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
  urlMap.push(...addLanguage({
    url: 'https://erickcestari.dev/blog',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.5,
  }));
  urlMap.push(...addLanguage({
    url: 'https://erickcestari.dev/blog',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.5,
  }));
  articles?.map((article) => {
    const url = `https://erickcestari.dev/blog/${parseTitleHref(article.title)}`;
    urlMap.push(...addLanguage({
      url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    }));
  })
  return urlMap;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteMap = makeUrlMap();
  return siteMap
}