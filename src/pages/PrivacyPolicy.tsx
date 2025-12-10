import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { useSEO } from "@/hooks/useSEO";

const PrivacyPolicy = () => {
  useSEO("privacyPolicy");

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Juridisk"
          title="Privatlivspolitik"
          subtitle="Hair by Gashi"
        />

        <div className="prose prose-lg dark:prose-invert max-w-none font-inter space-y-10">
          
          {/* Dataansvarlig */}
          <section className="space-y-4">
            <h2 className="font-playfair text-2xl mb-4 text-foreground">Dataansvarlig</h2>
            <p className="text-muted-foreground leading-relaxed">
              Hair by Gashi er dataansvarlig for behandlingen af de personoplysninger, som vi modtager om dig.
            </p>
            <address className="not-italic text-muted-foreground space-y-1 bg-muted/30 p-4 rounded-lg border border-border">
              <p className="font-semibold text-foreground">Hair by Gashi</p>
              <p>Boulevarden 22, 9000 Aalborg</p>
              <p>Email: Hairbygranit@hotmail.com</p>
              <p>Telefon: 26 23 22 49</p>
              <p>CVR: 43421212</p>
            </address>
          </section>

          {/* Hvilke data indsamler vi */}
          <section className="space-y-4">
            <h2 className="font-playfair text-2xl mb-4 text-foreground">Hvilke data indsamler vi?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vi indsamler følgende personoplysninger i forbindelse med vores services:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
              <li>Navn og kontaktoplysninger (email, telefon)</li>
              <li>Beskeder sendt via kontaktformular</li>
              <li>Bookingdata gennem Planway (tid, behandling, noter)</li>
              <li>Analyticsdata (anonymiseret, kun ved samtykke)</li>
            </ul>
          </section>

          {/* Databehandlere - NY DEDIKERET SEKTION */}
          <section className="space-y-6 bg-muted/20 p-6 rounded-xl border border-border">
            <h2 className="font-playfair text-2xl text-foreground">Databehandlere</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vi samarbejder med følgende databehandlere, som behandler personoplysninger på vegne af Hair by Gashi:
            </p>

            {/* ShaqX */}
            <div className="space-y-2 border-l-2 border-gold/50 pl-4">
              <h3 className="font-semibold text-foreground">ShaqX — Webudvikling og teknisk drift</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                ShaqX vedligeholder websitet, implementerer SEO-løsninger og håndterer teknisk opsætning af cookies. 
                ShaqX har kun adgang til nødvendige tekniske data og behandler alle oplysninger efter instruks fra Hair by Gashi.
              </p>
              <p className="text-muted-foreground text-sm">
                <a href="https://shaqx.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">shaqx.com</a>
              </p>
            </div>

            {/* Planway */}
            <div className="space-y-2 border-l-2 border-gold/50 pl-4">
              <h3 className="font-semibold text-foreground">Planway — Booking</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Planway håndterer alle tidsbestillinger og bookingdata. Planway fungerer som databehandler og 
                opbevarer dine bookingoplysninger sikkert i overensstemmelse med gældende lovgivning.
              </p>
            </div>

            {/* Netlify */}
            <div className="space-y-2 border-l-2 border-gold/50 pl-4">
              <h3 className="font-semibold text-foreground">Netlify — Hosting</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Netlify hoster websitet og håndterer nødvendige driftsdata for at sikre stabil og sikker drift af hjemmesiden.
              </p>
            </div>

            {/* Google Analytics */}
            <div className="space-y-2 border-l-2 border-gold/50 pl-4">
              <h3 className="font-semibold text-foreground">Google Analytics — Statistik</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Google Analytics bruges til at indsamle anonymiserede statistikker om websitebesøg. 
                Denne cookie aktiveres kun efter dit aktive samtykke.
              </p>
            </div>

            {/* Juridisk erklæring */}
            <div className="bg-background/50 p-4 rounded-lg border border-gold/20 mt-4">
              <p className="text-muted-foreground text-sm italic">
                Der er indgået databehandleraftaler med alle databehandlere i overensstemmelse med GDPR.
              </p>
            </div>
          </section>

          {/* Formål med databehandling */}
          <section className="space-y-4">
            <h2 className="font-playfair text-2xl mb-4 text-foreground">Formål med databehandling</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-gold font-semibold">Kundeservice:</span>
                <span>Besvarelse af henvendelser og kommunikation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-semibold">Tidsbestilling:</span>
                <span>Administration af bookinger og påmindelser</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-semibold">Forbedring:</span>
                <span>Analyse af brugeradfærd (kun ved samtykke)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-semibold">Markedsføring:</span>
                <span>Nyhedsbreve og tilbud (kun ved samtykke)</span>
              </li>
            </ul>
          </section>

          {/* Retsgrundlag */}
          <section className="space-y-4">
            <h2 className="font-playfair text-2xl mb-4 text-foreground">Retsgrundlag</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-gold font-semibold">Aftale:</span>
                <span>Behandling er nødvendig for at opfylde aftale om tidsbestilling</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-semibold">Legitim interesse:</span>
                <span>Forbedring af vores service og kommunikation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-semibold">Samtykke:</span>
                <span>Cookies og markedsføring kræver dit aktive samtykke</span>
              </li>
            </ul>
          </section>

          {/* Opbevaringsperiode */}
          <section className="space-y-4">
            <h2 className="font-playfair text-2xl mb-4 text-foreground">Opbevaringsperiode</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vi opbevarer dine personoplysninger så længe det er nødvendigt for at opfylde formålet:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
              <li>Kontakthenvendelser: Op til 2 år</li>
              <li>Bookinghistorik: Op til 5 år (lovkrav)</li>
              <li>Regnskabsdata: 5 år efter regnskabsårets afslutning</li>
            </ul>
          </section>

          {/* Dine rettigheder */}
          <section className="space-y-4">
            <h2 className="font-playfair text-2xl mb-4 text-foreground">Dine rettigheder</h2>
            <p className="text-muted-foreground leading-relaxed">
              Du har følgende rettigheder i henhold til GDPR:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="bg-muted/30 p-3 rounded-lg border border-border">
                <span className="font-semibold text-foreground block">Indsigt</span>
                <span className="text-muted-foreground text-sm">Ret til at se hvilke data vi har om dig</span>
              </div>
              <div className="bg-muted/30 p-3 rounded-lg border border-border">
                <span className="font-semibold text-foreground block">Berigtigelse</span>
                <span className="text-muted-foreground text-sm">Ret til at få rettet forkerte oplysninger</span>
              </div>
              <div className="bg-muted/30 p-3 rounded-lg border border-border">
                <span className="font-semibold text-foreground block">Sletning</span>
                <span className="text-muted-foreground text-sm">Ret til at få slettet dine data</span>
              </div>
              <div className="bg-muted/30 p-3 rounded-lg border border-border">
                <span className="font-semibold text-foreground block">Indsigelse</span>
                <span className="text-muted-foreground text-sm">Ret til at gøre indsigelse mod behandling</span>
              </div>
              <div className="bg-muted/30 p-3 rounded-lg border border-border">
                <span className="font-semibold text-foreground block">Dataportabilitet</span>
                <span className="text-muted-foreground text-sm">Ret til at modtage dine data i struktureret format</span>
              </div>
              <div className="bg-muted/30 p-3 rounded-lg border border-border">
                <span className="font-semibold text-foreground block">Tilbagetrækning</span>
                <span className="text-muted-foreground text-sm">Ret til at trække samtykke tilbage når som helst</span>
              </div>
            </div>
          </section>

          {/* Kontakt vedrørende persondata */}
          <section className="space-y-4">
            <h2 className="font-playfair text-2xl mb-4 text-foreground">Kontakt vedrørende persondata</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ønsker du at udøve dine rettigheder eller har spørgsmål til vores behandling af persondata, 
              kan du kontakte os på:
            </p>
            <p className="text-muted-foreground">
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:Hairbygranit@hotmail.com" className="text-gold hover:underline">
                Hairbygranit@hotmail.com
              </a>
            </p>
            <p className="text-muted-foreground text-sm mt-4">
              Du har også ret til at klage til Datatilsynet, hvis du er utilfreds med vores behandling af dine personoplysninger.
            </p>
          </section>

          {/* Link til cookiepolitik */}
          <section className="border-t border-border pt-8">
            <p className="text-muted-foreground">
              Se også vores{" "}
              <Link to="/cookiepolitik" className="text-gold hover:underline">
                cookiepolitik
              </Link>{" "}
              for information om brug af cookies.
            </p>
          </section>

          {/* Timestamp */}
          <p className="text-sm text-muted-foreground pt-4 border-t border-border">
            Sidst opdateret: December 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
