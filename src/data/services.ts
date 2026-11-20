import type { z } from "zod";
import type { serviceSchema } from "@/config/schema";

type ServiceInput = z.input<typeof serviceSchema>;

/**
 * Servizi di CuomoEdil ricavati dai lavori visibili nella scheda Google
 * (interni di appartamenti, facciate con ponteggi e piattaforme, impianti idrici
 * condominiali, controsoffitti con illuminazione LED).
 * contentReviewed: false → da confermare con Davide Cuomo prima della produzione.
 */
const img = (file: string, alt: string) => ({ src: `/images/demo/services/${file}.webp`, alt: `Immagine dimostrativa: ${alt}`, demo: true });

export const services: ServiceInput[] = [
  {
    slug: "ristrutturazione-appartamenti",
    title: "Ristrutturazione appartamenti",
    shortTitle: "Appartamenti",
    excerpt: "Rinnoviamo appartamenti a Napoli: demolizioni, impianti, pavimenti, rivestimenti e finiture.",
    heroTitle: "Ristrutturazione di appartamenti a Napoli",
    description: [
      "Ci occupiamo della ristrutturazione completa o parziale dell'appartamento: dalla demolizione delle vecchie finiture al rifacimento degli impianti, fino a pavimenti, rivestimenti e pitture.",
      "Il titolare segue direttamente il cantiere e coordina ogni lavorazione, così hai un solo riferimento per tutto il lavoro.",
    ],
    image: img("ristrutturazioni-appartamenti", "soggiorno luminoso con panca"),
    gallery: [img("ristrutturazioni-appartamenti-2", "dettaglio di un interno")],
    benefits: [
      { title: "Un solo riferimento", text: "Parli direttamente con il titolare, dal sopralluogo alla consegna." },
      { title: "Materiali di qualità", text: "Materiali scelti per durare, con posa a regola d'arte." },
      { title: "Preventivo chiaro", text: "Lavorazioni e costi definiti prima di iniziare." },
    ],
    faqs: [
      { question: "Fate anche lavori parziali?", answer: "Sì: possiamo intervenire su singoli ambienti o singole lavorazioni. Lo valutiamo insieme al sopralluogo." },
      { question: "Come si richiede un preventivo?", answer: "Chiamaci o scrivici su WhatsApp: fissiamo un sopralluogo e poi ti presentiamo il preventivo." },
    ],
    seo: {
      title: "Ristrutturazione appartamenti a Napoli",
      description: "Ristrutturazione di appartamenti a Napoli con CuomoEdil: impianti, pavimenti, rivestimenti e finiture, con il titolare in cantiere.",
    },
    enabled: true,
    contentReviewed: false,
  },
  {
    slug: "facciate-e-condomini",
    title: "Facciate e lavori condominiali",
    shortTitle: "Facciate e condomini",
    excerpt: "Rifacimento facciate, frontalini e lavori sulle parti comuni, con ponteggi e piattaforme aeree.",
    heroTitle: "Facciate e lavori in condominio a Napoli",
    description: [
      "Eseguiamo lavori sulle facciate e sulle parti comuni degli edifici: ripristino di intonaci e frontalini, tinteggiature esterne e interventi in quota.",
      "Lavoriamo con ponteggi e piattaforme aeree, organizzando il cantiere per ridurre i disagi ai condòmini.",
    ],
    image: img("ristrutturazioni-complete", "edificio con archi e luce naturale"),
    gallery: [img("ristrutturazioni-complete-2", "dettaglio architettonico")],
    benefits: [
      { title: "Lavori in quota", text: "Ponteggi e piattaforme aeree per intervenire in sicurezza." },
      { title: "Rispetto del condominio", text: "Cantiere organizzato per limitare i disagi ai residenti." },
      { title: "Riferimento per l'amministratore", text: "Un interlocutore unico per sopralluoghi, preventivi e avanzamento." },
    ],
    faqs: [],
    seo: {
      title: "Rifacimento facciate e lavori condominiali a Napoli",
      description: "Rifacimento facciate, frontalini e lavori sulle parti comuni a Napoli con ponteggi e piattaforme aeree. CuomoEdil di Davide Cuomo.",
    },
    enabled: true,
    contentReviewed: false,
  },
  {
    slug: "impianti-idrici",
    title: "Impianti idrici",
    shortTitle: "Impianti idrici",
    excerpt: "Rifacimento di colonne, distribuzione e batterie di contatori in condominio e in appartamento.",
    heroTitle: "Impianti idrici a Napoli",
    description: [
      "Realizziamo e rifacciamo impianti idrici in appartamento e in condominio, comprese le colonne di distribuzione e le batterie di contatori.",
      "Lavoriamo in modo ordinato, con tubazioni identificabili e facili da ispezionare nel tempo.",
    ],
    image: img("impianti-e-finiture-2", "dettaglio tecnico con linee e luce"),
    gallery: [],
    benefits: [
      { title: "Condominio e appartamento", text: "Dalle colonne comuni fino all'impianto di casa." },
      { title: "Lavoro ordinato", text: "Tubazioni organizzate e facili da ispezionare." },
      { title: "Intervento rapido", text: "Il titolare valuta direttamente il problema al sopralluogo." },
    ],
    faqs: [],
    seo: {
      title: "Impianti idrici e colonne condominiali a Napoli",
      description: "Rifacimento impianti idrici, colonne di distribuzione e batterie di contatori a Napoli, in condominio e in appartamento. CuomoEdil.",
    },
    enabled: true,
    contentReviewed: false,
  },
  {
    slug: "cartongesso-e-controsoffitti",
    title: "Cartongesso e controsoffitti",
    shortTitle: "Controsoffitti",
    excerpt: "Controsoffitti, pareti in cartongesso e tagli di luce LED integrati per interni moderni.",
    heroTitle: "Cartongesso e controsoffitti a Napoli",
    description: [
      "Realizziamo controsoffitti e pareti in cartongesso, anche con tagli di luce LED integrati, nicchie e velette.",
      "È il modo più rapido per rinnovare l'aspetto di un ambiente e nascondere impianti e tubazioni.",
    ],
    image: img("impianti-e-finiture", "controsoffitto con linea di luce"),
    gallery: [],
    benefits: [
      { title: "Luce integrata", text: "Tagli di luce LED progettati insieme al controsoffitto." },
      { title: "Impianti nascosti", text: "Cavi e tubazioni passano dentro il controsoffitto." },
      { title: "Finiture pulite", text: "Stuccatura e rasatura curate per un risultato uniforme." },
    ],
    faqs: [],
    seo: {
      title: "Cartongesso e controsoffitti con luci LED a Napoli",
      description: "Controsoffitti e pareti in cartongesso con tagli di luce LED a Napoli. Rinnova gli ambienti con CuomoEdil di Davide Cuomo.",
    },
    enabled: true,
    contentReviewed: false,
  },
];
