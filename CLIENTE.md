# CuomoEdil — versione DEMO

Fonte dati: scheda Google Maps pubblica, verificata il 20/11/2026.

## Dati inseriti
- CUOMOEDIL di Davide Cuomo — Via della Maiella 1, 80144 Napoli
- Telefono e WhatsApp: +39 338 594 8381
- Orari: lun–ven 7:00–17:00
- Valutazione Google: 4,9 su 31 recensioni (con data di verifica)
- 3 estratti di recensioni Google, senza nome del cliente ("Cliente privato")
- Servizi ricavati dalle foto della scheda: appartamenti, facciate e condomini, impianti idrici, cartongesso e controsoffitti

## Da ottenere dal titolare prima della produzione
1. Conferma dei servizi offerti e dei testi (poi `contentReviewed: true`)
2. Foto dei lavori autorizzate (le 28 foto della scheda Google sono un ottimo punto di partenza)
3. Logo in buona qualità (sul furgone c'è il marchio CUOMOEDIL)
4. Partita IVA, email, conferma che il cellulare usa WhatsApp
5. Privacy e Cookie Policy
6. Dominio

Poi: `NEXT_PUBLIC_SITE_MODE=production` e `npm run validate:prod` con 0 errori.

## Pubblicazione demo (GitHub Pages)
- Sito: https://gsfglobal.github.io/cuomoedil-demo/
- Branch `main` = sorgente, branch `gh-pages` = sito statico generato.
- Aggiornare: `STATIC_EXPORT=1 NEXT_PUBLIC_BASE_PATH=/cuomoedil-demo NEXT_PUBLIC_SITE_URL=https://gsfglobal.github.io/cuomoedil-demo npm run build:pages`, poi pubblicare la cartella `out/` sul branch `gh-pages` (con file `.nojekyll`).

## Foto (aggiornamento 20/11/2026)
Inserite foto di repertorio da Pexels (vedi CREDITI-FOTO.md), etichettate "Foto di repertorio". Sezione prima/dopo disattivata finché non ci sono foto reali dello stesso lavoro.
