
export type PhotoAnnotation = {
  id: string;
  x: number;
  y: number;
  title: string;
  detail: string;
  category?: string;
};

export type AnnotatedPhoto = {
  image: string;
  alt?: string;
  annotations: PhotoAnnotation[];
};

export const photoAnnotationsBySlug: Record<string, AnnotatedPhoto[]> = {
  "ian-armata-proof-of-existence": [
    {
      image: "/images/1DC793DA-8D65-467B-AC83-1AB4D2BC77E9-modified.jpeg",
      alt: "Photograph featured in Armata Visuals: Proof of Existence",
      annotations: [
        {
          id: "your-first-hotspot",
          x: 50,
          y: 40,
          title: "Behind the photograph",
          detail: "Add a verified note about this photograph here.",
          category: "Photographer's notes"
        }
      ]
    }
  ]
};

