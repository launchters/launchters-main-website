import { ConsentBanner, ConsentProvider } from "react-hook-consent";
import "react-hook-consent/dist/styles/style.css";

const services = [
  {
    id: "myid",
    name: "MyName",
    scripts: [
      // TODO poner el codigo de google analytics aqui
      { id: "external-script", src: "https://myscript.com/script.js" },
      {
        id: "inline-code",
        code: `console.log("Cookies accepted on", ${new Date().toISOString()});`,
      },
    ],
    cookies: [{ pattern: "cookie-name" }, { pattern: /regex/ }],
    localStorage: ["local-storage-key"],
    sessionStorage: ["session-storage-key"],
    mandatory: true,
  },
];

function ConsentInnerContent() {
  return (
    <>
      {`Como muchas webs que se preocupan por mejorar su experiencia de 
usuario, nosotros también utilizamos cookies propias y/o de terceros
para obtener datos estadísticos de navegación y uso del Sitio Web por
parte de nuestros usuarios, con tal de poder mejorar nuestros
servicios. Puedes saber más sobre nuestro Uso de Cookies en nuestra `}
      <a href="/#/legal/privacy">Política de Privacidad</a>
      {`, la cual
aceptas al continuar navegando por este Sitio Web, así como nuestros
Términos de Uso. En caso de no estar de acuerdo, debes cerrar/abandonar inmediatamente este sitio web.`}
    </>
  );
}

type Props = {
  children: React.ReactNode | React.ReactNode[];
};
export default function CookieConsentProvider({ children }: Props) {
  return (
    <ConsentProvider
      options={{
        services,
        // customHash: 'my-custom-hash', // optional, e.g. when changing the options based on language
        theme: "light",
      }}
    >
      {children}
      <ConsentBanner
        settings={{
          hidden: false,
          label: "Configurar",
          modal: { title: "Modal title" },
        }}
        decline={{ hidden: false, label: "Declinar" }}
        approve={{ label: "Cerrar" }}
      >
        <ConsentInnerContent />
      </ConsentBanner>
    </ConsentProvider>
  );
}
