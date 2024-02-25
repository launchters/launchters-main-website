import { ArrowDownward } from "@mui/icons-material";
import { Link as LinkScroll } from "react-scroll";

type Props = {
  toId: string;
  offset: number | undefined;
};

export default function ArrowNextSection({ toId, offset }: Props) {
  return (
    <LinkScroll
      to={`${toId}`}
      style={{ color: "inherit", cursor: "pointer" }}
      spy={false}
      smooth={true}
      offset={offset}
      duration={500}
    >
      <ArrowDownward sx={{ mt: 4 }} />
    </LinkScroll>
  );
}
