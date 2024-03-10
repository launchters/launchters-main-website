import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

export default function CalendarBookACallWidget() {
  return (
    <>
      <Helmet>
        <script
          type="text/javascript"
          async
          src="https://assets.calendly.com/assets/external/widget.js"
        ></script>
      </Helmet>
      <div className="calendar__book-a-call">
        <Box className="title-margin">
          <Typography variant="h4">Reserva una llamada conmigo</Typography>
          <Typography variant="subtitle1" sx={{ mb: 4 }}>
            Para valorar tu caso específico
          </Typography>
        </Box>
        <div id="calendar-widget" className="calendar-widget">
          {
            // ! Calendar Widget
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/launchters/gpp-discovery-call?hide_landing_page_details=1&hide_gdpr_banner=1"
              style={{ minWidth: "320px", height: "700px" }}
            ></div>
          }
        </div>
      </div>
    </>
  );
}
