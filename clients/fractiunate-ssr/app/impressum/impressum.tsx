import React from "react";
import { NavLink } from "react-router";
import { StepBack } from "lucide-react";

const data = {
  company: "Fractiunate",
  fullname: "David Rahäuser",
  jobTitle: "Cloud Engineer",

  street: "Karl-Marx-Straße 179D",
  plz: "12043",
  city: "Berlin",
  mobile: "+49 15209261143",
  email: "d.rahaeuser@gmail.com",
};

const Impressum: React.FC = () => (
  <main style={{ maxWidth: 800, margin: "2rem auto", padding: "1rem" }}>

    <div className="flex items-center mb-4">
    <NavLink className="flex items-center p-1 pr-2 mb-4 transition-transform duration-300 scale-100 border-0 rounded-sm hover:scale-105 hover:drop-shadow-2xl bg-muted hover:bg-purple-700"  to="/"><StepBack className="mr-2" />Back to Home</NavLink>
      </div>  

    <h1 className="pb-2 text-4xl">Legal Notice</h1>
    <p>Angaben gemäß § 5 DDG</p>
    <p>
      {data.company} - {data.jobTitle}
      <br /> {data.street}
      <br /> {data.plz} {data.city}
    </p>
    <p>
      {" "}
      <strong>Vertreten durch: </strong>
      <br />
      {data.fullname}
    </p>
    <p>
      <h2 className="pt-2 text-xl">Kontakt:</h2>
      Telefon: {data.mobile}
      <br />
      E-Mail: <a href={`mailto: ${data.email}`}>{data.email}</a>
    </p>
    <p>
      <h2 className="pt-2 text-xl">Umsatzsteuer-ID: </h2>
      Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
      <br />
      Musterustid.
      <br />
      <strong>Wirtschafts-ID: </strong>
      Musterwirtschaftsid
    </p>
    <p>
      <strong>Aufsichtsbehörde:</strong> Musteraufsicht Musterstadt
    </p>
    <p>
      <strong>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</strong>.
      <br />
      David Rahäuser Karl-Marx-Straße%2C 179D 12043 Berlin{" "}
    </p>{" "}
    <p>
      <h2 className="pt-2 text-xl">Haftungsausschluss: </h2>
      <strong>Haftung für Inhalte</strong>
      <br />
      Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
      Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
      keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG
      für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
      verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch
      nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
      überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
      Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
      Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon
      unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
      der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
      von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
      entfernen.
      <h2 className="pt-2 text-xl">Haftung für Links</h2>
      Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
      Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
      Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
      Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
      verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung
      auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
      Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
      Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
      einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
      Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      <h2 className="pt-2 text-xl">Urheberrecht</h2>
      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
      Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
      Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
      des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
      Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
      privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
      dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
      Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
      gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
      aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
      Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend
      entfernen.
      <h2 className="pt-2 text-xl">Datenschutz</h2>
      Die Nutzung unserer Webseite ist in der Regel ohne Angabe
      personenbezogener Daten möglich. Soweit auf unseren Seiten
      personenbezogene Daten (beispielsweise Name, Anschrift oder
      eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf
      freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung
      nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die
      Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
      Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem
      Zugriff durch Dritte ist nicht möglich. Der Nutzung von im Rahmen der
      Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur
      Übersendung von nicht ausdrücklich angeforderter Werbung und
      Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die
      Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
      Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
      Spam-Mails, vor.
      <h2 className="pt-2 text-xl">Google Analytics</h2>
      Diese Website benutzt Google Analytics, einen Webanalysedienst der Google
      Inc. (''Google''). Google Analytics verwendet sog. ''Cookies'',
      Textdateien, die auf Ihrem Computer gespeichert werden und die eine
      Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den
      Cookie erzeugten Informationen über Ihre Benutzung dieser Website
      (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den
      USA übertragen und dort gespeichert. Google wird diese Informationen
      benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die
      Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um
      weitere mit der Websitenutzung und der Internetnutzung verbundene
      Dienstleistungen zu erbringen. Auch wird Google diese Informationen
      gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben
      oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google
      wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in
      Verbindung bringen. Sie können die Installation der Cookies durch eine
      entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen
      Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
      sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch
      die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über
      Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise
      und zu dem zuvor benannten Zweck einverstanden.
      <h2 className="pt-2 text-xl">Google AdSense</h2>
      {`Diese Website benutzt Google Adsense, einen Webanzeigendienst der Google Inc., USA (''Google''). Google Adsense verwendet sog. ''Cookies'' (Textdateien), die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglicht. Google Adsense verwendet auch sog. ''Web Beacons'' (kleine unsichtbare Grafiken) zur Sammlung von Informationen. Durch die Verwendung des Web Beacons können einfache Aktionen wie der Besucherverkehr auf der Webseite aufgezeichnet und gesammelt werden. Die durch den Cookie und/oder Web Beacon erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) werden an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website im Hinblick auf die Anzeigen auszuwerten, um Reports über die Websiteaktivitäten und Anzeigen für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Das Speichern von Cookies auf Ihrer Festplatte und die Anzeige von Web Beacons können Sie verhindern, indem Sie in Ihren Browser-Einstellungen ''keine Cookies akzeptieren'' wählen (Im MS Internet-Explorer unter ''Extras > Internetoptionen > Datenschutz > Einstellung''; im Firefox unter ''Extras > Einstellungen > Datenschutz > Cookies''); wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.`}
    </p><br/>
    Erstellt mit dem{" "}
    <a
      href="https://impressum-generator.de"
      rel="dofollow">
      Impressum-Generator
    </a>{" "}
    von WebsiteWissen.com, dem Ratgeber für{" "}
    <a
      href="https://websitewissen.com/website-erstellen"
      rel="dofollow">
      Website-Erstellung
    </a>
    ,{" "}
    <a
      href="https://websitewissen.com/homepage-baukasten-vergleich"
      rel="dofollow">
      Homepage-Baukästen
    </a>{" "}
    und{" "}
    <a
      href="https://websitewissen.com/shopsysteme-vergleich"
      rel="dofollow">
      Shopsysteme
    </a>
    . Rechtstext von der{" "}
    <a
      href="https://www.kanzlei-hasselbach.de/"
      rel="dofollow">
      Kanzlei Hasselbach
    </a>
    .
  </main>
);

export default Impressum;
