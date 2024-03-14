import { Box, Stack, Typography } from "@mui/material";
import { Suspense } from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { Helmet } from "react-helmet-async";

export default function CalendarBookACallWidget() {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });

  const calendarSrcUrl = "https://calendly.com/launchters/gpp-discovery-call/";
  // const selectedDateByDefault = new Date(Date.now() + 172800000);
  const selectedDateByDefault = undefined;

  const widgetConfig = {
    pageSettings: {
      hideEventTypeDetails: true,
      hideLandingPageDetails: true,
      // backgroundColor: "ffffff",
      // primaryColor: "00a2ff",
      // textColor: "4d5055",
    },
    utm: {
      utmCampaign: "Growth Partner Program MVF 0.1",
      utmContent: "Profit Calculator Lead Magnet",
      utmMedium: "Lead_Magnets",
      // utmSource: "Facebook",
      // utmTerm: "RevenueCalc",
    },
    prefill: {
      date: selectedDateByDefault,
      // email: "test@test.com",
      // firstName: "Jon",
      // lastName: "Snow",
      // name: "Jon Snow",
      smsReminderNumber: "+34664567890",
      // guests: ["janedoe@example.com", "johndoe@example.com"],
      customAnswers: {
        // a1: "a1",
        // a2: "a2",
        // a3: "a3",
        // a4: "a4",
        // a5: "a5",
        // a6: "a6",
        // a7: "a7",
        // a8: "a8",
        // a9: "a9",
        // a10: "a10",
      },
    },
  };

  return (
    <Stack>
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
        <Suspense fallback="Cargando calendario...">
          <div id="calendar-widget" className="calendar-widget">
            {
              // ! Calendar Widget
              // <div
              //   className="calendly-inline-widget"
              //   data-url={calendarSrcUrl}
              //   style={{ minWidth: "320px", height: "700px" }}
              // ></div>
            }
            <InlineWidget url={calendarSrcUrl} {...widgetConfig} />
          </div>
        </Suspense>
      </div>
    </Stack>
  );
}
