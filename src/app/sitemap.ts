import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const urls = ['/', '/biografi', '/peternakan'];

	return urls.map((url) => ({
		url: `${process.env.NEXT_PUBLIC_BASE_URL}${url}`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.8,
	}));
}
