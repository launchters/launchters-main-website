import AppConfig from "@/app/App.config";
import DividerSection from "@/app/components/shared/DividerSection";
import { Grid, Stack, SxProps, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// ----------------------------------------------------------------------

const styles = {
  centeredFlex: {
    display: "flex",
    justifyItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
};

type Props = {
  sx?: SxProps;
  showDisclaimer?: boolean;
};

function Footer({ sx, showDisclaimer = false }: Props) {
  return (
    <>
      <DividerSection />
      <Stack
        direction="column"
        component="footer"
        sx={{
          ...styles.centeredFlex,
          ...sx,
        }}
        m={0}
        p={1}
      >
        <Typography variant="body2" m={0} p={0}>
          &copy; {AppConfig.copyrightNote}
        </Typography>
        {/* DISCLAIMER */}
        {showDisclaimer && (
          <Typography
            variant="caption"
            m={0}
            p={0}
            align="center"
            color="#9f9f9f"
          >
            Plataforma en fase de pruebas. Su uso se ofrece sin garantias y bajo
            su exclusiva responsabilidad. Al iniciar sesión se compromete a no
            utilizar datos reales de terceros y eximir de cualquier
            responsabilidad a la empresa proveedora.
          </Typography>
        )}
        <Grid container direction="row" sx={styles.centeredFlex} m={0} p={0}>
          {AppConfig.footerLinks.map((link, i) => (
            <Grid item m={0} mx={1} p={0} key={`footer_link_${i}`}>
              &nbsp;
              <Link
                to={link.path}
                style={{ margin: 0, padding: 0 }}
                rel="noreferrer"
              >
                <Typography variant="body2" fontSize={11} m={0} p={0}>
                  {link.text}
                </Typography>
              </Link>
              &nbsp;
            </Grid>
          ))}

          {/* CONTACT SUPPORT */}
          <Grid item m={0} p={0} key="footer_link_support">
            <a
              href={`mailto:${AppConfig.adminContactEmail}?subject=Solicitud%20de%20ayuda`}
              target="_blank"
              rel="noreferrer"
            >
              <Typography variant="body2" fontSize={11} m={0} p={0}>
                Contactar con soporte
              </Typography>
            </a>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}
export default Footer;
