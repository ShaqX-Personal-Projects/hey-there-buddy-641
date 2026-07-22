Plan: Integrer Planway booking-widget som iframe på `/booking`

### Baggrund
Brugeren ønsker at indlejre Planway booking-systemet direkte på hjemmesiden i stedet for kun at linke til det via en knap. Den nuværende `Booking.tsx` viser en CTA-knap til `https://hair-by-gashi.planway.com/`.

### Mål
- Indlejre Planway direkte på booking-siden i en responsiv iframe.
- Bevare luksus-looket og sikre en jævn visuel integration.
- Gøre det brugervenligt på både desktop og mobil.
- Respektere den eksisterende cookie-samtykkestruktur.

### Ændringer

1. **Opdater `src/pages/Booking.tsx`**
   - Erstat eller suppler CTA-knappen med en iframe der peger på `https://hair-by-gashi.planway.com`.
   - iframe-egenskaber: `width="100%"`, `height="1100"`, `frameBorder="0"`, `loading="lazy"`, `title="Book tid hos Hair by Gashi"`.
   - Indpak iframe i en stilfuld container med guld-accent border og passende padding, der matcher sidens øvrige kort.
   - Tilføj en loading state (f.eks. spinner eller tekst) indtil iframe indlæses.
   - Sørg for responsiv højde: desktop 1100px, mobil 700–900px via Tailwind breakpoints.

2. **Opdater tekstindholdet i intro-sektionen**
   - Juster introteksten, så brugeren ved at booking-formularen kan udfyldes direkte nedenfor.
   - Bevar linket til privatlivspolitikken i nærheden af formularen.

3. **Cookie-samtykkeovervejelse**
   - Planway er en nødvendig tredjepartsintegration for booking-funktionaliteten.
   - Iframe indlæses som standard uden ekstra samtykke, da booking er en kernefunktion — men det noteres i dokumentation/kommentar, så fremtidige cookie-revisioner er bevidste om det.

4. **Responsivitet & performance**
   - Containeren får `max-w-5xl` for at undgå at iframe bliver for bred på store skærme.
   - Højde tilpasses med Tailwind: `h-[700px] md:h-[1000px] lg:h-[1100px]`.
   - Tilføj `loading="lazy"` så iframe først indlæses når den nærmer sig viewport.

### Tekniske detaljer
- Ingen nye dependencies.
- Ingen backend-ændringer.
- Planway iframe kører sandboxet fra ekstern domæne, så vi kan ikke style indholdet inde i iframe, men containeren og overgangen tilpasses.

### Resultat
Booking-siden får en integreret, responsiv Planway-widget, så brugerne kan booke tid uden at forlade hjemmesiden.