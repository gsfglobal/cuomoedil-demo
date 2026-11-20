import type { z } from "zod";
import type { projectSchema } from "@/config/schema";

type ProjectInput = z.input<typeof projectSchema>;

/**
 * Progetti DIMOSTRATIVI per l'anteprima: nessuno è un lavoro reale di CuomoEdil.
 * Da sostituire con i lavori reali (foto autorizzate dal titolare).
 */
const pic = (slug: string, file: string, alt: string) => ({ src: `/images/demo/projects/${slug}/${file}.webp`, alt: `Immagine dimostrativa: ${alt}`, demo: true });

const demo = (slug: string, imgSlug: string, title: string, service: string, excerpt: string): ProjectInput => ({
  slug,
  title,
  service,
  city: "Napoli",
  year: null,
  excerpt,
  description: [
    "Progetto dimostrativo: questa pagina mostra come verrà presentato un lavoro reale di CuomoEdil, con foto, descrizione e dettagli dell'intervento.",
  ],
  cover: pic(imgSlug, "cover", `${title.toLowerCase()}, vista principale`),
  gallery: [pic(imgSlug, "02", `${title.toLowerCase()}, vista secondaria`), pic(imgSlug, "03", `${title.toLowerCase()}, dettaglio`)],
  details: [{ label: "Stato", value: "Esempio" }],
  beforeAfter: null,
  featured: true,
  demo: true,
});

export const projects: ProjectInput[] = [
  demo("appartamento-zona-giorno", "appartamento-chiaia", "Appartamento, zona giorno", "ristrutturazione-appartamenti", "Esempio di presentazione di una ristrutturazione di appartamento."),
  demo("facciata-condominio", "villa-capri", "Facciata condominiale", "facciate-e-condomini", "Esempio di presentazione di un intervento su facciata."),
  demo("controsoffitto-led", "loft-bagnoli", "Controsoffitto con luci LED", "cartongesso-e-controsoffitti", "Esempio di presentazione di un controsoffitto con tagli di luce."),
  demo("bagno-appartamento", "bagno-vomero", "Bagno in appartamento", "ristrutturazione-appartamenti", "Esempio di presentazione di un bagno rinnovato."),
];
