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

        <div className="prose prose-lg dark:prose-invert max-w-none font-inter space-y-8">
          <section>
            <h2 className="font-playfair text-2xl mb-4">Dataansvarlig</h2>
            <p className="text-muted-foreground">
              Hair by Gashi er dataansvarlig for behandlingen af de personoplysninger, som vi modtager om dig.
            </p>
            <address className="not-italic text-muted-foreground mt-4 space-y-1">
              <p><strong>Hair by Gashi</strong></p>
              <p>Boulevarden 22, 9000 Aalborg</p>
              <p>Email: Hairbygranit@hotmail.com</p>
              <p>Telefon: 26 23 22 49</p>
              <p>CVR: 43421212</p>
            </address>
          </section>

          <section>
            <h2 className="font-playfair text-2xl mb-4">Hvilke data indsamler vi?</h2>
            <p className="text-muted-foreground">Vi indsamler følgende personoplysninger:</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Navn og kontaktoplysninger (email, telefon)</li>
              <li>Beskeder sendt via kontaktformular</li>
              <li>Bookingdata gennem Planway (tid, behandling, noter)</li>
              <li>Analyticsdata (anonymiseret, kun ved samtykke)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl mb-4">Planway som databehandler</h2>
            <p className="text-muted-foreground">
              Vi bruger Planway til håndtering af tidsbestillinger. Planway fungerer som databehandler og opbevarer 
              dine bookingoplysninger sikkert i overensstemmelse med gældende lovgivning. Du kan læse mere om Planways 
              privatlivspolitik på deres website.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl mb-4">Formål med databehandling</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li><strong>Kundeservice:</strong> Besvarelse af henvendelser og kommunikation</li>
              <li><strong>Tidsbestilling:</strong> Administration af bookinger og påmindelser</li>
              <li><strong>Forbedring af website:</strong> Analyse af brugeradfærd (kun ved samtykke)</li>
              <li><strong>Markedsføring:</strong> Nyhedsbreve og tilbud (kun ved samtykke)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl mb-4">Retsgrundlag</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li><strong>Aftale:</strong> Behandling er nødvendig for at opfylde aftale om tidsbestilling</li>
              <li><strong>Legitim interesse:</strong> Forbedring af vores service og kommunikation</li>
              <li><strong>Samtykke:</strong> Cookies og markedsføring kræver dit aktive samtykke</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl mb-4">Opbevaringsperiode</h2>
            <p className="text-muted-foreground">
              Vi opbevarer dine personoplysninger så længe det er nødvendigt for at opfylde formålet:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Kontakthenvendelser: Op til 2 år</li>
              <li>Bookinghistorik: Op til 5 år (lovkrav)</li>
              <li>Regnskabsdata: 5 år efter regnskabsårets afslutning</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl mb-4">Deling af data</h2>
            <p className="text-muted-foreground">Vi deler kun dine data med følgende tredjeparter:</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li><strong>ShaqX:</strong> Webudvikling og teknisk databehandling (<a href="https://shaqx.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">shaqx.com</a>)</li>
              <li><strong>Planway:</strong> Håndtering af bookinger (databehandler)</li>
              <li><strong>Netlify:</strong> Hosting af website (databehandler)</li>
              <li><strong>Google Analytics:</strong> Statistik (kun ved samtykke)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl mb-4">Dine rettigheder</h2>
            <p className="text-muted-foreground">Du har følgende rettigheder i henhold til GDPR:</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li><strong>Indsigt:</strong> Ret til at se hvilke data vi har om dig</li>
              <li><strong>Berigtigelse:</strong> Ret til at få rettet forkerte oplysninger</li>
              <li><strong>Sletning:</strong> Ret til at få slettet dine data ("retten til at blive glemt")</li>
              <li><strong>Indsigelse:</strong> Ret til at gøre indsigelse mod behandling</li>
              <li><strong>Dataportabilitet:</strong> Ret til at modtage dine data i et struktureret format</li>
              <li><strong>Tilbagetrækning:</strong> Ret til at trække samtykke tilbage når som helst</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl mb-4">Kontakt vedrørende persondata</h2>
            <p className="text-muted-foreground">
              Ønsker du at udøve dine rettigheder eller har spørgsmål til vores behandling af persondata, 
              kan du kontakte os på:
            </p>
            <p className="text-muted-foreground mt-2">
              <strong>Email:</strong> Hairbygranit@hotmail.com
            </p>
            <p className="text-muted-foreground mt-4">
              Du har også ret til at klage til Datatilsynet, hvis du er utilfreds med vores behandling af dine personoplysninger.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <p className="text-muted-foreground">
              Se også vores <Link to="/cookiepolitik" className="text-gold hover:underline">cookiepolitik</Link> for 
              information om brug af cookies.
            </p>
          </section>

          <p className="text-sm text-muted-foreground pt-4">
            Sidst opdateret: December 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
