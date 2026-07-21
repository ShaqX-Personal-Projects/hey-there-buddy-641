# Team-sektion: nye medarbejdere + opdateret Granit-portræt

## Beslutninger (bekræftet)
- **Kommer Snart**-kortet **beholdes** (5 kort i alt).
- Mikkel og Cecilie får `/placeholder.svg` indtil rigtige billeder uploades.
- Bio, rolle og specialer for de nye foreslås neutralt i brandets tone.

## Ændringer

### 1. Nye portrætbilleder
Kopier de to uploadede billeder til `public/team/`:
- `DSC02053.jpg` → `public/team/granit.jpg` (Granit, med skæg)
- `DSC02238.jpg` → `public/team/erjon.jpg` (Erjon, sort t-shirt)

### 2. `src/i18n/dictionaries.ts` — tilføj tre nye medlemmer (DA + EN)
Under `team.members` tilføjes `mikkel`, `cecilie`, `erjon` ved siden af eksisterende `gashi` og `comingSoon`.

Foreslået neutralt indhold (samme struktur begge sprog):

- **Mikkel** — *Stylist* — "Præcis håndværker med skarpt blik for form og linje. Mikkel forener klassisk teknik med moderne udtryk." — Specialer: Herreklip, Skinfade, Skæg, Klassisk barbering.
- **Cecilie** — *Colorist & Stylist* — "Farvespecialist med sans for detalje. Cecilie skaber naturlige, tonede resultater tilpasset den enkelte." — Specialer: Balayage, Babylights, Farvekorrektion, Dameklip.
- **Erjon** — *Stylist* — "Roligt, sikkert håndværk. Erjon leverer skarpe klip og rene overgange i et diskret tempo." — Specialer: Skinfade, Herreklip, Skægtrimning, Design.

(EN-udgaven bruger tilsvarende oversættelser — Barber/Colorist termer.)

### 3. `src/data/team.ts` — udvid til 5 medlemmer
Skift datamodel til `{ key, portrait }[]` så navn/rolle/bio/specialer altid trækkes fra dict:

```ts
export const teamPageData = {
  members: [
    { key: "gashi",      portrait: "/team/granit.jpg" },
    { key: "erjon",      portrait: "/team/erjon.jpg" },
    { key: "mikkel",     portrait: "/placeholder.svg" },
    { key: "cecilie",    portrait: "/placeholder.svg" },
    { key: "comingSoon", portrait: "/placeholder.svg" },
  ],
  joinTeam: { /* uændret — bruger dict */ },
};
```

### 4. `src/pages/Team.tsx` — refaktorér til map
I stedet for to hårdkodede kort renderes alle 5 via `teamPageData.members.map(...)` og opslag i `dict.team.members[member.key]`. Grid opdateres til `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` så 5 kort ligger pænt (2 rækker: 3 + 2 på desktop, 2+2+1 på tablet, stack på mobil). Alle billeder beholder `bw-image`, `loading="lazy"`, `decoding="async"` og aspect-ratio `3/4`.

## Uden for scope
- Hero-video, Granits eksisterende beskrivelse/specialer bevares (kun portrættet skiftes).
- Ingen ændringer til andre sider eller styling-tokens.
