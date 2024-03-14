import { Box, Stack, Typography } from "@mui/material";
import { Suspense, useState } from "react";
import Button from "../../Button";

const vslVideoVariants: { [key: string]: string[] } = {
  gppWorkshopWaitlist: [
    "https://launchters-vsl-videos.s3.eu-west-3.amazonaws.com/Growth-Partner-Program/down-size-offer/workshop/1.+Waitlist/vsl-gpp-down-offer-workshop-waitlist-a.mp4",
    "https://launchters-vsl-videos.s3.eu-west-3.amazonaws.com/Growth-Partner-Program/down-size-offer/workshop/1.+Waitlist/vsl-gpp-down-offer-workshop-waitlist-b.mp4",
    "https://launchters-vsl-videos.s3.eu-west-3.amazonaws.com/Growth-Partner-Program/down-size-offer/workshop/1.+Waitlist/vsl-gpp-down-offer-workshop-waitlist-c.mp4",
    "https://launchters-vsl-videos.s3.eu-west-3.amazonaws.com/Growth-Partner-Program/down-size-offer/workshop/1.+Waitlist/vsl-gpp-down-offer-workshop-waitlist-d.mp4",
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
  };

  return (
    <>
      <Box sx={{ maxWidth: "42rem", margin: "0 auto" }}>
        <Typography variant="h3">
          pero VAS A PODER CRECER con este regalazo
        </Typography>
        <Stack sx={{ maxWidth: "61.8vh", margin: "1rem auto" }}>
          <Suspense fallback={`El vídeo está cargando...`}>
            <video controls autoPlay>
              <source src={selectedVariant} type="video/mp4" />
              Tu navegador no soporta el vídeo.
            </video>
          </Suspense>
        </Stack>
        <Typography sx={{ my: 2 }} variant="h6">
          En este evento online, te ayudaré a pasar de 0€/mes a vivir de tu
          pasión como coach y llegar a facturar +3.000€/mes.
        </Typography>

        <Typography sx={{ my: 2 }}>
          trabajarás en grupo para dar los pasos necesarios para iniciar tu
          negocio de coaching con éxito y llevarlo a un punto donde puedas vivir
          de él. No solo te aportaré las claves necesarias sino que te guiaré y
          trabajaremos juntos en esos puntos, evitando los errores típicos y
          resolviendo los problemas iniciales. Se acabó el vivir una vida que no
          quieres.
        </Typography>
        <Button variant="contained" onClick={handleConfirmation}>
          ¡Yo quiero, apúntame a esa lista ya!
        </Button>
      </Box>
    </>
  );
}
