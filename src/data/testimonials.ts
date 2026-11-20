import type { z } from "zod";
import type { testimonialSchema } from "@/config/schema";

/**
 * Estratti di recensioni pubbliche da Google Maps (verificate il 20/11/2026).
 * Nomi non mostrati finché i clienti non autorizzano (authorized: false → "Cliente privato").
 * Data: Google indica "2 anni fa", quindi la data precisa non è riportata.
 */
const source = { name: "Google", url: "https://maps.google.com/?cid=18404608706227842765" };

export const testimonials: z.input<typeof testimonialSchema>[] = [
  {
    author: "Giuseppe C.",
    authorized: false,
    text: "Ho fatto eseguire più lavori alla ditta Cuomo sempre con ottimi risultati e mai una incomprensione. Ditta molto seria, ma sopratutto chi la gestisce un uomo di altri tempi con una parola di ferro.",
    date: "",
    rating: 5,
    source,
  },
  {
    author: "Berny N.",
    authorized: false,
    text: "Consiglio di affidarsi alla Ditta Cuomo Edil per la professionalità e la qualità dei materiali che utilizzano, Davide è sempre pronto ad intervenire con la massima serietà.",
    date: "",
    rating: 5,
    source,
  },
  {
    author: "Gennaro N.",
    authorized: false,
    text: "Il titolare è una persona competente e risolve tutte le situazioni con pragmatismo e competenza. Consiglio vivamente un preventivo presso di loro e poi capirete.",
    date: "",
    rating: 5,
    source,
  },
];
