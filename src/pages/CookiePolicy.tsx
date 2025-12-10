import SectionHeading from "@/components/SectionHeading";
import { useSEO } from "@/hooks/useSEO";

const CookiePolicy = () => {
  useSEO("cookiePolicy");

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Juridisk"
          title="Cookiepolitik"
          subtitle="Hair by Gashi"
        />

        <div className="prose prose-lg dark:prose-invert max-w-none font-inter space-y-8">
          <section>
            <h2 className="font-playfair text-2xl mb-4">Hvad er cookies?</h2>
            <p className="text-muted-foreground">
              Cookies er små tekstfiler, som gemmes på din computer, tablet eller smartphone, når du besøger vores website. 
              Cookies hjælper os med at huske dine præferencer og forbedre din oplevelse på siden.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl mb-4">Typer af cookies vi bruger</h2>
            
            <h3 className="font-playfair text-xl mb-2 mt-6">Nødvendige cookies</h3>
            <p className="text-muted-foreground">
              Disse cookies er essentielle for at websitet kan fungere korrekt. De gemmer dine præferencer for sprog og tema 
              og kan ikke slås fra.
            </p>

            <h3 className="font-playfair text-xl mb-2 mt-6">Funktionelle cookies</h3>
            <p className="text-muted-foreground">
              Funktionelle cookies hjælper os med at huske dine valg og tilpasse din oplevelse. 
              De forbedrer funktionaliteten og personaliseringen af websitet.
            </p>

            <h3 className="font-playfair text-xl mb-2 mt-6">Statistiske cookies</h3>
            <p className="text-muted-foreground">
              Vi bruger Google Analytics til at indsamle anonyme statistikker om, hvordan besøgende bruger vores website. 
              Disse cookies aktiveres kun efter dit samtykke. De hjælper os med at forbedre websitets indhold og brugeroplevelse.
            </p>

            <h3 className="font-playfair text-xl mb-2 mt-6">Marketing cookies</h3>
            <p className="text-muted-foreground">
              Marketing cookies bruges til at spore besøgende på tværs af websites for at vise relevante annoncer. 
              Disse cookies aktiveres kun efter dit samtykke.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl mb-4">Lagringsperioder</h2>
            <p className="text-muted-foreground">
              Cookies har forskellige lagringsperioder afhængigt af deres formål:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li><strong>Session cookies:</strong> Slettes når du lukker browseren</li>
              <li><strong>Vedvarende cookies:</strong> Gemmes i op til 2 år</li>
              <li><strong>Google Analytics cookies:</strong> Op til 2 år</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl mb-4">Sådan trækker du samtykke tilbage</h2>
            <p className="text-muted-foreground">
              Du kan til enhver tid trække dit samtykke tilbage eller slette cookies via din browsers indstillinger:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li><strong>Chrome:</strong> Indstillinger → Privatliv og sikkerhed → Cookies</li>
              <li><strong>Firefox:</strong> Indstillinger → Privatliv og sikkerhed → Cookies og webstedsdata</li>
              <li><strong>Safari:</strong> Præferencer → Privatliv → Administrer webstedsdata</li>
              <li><strong>Edge:</strong> Indstillinger → Cookies og webstedstilladelser</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Bemærk at sletning af cookies kan påvirke din oplevelse på websitet.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl mb-4">Databehandlere</h2>
            <p className="text-muted-foreground">
              Følgende tredjeparter behandler data på vegne af Hair by Gashi:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li><strong>ShaqX:</strong> Webudvikling og teknisk databehandling (<a href="https://shaqx.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">shaqx.com</a>)</li>
              <li><strong>Netlify:</strong> Hosting af website</li>
              <li><strong>Google:</strong> Analytics (kun ved samtykke)</li>
            </ul>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="font-playfair text-2xl mb-4">Kontakt</h2>
            <p className="text-muted-foreground">
              Har du spørgsmål til vores cookiepolitik, er du velkommen til at kontakte os:
            </p>
            <address className="not-italic text-muted-foreground mt-4 space-y-1">
              <p><strong>Hair by Gashi</strong></p>
              <p>Boulevarden 22, 9000 Aalborg</p>
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

export default CookiePolicy;
