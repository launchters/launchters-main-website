import { Box, Stack, Typography } from "@mui/material";
import { Suspense, useState } from "react";
import appConfig from "../../../../config/app.config";
import ButtonCustom from "../../ButtonCustom";

const vslStorageUrl = `${appConfig.storageUrls.vslVideos}/Growth-Partner-Program/down-size-offer`;
const vslVideoVariants: { [key: string]: string[] } = {
  gppWorkshopWaitlist: [
    `${vslStorageUrl}/workshop/1.%20Waitlist/VSL-workshop-waitlist-1.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaDGV1LWNlbnRyYWwtMSJHMEUCIAxEAqpph3pn5iYJmM9Xl9DAfEYjvBcnADiVSlJhx2q%2BAiEAu3l69Uq0RMGEU4mWi056zBfE4snsd4TJyGQS9%2FoAijsq5AIIchAAGgwzODE0OTIxMDY2NTAiDLj3jS0Kha%2FLFa639irBAv56fInV%2FheQFRGsU5zBPhXH5hu8PlakoDhx8CXYq8z8%2BOvOzM6UHTI%2FRtvuE85fNZDxNmGSQimHiww9UhEq4PB0ZkCaBW6RyrngphqsnBsqbY%2FzFyhCzwgCWtTyg9QQCti752Wbd8G17wvOCopWKxD1aJScHsrPkJXv9WlHVSe0GHTM2kKvfSw%2F3emvE658WO%2BJ%2BhE0aHXt6J%2Fv8uA2TtUEEr82l5yp73D2Wl4DMn3NQE02bClfHRWp66KGBWcwPCA16yakWK1MvihUzYShxHEuos1UJMznp0G0bMgzr6yreLuLEYUKq7EhQJDtt%2B4BMXDd%2BjZaOT5fq5rtt12z4tJfRQnXbnT0hpsufD5ehJrxOHVlXBbS5j8C8SCpqMX7P0NZz%2FdNvx8PeJRk3P4ACYF0lfmnlUrvJPyxyremnOWaMzCq7sqvBjqzAtIdDOKShZRi0yHDEMByzq9F%2FG5h0A7Z26eqf6VEzWJHxCcZMHbr8tDzFDPKRuOdETAgn6CQxlUPUIDf5OWg3iv6ju1dsEdhf%2FnqNELdEJ54FU6H7eoplecqz5UCS1VUt4wXFzH1kHD%2BpMFFShY1jHacqRcsjMyweTwCZyADhJ%2FBKE8nm7I3CeSkoOAXZo84uxcbt6H90g8BGMXs4sc%2B%2Fo3DFpbQ%2BhnBliKHbSAxMf2npzm7cfFviacGrO0wYX5%2BKHNDwOl3CBI0nB3MkWPkgIiVbWCVePFbkVPDO7vGHfz2e32v7VnzqTgy8yJZOaH%2FxNTA4%2BFNM%2BYMzzpijlTocEujEUaxizk8Abz7M%2FQqQ7quP2JPblLyAYUG8euQ0zPeUimUGwqIWgZWxp2m0i6PdXoOqU0%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240314T094518Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAVRUVTSWNJM5UVDFE%2F20240314%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Signature=fd7fbb68c97204c72e4d969f62cc452873329ea3f02bebba3638808c59ca317e`,
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
        <ButtonCustom variant="contained" onClick={handleConfirmation}>
          ¡Yo quiero, apúntame a esa lista ya!
        </ButtonCustom>
      </Box>
    </>
  );
}
