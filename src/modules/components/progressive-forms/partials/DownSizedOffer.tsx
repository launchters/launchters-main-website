import { Typography } from "@mui/material";
import { useState } from "react";
import { FaSadTear } from "react-icons/fa";
import appConfig from "../../../../config/app.config";
import StyledButton from "../../StyledButton";
import ResultStep from "../Steps/ResultStep";

const vslStorageUrl = `${appConfig.storageUrls.vslVideos}/Growth-Partner-Program/down-size-offer`;
const vslVideoVariants = {
  gppWorkshopWaitlist: [
    {
      src: `${vslStorageUrl}/workshop/1.+Waitlist/VSL-workshop-waitlist-1.mp4`,
      cover: `${vslStorageUrl}/workshop/1.+Waitlist/VSL-workshop-waitlist-1-Cover.jpg`,
    },
  ],
};

type Props = {
  variant: "gpp-workshop-waitlist";
};

export default function DownSizedOffer({ variant }: Props) {
  switch (variant) {
    case "gpp-workshop-waitlist":
      return <GrowthPartnerWorkshopWaitlist />;
    default:
      throw new Error("Invalid variant at DownSizedOfferGPP");
  }
}

function GrowthPartnerWorkshopWaitlist() {
  const vslVariants = vslVideoVariants.gppWorkshopWaitlist;

  const [
    selectedVariant,
    // setSelectedVariant
  ] = useState(vslVariants[0]);

  const handleConfirmation = () => {
    // Add the user to the waiting list
    // Redirect them to the online event page
    console.warn(
      "Debemos apuntar al lead a la waiting list para la masterclass o comunidad gratuita o workshop."
    );
    // TODO Update query to set the waitlist subscribed to yes.
  };

  return (
    <ResultStep
      icon={<FaSadTear size={50} style={{ marginRight: "1rem" }} />}
      title={
        <span>
          Tu perfil no reune los requisitos para el programa{" "}
          <i>Growth Partner</i> <u>todavía</u>
        </span>
      }
      videoSrc={selectedVariant.src}
      cta={
        <StyledButton onClick={handleConfirmation}>
          ¡Yo quiero, apúntame a esa lista ya!
        </StyledButton>
      }
    >
      <Typography sx={{ my: 2 }} variant="h3">
        ⬇️ Pero vas a poder crecer con este regalazo 🎁
      </Typography>

      <Typography sx={{ my: 2 }} variant="h6">
        te ayudaré a pasar de 0€/mes a vivir de tu pasión como coach y llegar a
        facturar +3.000€/mes.
      </Typography>

      <Typography sx={{ my: 2 }}>
        trabajarás en grupo para dar los pasos necesarios para iniciar tu
        negocio de coaching con éxito y llevarlo a un punto donde puedas vivir
        de él. No solo te aportaré las claves necesarias sino que te guiaré y
        trabajaremos juntos en esos puntos, evitando los errores típicos y
        resolviendo los problemas iniciales. Se acabó el vivir una vida que no
        quieres.
      </Typography>
    </ResultStep>
  );
}
