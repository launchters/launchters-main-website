import { ConsentBanner, ConsentProvider } from "react-hook-consent";
import "react-hook-consent/dist/styles/style.css";
import appConfig from "../../config/app.config";

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
aceptas al continuar navegando por este Sitio Web o cerrar este banner.
En caso contrario abandona inmediatamente este sitio web.`}
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
        theme: appConfig.cookies.theme,
        customHash: appConfig.cookies.customHash,
        services: appConfig.cookies.services,
      }}
    >
      {children}
      <ConsentBanner
        settings={{
          hidden: appConfig.cookies.hideSettings,
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
