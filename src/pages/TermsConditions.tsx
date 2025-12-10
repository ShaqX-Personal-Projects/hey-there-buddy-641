import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { useSEO } from "@/hooks/useSEO";

const TermsConditions = () => {
  useSEO("termsConditions");

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Juridisk"
          title="Handelsbetingelser"
          subtitle="Hair by Gashi"
        />

        <div className="prose prose-lg dark:prose-invert max-w-none font-inter space-y-8">
          <section>
            <h2 className="font-playfair text-2xl mb-4">Booking</h2>
            <p className="text-muted-foreground">
              Alle bookinger hos Hair by Gashi sker via vores online bookingsystem Planway. 
              Ved booking accepterer du disse handelsbetingelser.
            </p>
            <p className="text-muted-foreground mt-2">
              Du modtager en bekræftelse på din booking via email og/eller SMS.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl mb-4">Afbudsregler</h2>
            <p className="text-muted-foreground">
              Afbud skal ske senest 24 timer før din aftalte tid. Ved afbud senere end 24 timer 
              eller udeblivelse forbeholder vi os retten til at opkræve fuld pris for den bookede behandling.
            </p>
            <p className="text-muted-foreground mt-2">
              Afbud kan ske via Planway, telefon eller email.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl mb-4">Betaling</h2>
            <p className="text-muted-foreground">Vi accepterer følgende betalingsmetoder:</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>MobilePay</li>
              <li>Betalingskort (Visa, Mastercard, Dankort)</li>
              <li>Kontant betaling</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Betaling sker i salonen efter endt behandling.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl mb-4">Priser</h2>
            <p className="text-muted-foreground">
              Alle priser er angivet i danske kroner (DKK) og er inklusive moms (25%).
            </p>
            <p className="text-muted-foreground mt-2">
              Priserne på vores website er vejledende. Den endelige pris aftales ved konsultation 
              og kan variere afhængigt af hårlængde, hårmængde og behandlingens kompleksitet.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl mb-4">Reklamation</h2>
            <p className="text-muted-foreground">
              Er du utilfreds med en behandling, bedes du kontakte os inden 48 timer efter besøget. 
              Vi tilbyder rettelse af behandlingen uden beregning, hvis reklamationen er berettiget.
            </p>
            <p className="text-muted-foreground mt-2">
              Reklamation skal ske via telefon eller email til Hairbygranit@hotmail.com.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl mb-4">Ansvarsfraskrivelse</h2>
            <p className="text-muted-foreground">
              Hair by Gashi er ikke ansvarlig for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Indirekte tab eller følgeskader</li>
              <li>Allergiske reaktioner, hvis kunden ikke har oplyst om kendte allergier</li>
              <li>Skader eller utilfredshed, hvis kunden har tilbageholdt nødvendige oplysninger om 
                  tidligere behandlinger, hårskader eller sundhedstilstand</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Vi anbefaler altid en konsultation inden farvebehandlinger, og vi udfører gerne en allergitest.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl mb-4">Persondata</h2>
            <p className="text-muted-foreground">
              Dine personoplysninger behandles i overensstemmelse med vores{" "}
              <Link to="/privatlivspolitik" className="text-gold hover:underline">privatlivspolitik</Link>.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="font-playfair text-2xl mb-4">Kontakt</h2>
            <address className="not-italic text-muted-foreground space-y-1">
              <p><strong>Hair by Gashi</strong></p>
              <p>Boulevarden 22, 9000 Aalborg</p>
              <p>Telefon: 26 23 22 49</p>
              <p>Email: Hairbygranit@hotmail.com</p>
              <p>CVR: 43421212</p>
            </address>
          </section>

          <p className="text-sm text-muted-foreground pt-4">
            Sidst opdateret: December 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
