import { Box } from "@mui/material";
import { forwardRef, ReactNode } from "react";
import { $TSFixMeLaterFunction } from "@models/index";
import { Helmet } from "react-helmet-async";

// -----------------------------------------------------

type Props = {
  children: ReactNode;
  title?: string;
  meta?: ReactNode;
};

// ----------------------------------------------------------------------

const Page = forwardRef<$TSFixMeLaterFunction, Props>(
  ({ children, title = "", meta, ...other }, ref) => (
    <>
      <Helmet>
        <>
          <title>{title}</title>
          {meta}
        </>
      </Helmet>

      <Box ref={ref} {...other}>
        {children}
      </Box>
    </>
  )
);

// ----------------------------------------------------------------------

export default Page;
