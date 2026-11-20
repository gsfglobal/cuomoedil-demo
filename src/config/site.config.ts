import type { SiteConfigInput } from "./schema";

/**
 * ============================================================
 *  CLIENTE: CUOMOEDIL di Davide Cuomo — Napoli
 *  Fonte dati: scheda Google Maps pubblica (verificata il 20/11/2026)
 *  https://maps.google.com/?cid=18404608706227842765
 *
 *  Stato: DEMO (anteprima da mostrare al titolare prima dell'acquisto).
 *  Foto: di repertorio (Pexels, licenza gratuita) — NON sono lavori di CuomoEdil.
 *  Prima della produzione: foto autorizzate, testi confermati,
 *  P.IVA, policy, conferma che il cellulare è attivo su WhatsApp.
 * ============================================================
 */
export const siteConfig = {
  mode: "demo",
  siteUrl: "https://cuomoedil-demo.vercel.app",
  locale: "it_IT",

  company: {
    name: "CuomoEdil",
    legalName: "CUOMOEDIL di Davide Cuomo",
    tagline: "Impresa edile a Napoli",
    description:
      "Impresa edile a Napoli guidata dal titolare Davide Cuomo: ristrutturazioni di appartamenti, lavori in condominio e facciate, impianti idrici, cartongesso e controsoffitti.",
    city: "Napoli",
    province: "NA",
    region: "Campania",
    serviceAreas: ["Napoli", "Provincia di Napoli"],
    vatNumber: "",
    stats: { verified: false, yearsExperience: null, projectsCompleted: null },
  },

  contact: {
    phone: "+39 338 594 8381",
    // Stesso cellulare della scheda Google: confermare con il titolare che è attivo su WhatsApp.
    whatsapp: "+39 338 594 8381",
    whatsappDefaultMessage: "Buongiorno, vorrei informazioni per dei lavori edili.",
    email: "",
    address: { street: "Via della Maiella, 1", postalCode: "80144", city: "Napoli", province: "NA", country: "IT" },
    openingHours: ["Lunedì – Venerdì: 7:00 – 17:00", "Sabato e domenica: chiuso"],
    mapsUrl: "https://maps.google.com/?cid=18404608706227842765",
  },

  branding: {
    logo: "",
    logoLight: "",
    favicon: "",
    primaryColor: "#161616",
    accentColor: "#B39770",
    backgroundColor: "#F5F2EC",
    mutedColor: "#746D63",
  },

  hero: {
    eyebrow: "Impresa edile · Napoli",
    title: "Non ristrutturiamo solo case.",
    subtitle: "Trasformiamo il modo di viverle.",
    description:
      "Appartamenti, condomini e facciate a Napoli: lavori eseguiti con materiali di qualità e un titolare che segue personalmente ogni cantiere.",
    image: { src: "/images/foto/hero.webp", alt: "Foto di repertorio: open space ristrutturato con parquet e tagli di luce LED", demo: true },
    imageMobile: { src: "/images/foto/hero-mobile.webp", alt: "Foto di repertorio: open space ristrutturato con parquet e tagli di luce LED", demo: true },
    video: "",
    ctaPrimary: "Richiedi un preventivo",
    ctaSecondary: "Scopri i nostri lavori",
  },

  intro: {
    eyebrow: "CuomoEdil",
    title: "Ogni spazio ha un potenziale.\nNoi gli diamo forma.",
    paragraphs: [
      "Dall'appartamento da rinnovare alla facciata del condominio, ogni lavoro parte da un sopralluogo e da un preventivo chiaro.",
      "Il titolare, Davide Cuomo, segue direttamente i cantieri: un unico riferimento, dalla prima telefonata alla consegna.",
    ],
    image: { src: "/images/foto/intro.webp", alt: "Foto di repertorio: operaio al lavoro su una parete durante una ristrutturazione", demo: true },
  },

  about: {
    title: "Chi siamo",
    lead: "Un'impresa edile napoletana che lavora con serietà, materiali di qualità e parola data.",
    paragraphs: [
      "CuomoEdil è l'impresa di Davide Cuomo, con sede in Via della Maiella a Napoli. Ci occupiamo di ristrutturazioni di appartamenti, lavori in condominio, facciate e impianti idrici.",
      "Chi ci ha scelto racconta di lavori eseguiti a regola d'arte, prezzi corretti e un titolare presente, che risolve i problemi con pragmatismo.",
    ],
    image: { src: "/images/foto/chi-siamo.webp", alt: "Foto di repertorio: rasatura di una parete in un cantiere interno", demo: true },
    values: [
      { title: "Il titolare in cantiere", text: "Davide Cuomo segue personalmente i lavori ed è il tuo riferimento diretto.", icon: "message" },
      { title: "Materiali di qualità", text: "Scegliamo materiali affidabili, pensati per durare nel tempo.", icon: "shield" },
      { title: "Preventivi chiari", text: "Sopralluogo e preventivo dettagliato prima di iniziare.", icon: "clipboard" },
    ],
  },

  method: {
    title: "Come lavoriamo",
    intro: "Quattro passaggi semplici, per sapere sempre a che punto è il lavoro.",
    steps: [
      { title: "Primo contatto", description: "Chiamaci o scrivici su WhatsApp: ci racconti il lavoro da fare.", icon: "phone" },
      { title: "Sopralluogo e valutazione", description: "Veniamo sul posto, valutiamo lo stato dei luoghi e prepariamo il preventivo.", icon: "ruler" },
      { title: "Pianificazione e realizzazione", description: "Organizziamo il cantiere ed eseguiamo le lavorazioni con la massima cura.", icon: "hammer" },
      { title: "Consegna del lavoro", description: "Verifichiamo insieme il risultato e ti consegniamo gli ambienti finiti.", icon: "key" },
    ],
  },

  beforeAfter: {
    title: "Prima e dopo",
    intro: "Trascina il cursore per confrontare lo stato iniziale e il risultato finale.",
    items: [],
  },

  reviewsSummary: {
    rating: 4.9,
    count: 31,
    sourceName: "Google",
    url: "https://maps.google.com/?cid=18404608706227842765",
    checkedAt: "2026-11-20",
  },

  cta: {
    title: "Hai un lavoro in mente?\nIniziamo a realizzarlo.",
    text: "Raccontaci cosa desideri fare. Ti richiamiamo per fissare un sopralluogo.",
  },

  social: { instagram: "", facebook: "", linkedin: "", youtube: "", tiktok: "" },

  seo: {
    defaultTitle: "CuomoEdil — Impresa edile e ristrutturazioni a Napoli",
    titleTemplate: "%s | CuomoEdil Napoli",
    description:
      "CuomoEdil di Davide Cuomo: ristrutturazioni di appartamenti, facciate e lavori condominiali, impianti idrici e controsoffitti a Napoli.",
    keywords: ["impresa edile Napoli", "ristrutturazioni Napoli", "rifacimento facciate Napoli", "impianti idrici condominio Napoli"],
    businessType: "GeneralContractor",
  },

  legal: {
    privacyPolicyUrl: "",
    cookiePolicyUrl: "",
    privacySections: [],
    cookieSections: [],
    usesTrackingCookies: false,
  },

  features: {
    testimonials: true,
    beforeAfter: false, // da attivare con foto prima/dopo reali dello stesso lavoro
    threeD: false,
    quoteForm: true,
    floatingWhatsapp: true,
    mobileStickyCta: true,
  },

  threeD: { modelUrl: "", title: "", caption: "" },

  leads: { adapter: "whatsapp", endpointUrl: "" },
} satisfies SiteConfigInput;
