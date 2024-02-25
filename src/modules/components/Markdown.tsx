import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ReactMarkdown from "markdown-to-jsx";
import { $TSFix } from "../models/ts-fix.d";
 
const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h4",
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: "h6" },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: "subtitle1" },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "caption",
        paragraph: true,
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: { component: Link },
    li: {
      component: (props: $TSFix) => (
        <Box component="li" sx={{ mt: 1 }}>
          <Typography component="span" {...props} />
        </Box>
      ),
    },
  },
};

export type MarkdownProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
};
export default function Markdown(props: MarkdownProps) {
  return <ReactMarkdown options={options} {...props} />;
}
