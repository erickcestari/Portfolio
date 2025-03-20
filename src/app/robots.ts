import type { MetadataRoute } from 'next'
import { DOMAIN } from "@/utils/domain"
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${DOMAIN}/sitemap.xml`,
  }
}