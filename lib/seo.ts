import type { Metadata } from "next";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = "/images/hero-familia.png",
}: PageMetadataOptions): Metadata {
  const socialTitle = `${title} | Roesan Seguros`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: "Roesan Seguros",
      locale: "es_CO",
      type: "website",
      images: [{ url: image, alt: socialTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}
