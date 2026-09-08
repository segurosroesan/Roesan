export interface BlogAuthor {
  slug: string;
  type: "Person" | "Organization";
  name: string;
  role: string;
  bio: string;
  image: string;
  profilePath: string;
}

export const blogAuthors: BlogAuthor[] = [
  {
    slug: "equipo-editorial-roesan",
    type: "Organization",
    name: "Equipo editorial de Roesan Seguros",
    role: "Contenido educativo sobre seguros",
    bio: "El equipo editorial de Roesan prepara contenidos educativos a partir de fuentes oficiales, condiciones de pólizas y la experiencia institucional de una agencia fundada en 1982. Los artículos no sustituyen la revisión de una póliza ni la asesoría aplicable a cada caso.",
    image: "/logo-roesan.png",
    profilePath: "/blog/autores/equipo-editorial-roesan",
  },
];

export function getBlogAuthor(slug: string) {
  return blogAuthors.find((author) => author.slug === slug);
}
