import { useEffect } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Logo } from "./components/ui/logo";
import { Code2, Lightbulb, Rocket, Mail, MapPin, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import redHawkLogo from "./assets/redhawk.png";
import fzLogo from "./assets/fz.png";

type RouteKey = "/" | "/ochrana-osobnych-udajov" | "/cookies" | "/obchodne-podmienky";

type Metadata = {
  title: string;
  description: string;
  canonicalPath: RouteKey;
};

const SITE_URL = "https://viable.sk";

const metadataByRoute: Record<RouteKey, Metadata> = {
  "/": {
    title: "viable — from idea to viable product",
    description: "viable, s.r.o. poskytuje IT služby, softvérové riešenia a technické konzultácie pre firmy a podnikateľov.",
    canonicalPath: "/",
  },
  "/ochrana-osobnych-udajov": {
    title: "Ochrana osobných údajov | viable",
    description: "Zásady ochrany osobných údajov spoločnosti viable, s.r.o. pre prezentačný web viable.sk a B2B komunikáciu.",
    canonicalPath: "/ochrana-osobnych-udajov",
  },
  "/cookies": {
    title: "Cookies | viable",
    description: "Zásady používania cookies na webovom sídle viable.sk vrátane informácie o nepoužívaní analytických a marketingových cookies.",
    canonicalPath: "/cookies",
  },
  "/obchodne-podmienky": {
    title: "Obchodné podmienky | viable",
    description: "B2B obchodné podmienky spoločnosti viable, s.r.o. pre IT služby, softvérové služby a odborné konzultácie.",
    canonicalPath: "/obchodne-podmienky",
  },
};

const legalLinks = [
  { href: "/ochrana-osobnych-udajov", label: "Ochrana osobných údajov" },
  { href: "/cookies", label: "Cookies" },
  { href: "/obchodne-podmienky", label: "Obchodné podmienky" },
];

function normalizePath(pathname: string): RouteKey | null {
  const path = pathname.replace(/\/$/, "") || "/";
  if (path in metadataByRoute) {
    return path as RouteKey;
  }

  return null;
}

function useMetadata(route: RouteKey | null) {
  useEffect(() => {
    const metadata = metadataByRoute[route ?? "/"];
    document.title = metadata.title;

    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    description.content = metadata.description;

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}${metadata.canonicalPath === "/" ? "" : metadata.canonicalPath}`;

    let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = "index, follow";
  }, [route]);
}

function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2" aria-label="viable homepage">
          <Logo width={24} />
          <span className="text-2xl font-bold text-gray-900">viable</span>
        </a>
        <div className="hidden md:flex gap-8">
          <a href="/#services" className="text-gray-600 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-md">Services</a>
          <a href="/#projects" className="text-gray-600 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-md">Projects</a>
          <a href="/#about" className="text-gray-600 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-md">About</a>
          <a href="/#contact" className="text-gray-600 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-md">Contact</a>
        </div>
        <div />
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Logo width={24} />
          <span className="text-xl font-bold text-white">viable, s.r.o.</span>
        </div>
        <p className="mb-6">Custom Software Development Solutions</p>
        <nav aria-label="Právne dokumenty" className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          {legalLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-sm">© 2026 Viable. All rights reserved.</p>
      </div>
    </footer>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function LegalLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <PageShell>
      <main className="pt-32 pb-20 px-6">
        <article className="container mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-3">Platné od: 20. 8. 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">{title}</h1>
          <div className="space-y-10 text-gray-700 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-blue-600 [&_a:hover]:text-blue-700 [&_a]:underline">
            {children}
          </div>
        </article>
      </main>
    </PageShell>
  );
}

function OperatorBlock() {
  return (
    <address className="not-italic rounded-2xl bg-gray-50 p-6 text-gray-700">
      <strong className="block text-gray-900">viable, s.r.o.</strong>
      Suchoňova 5724/18<br />
      058 01 Poprad<br />
      Slovenská republika<br /><br />
      IČO: 55 134 963<br />
      DIČ: 2121880618<br />
      IČ DPH: SK2121880618<br />
      E-mail: <a href="mailto:info@viable.sk">info@viable.sk</a>
    </address>
  );
}

function PrivacyPage() {
  return (
    <LegalLayout title="Zásady ochrany osobných údajov">
      <section>
        <h2>1. Prevádzkovateľ</h2>
        <p>Prevádzkovateľom osobných údajov je spoločnosť:</p>
        <OperatorBlock />
      </section>
      <section>
        <h2>2. Charakter webového sídla</h2>
        <p>Webové sídlo viable.sk je prezentačným webom spoločnosti viable, s.r.o., ktorá poskytuje IT služby a konzultácie pre firmy a podnikateľov.</p>
        <p>Web nie je určený na vytváranie používateľských účtov, online objednávanie služieb, platby, odber newslettera ani komunikáciu cez kontaktný formulár.</p>
      </section>
      <section>
        <h2>3. Aké údaje web priamo získava</h2>
        <p>Webové sídlo viable.sk priamo nezískava osobné údaje prostredníctvom kontaktného formulára, registrácie, používateľského účtu, online objednávky, platobnej brány ani newslettera.</p>
        <p>Podľa aktuálneho technického nastavenia web nepoužíva analytické ani marketingové trackery.</p>
      </section>
      <section>
        <h2>4. Údaje zaslané e-mailom</h2>
        <p>Ak nás kontaktujete e-mailom, môžeme spracúvať údaje, ktoré nám dobrovoľne poskytnete, najmä meno, priezvisko, pracovnú pozíciu, obchodné kontaktné údaje, názov spoločnosti, obsah správy a ďalšie informácie potrebné na vybavenie komunikácie.</p>
        <p>Tieto údaje spracúvame na účely komunikácie, prípravy ponuky, rokovania o zmluve, uzatvorenia a plnenia zmluvy, evidencie obchodnej komunikácie a ochrany právnych nárokov.</p>
      </section>
      <section>
        <h2>5. Právne základy spracúvania</h2>
        <ul>
          <li>predzmluvné rokovania a plnenie zmluvy, ak komunikácia smeruje k poskytnutiu služby alebo k plneniu dohodnutej spolupráce,</li>
          <li>oprávnený záujem na obchodnej komunikácii, evidencii požiadaviek a ochrane právnych nárokov,</li>
          <li>plnenie zákonných povinností, najmä účtovných, daňových a archivačných povinností, ak vzniknú.</li>
        </ul>
      </section>
      <section>
        <h2>6. Doba uchovávania</h2>
        <p>Osobné údaje uchovávame počas obdobia potrebného na vybavenie komunikácie, prípravu ponuky, rokovanie a plnenie zmluvy. Údaje potrebné na účtovné, daňové alebo právne účely uchovávame počas lehôt vyžadovaných príslušnými právnymi predpismi alebo počas doby nevyhnutnej na ochranu právnych nárokov.</p>
      </section>
      <section>
        <h2>7. Poskytovanie údajov tretím stranám</h2>
        <p>Osobné údaje môžu byť v nevyhnutnom rozsahu poskytované dôveryhodným dodávateľom a poradcom, napríklad poskytovateľom IT infraštruktúry, e-mailových služieb, účtovných alebo právnych služieb, ak je to potrebné na zabezpečenie prevádzky, komunikácie alebo plnenie zákonných povinností.</p>
        <p>Web je hostovaný s využitím infraštruktúry GitHub Pages a Cloudflare. Tieto služby môžu pri bežnej technickej prevádzke spracúvať technické údaje, napríklad IP adresy v serverových alebo bezpečnostných logoch.</p>
      </section>
      <section>
        <h2>8. Bezpečnosť</h2>
        <p>Prijímame primerané technické a organizačné opatrenia na ochranu osobných údajov pred neoprávneným prístupom, stratou, zneužitím alebo zverejnením.</p>
      </section>
      <section>
        <h2>9. Práva dotknutých osôb</h2>
        <p>Za podmienok ustanovených právnymi predpismi máte právo na prístup k osobným údajom, opravu, vymazanie, obmedzenie spracúvania, namietanie proti spracúvaniu, prenosnosť údajov a právo nebyť predmetom rozhodnutia založeného výlučne na automatizovanom spracúvaní vrátane profilovania.</p>
        <p>Svoje práva si môžete uplatniť e-mailom na <a href="mailto:info@viable.sk">info@viable.sk</a>.</p>
      </section>
      <section>
        <h2>10. Dozorný orgán</h2>
        <p>Ak sa domnievate, že spracúvanie osobných údajov je v rozpore s právnymi predpismi, máte právo podať sťažnosť dozornému orgánu, ktorým je Úrad na ochranu osobných údajov Slovenskej republiky.</p>
      </section>
    </LegalLayout>
  );
}

function CookiesPage() {
  return (
    <LegalLayout title="Zásady používania cookies">
      <section>
        <h2>1. Úvod</h2>
        <p>Webové sídlo viable.sk v súčasnosti nepoužíva cookies na analytické, marketingové ani reklamné sledovanie návštevníkov.</p>
      </section>
      <section>
        <h2>2. Aktuálne používanie cookies</h2>
        <p>Podľa aktuálneho technického nastavenia webové sídlo viable.sk nepoužíva analytické cookies, marketingové cookies, reklamné cookies, personalizačné cookies, sociálne cookies ani cookies na profilovanie návštevníkov.</p>
        <p>Web zároveň nepoužíva kontaktný formulár, používateľské účty, online objednávku, platobnú bránu ani newsletter.</p>
      </section>
      <section>
        <h2>3. Cookie lišta</h2>
        <p>Keďže aktuálny audit nepotvrdil používanie cookies alebo obdobných technológií, pri ktorých by bol potrebný súhlas používateľa, cookie lišta sa na webe nezobrazuje.</p>
      </section>
      <section>
        <h2>4. Technická prevádzka a tretie strany</h2>
        <p>Web je prevádzkovaný s využitím služieb GitHub Pages a Cloudflare. Tieto služby môžu pri technickej prevádzke a bezpečnosti spracúvať technické údaje, napríklad IP adresu alebo serverové logy. Tieto technické procesy neslúžia na marketingové profilovanie návštevníkov zo strany viable, s.r.o.</p>
      </section>
      <section>
        <h2>5. Zmeny zásad</h2>
        <p>Ak by sa v budúcnosti začali používať cookies alebo obdobné technológie, tieto zásady budú aktualizované a v prípade potreby bude zavedený príslušný mechanizmus na získanie súhlasu.</p>
      </section>
    </LegalLayout>
  );
}

function TermsPage() {
  return (
    <LegalLayout title="Obchodné podmienky">
      <section>
        <h2>1. Poskytovateľ</h2>
        <p>Poskytovateľom služieb je spoločnosť:</p>
        <OperatorBlock />
      </section>
      <section>
        <h2>2. Charakter služieb</h2>
        <p>Poskytovateľ poskytuje IT služby, softvérové služby, technické konzultácie, odborné konzultácie a ďalšie IT služby podľa individuálnej dohody so zákazníkom.</p>
      </section>
      <section>
        <h2>3. Zákazník</h2>
        <p>Tieto obchodné podmienky sú určené výhradne pre B2B vzťahy. Služby sú poskytované právnickým osobám, fyzickým osobám – podnikateľom a iným subjektom konajúcim v rámci podnikateľskej alebo profesionálnej činnosti.</p>
      </section>
      <section>
        <h2>4. Objednanie služieb</h2>
        <p>Služby sa neobjednávajú cez webové sídlo, online formulár, košík ani platobnú bránu. Zákazník kontaktuje poskytovateľa e-mailom na <a href="mailto:info@viable.sk">info@viable.sk</a>.</p>
        <p>Konkrétny rozsah, cena, termín, forma dodania a ďalšie podmienky služieb sa dohodnú individuálne medzi poskytovateľom a zákazníkom.</p>
      </section>
      <section>
        <h2>5. Cena a platobné podmienky</h2>
        <p>Cena služieb je určená individuálnou dohodou. Ak nie je dohodnuté inak, cena nezahŕňa náklady tretích strán, licencie, hosting, domény alebo iné externé služby potrebné na realizáciu projektu.</p>
        <p>Platobné podmienky, splatnosť faktúr a prípadné zálohy sú určené dohodou strán alebo uvedené v ponuke, objednávke či zmluve.</p>
      </section>
      <section>
        <h2>6. Poskytovanie služieb</h2>
        <p>Poskytovateľ poskytuje služby s odbornou starostlivosťou podľa dohodnutého rozsahu. Termíny plnenia závisia od včasného poskytnutia potrebnej súčinnosti, podkladov, prístupov a rozhodnutí zo strany zákazníka.</p>
      </section>
      <section>
        <h2>7. Zodpovednosť zákazníka</h2>
        <p>Zákazník zodpovedá za správnosť, úplnosť a zákonnosť podkladov, údajov, materiálov a prístupov, ktoré poskytne poskytovateľovi. Zákazník je povinný poskytovať potrebnú súčinnosť v primeraných lehotách.</p>
      </section>
      <section>
        <h2>8. Zodpovednosť poskytovateľa</h2>
        <p>Poskytovateľ zodpovedá za riadne poskytnutie služieb v dohodnutom rozsahu. Poskytovateľ nezodpovedá za škody spôsobené nesprávnymi alebo neúplnými podkladmi zákazníka, zásahmi tretích strán, výpadkami externých služieb alebo zmenami vykonanými mimo kontroly poskytovateľa.</p>
      </section>
      <section>
        <h2>9. Duševné vlastníctvo</h2>
        <p>Práva k výstupom služieb, licenčné podmienky a rozsah oprávnení zákazníka sa dohodnú individuálne. Ak nie je dohodnuté inak, zákazník nadobúda právo používať výstupy po riadnom zaplatení dohodnutej ceny.</p>
        <p>Poskytovateľ si ponecháva práva k svojim know-how, všeobecným postupom, nástrojom, knižniciam, šablónam a riešeniam, ktoré neboli vytvorené výlučne pre zákazníka.</p>
      </section>
      <section>
        <h2>10. Mlčanlivosť</h2>
        <p>Strany sa zaväzujú zachovávať mlčanlivosť o dôverných informáciách, ktoré si poskytnú v súvislosti s rokovaním alebo plnením spolupráce, pokiaľ nie je dohodnuté inak alebo povinnosť zverejnenia nevyplýva z právnych predpisov.</p>
      </section>
      <section>
        <h2>11. Ochrana osobných údajov</h2>
        <p>Informácie o spracúvaní osobných údajov sú uvedené v dokumente <a href="/ochrana-osobnych-udajov">Zásady ochrany osobných údajov</a>.</p>
      </section>
      <section>
        <h2>12. Reklamácie a vady služieb</h2>
        <p>Zákazník je povinný oznámiť vady služieb bez zbytočného odkladu po ich zistení a popísať ich tak, aby bolo možné vadu overiť a odstrániť. Poskytovateľ posúdi oznámenú vadu a navrhne primeraný spôsob riešenia, najmä opravu, doplnenie alebo inú dohodnutú nápravu.</p>
      </section>
      <section>
        <h2>13. Zrušenie alebo zmena objednávky</h2>
        <p>Zrušenie alebo zmena objednávky je možná na základe dohody strán. Ak už poskytovateľ začal poskytovať služby, zákazník je povinný uhradiť primeranú časť ceny za už vykonané práce a náklady vzniknuté v súvislosti s plnením.</p>
      </section>
      <section>
        <h2>14. Rozhodné právo</h2>
        <p>Právne vzťahy medzi poskytovateľom a zákazníkom sa riadia právnym poriadkom Slovenskej republiky.</p>
      </section>
      <section>
        <h2>15. Záverečné ustanovenia</h2>
        <p>Tieto obchodné podmienky sa použijú, ak sa strany nedohodnú inak v individuálnej ponuke, objednávke alebo zmluve. Individuálna dohoda strán má prednosť pred týmito obchodnými podmienkami.</p>
      </section>
    </LegalLayout>
  );
}

function HomePage() {
  return (
    <PageShell>
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Custom Software Development
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  We build scalable, innovative software solutions tailored to your business needs. From concept to deployment, we turn your vision into reality.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjgzMDY5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Software Development Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive software development services to help your business thrive in the digital age
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 pb-8">
                  <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                    <Code2 className="size-7 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Development</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Bespoke software solutions built from the ground up to match your unique business requirements and workflows.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 pb-8">
                  <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                    <Lightbulb className="size-7 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Innovation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Transform your ideas into cutting-edge digital products with modern technologies and best practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 pb-8">
                  <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                    <Rocket className="size-7 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Scale & Deploy</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Launch your product with confidence using robust, scalable infrastructure and continuous support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Recent Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Take a look at some of our latest work and see how we've helped businesses succeed
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all group">
                <CardContent className="pt-8 pb-8">
                  <div className="w-56 h-56 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                    <img src={fzLogo} alt="Faktura Zdarma Logo" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Faktúra Zdarma</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    A modern invoicing application that simplifies billing and payment tracking for freelancers and small businesses.
                  </p>
                  <a
                    href="https://fakturazdarma.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-md"
                  >
                    Visit Project <ExternalLink className="size-4" />
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all group">
                <CardContent className="pt-8 pb-8">
                  <div className="w-56 h-56 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                    <img src={redHawkLogo} alt="Red Hawk Logo" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Red Hawk</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    A comprehensive vehicle tracking portal providing real-time fleet management and monitoring capabilities.
                  </p>
                  <div className="text-gray-500 font-semibold">
                    Enterprise Solution
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1611648694931-1aeda329f9da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2ODMwODgwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern Technology Workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Building The Future, One Line At A Time</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  At Viable, we're passionate about creating software that makes a difference. Our team of experienced developers, designers, and strategists work collaboratively to deliver solutions that exceed expectations.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Whether you're a startup looking to launch your MVP or an enterprise seeking to modernize your systems, we have the expertise and dedication to bring your project to life.
                </p>
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                    <div className="text-gray-600">Projects</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                    <div className="text-gray-600">Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                    <div className="text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Build Something Great</h2>
              <p className="text-xl text-gray-600 mb-12">
                Ready to start your project? Get in touch with us today and let's discuss how we can help.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Mail className="size-6 text-blue-600" />
                  </div>
                  <p className="text-gray-900 font-semibold mb-1">Email</p>
                  <p className="text-gray-600">info@viable.sk</p>
                </div>
                <div className="flex flex-col items-center">
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="size-6 text-blue-600" />
                  </div>
                  <p className="text-gray-900 font-semibold mb-1">Contact</p>
                  <p className="text-gray-600">viable, s.r.o.<br/>Suchoňova 5724/18<br/>058 01 Poprad, Slovakia</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

function NotFoundPage() {
  return (
    <PageShell>
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-3">404</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Stránka sa nenašla</h1>
          <p className="text-lg text-gray-600 mb-8">Požadovaná stránka neexistuje alebo bola presunutá.</p>
          <a href="/" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">Späť na úvod</a>
        </div>
      </main>
    </PageShell>
  );
}

export default function App() {
  const route = normalizePath(window.location.pathname);
  useMetadata(route);

  if (route === "/ochrana-osobnych-udajov") {
    return <PrivacyPage />;
  }

  if (route === "/cookies") {
    return <CookiesPage />;
  }

  if (route === "/obchodne-podmienky") {
    return <TermsPage />;
  }

  if (route === "/") {
    return <HomePage />;
  }

  return <NotFoundPage />;
}
