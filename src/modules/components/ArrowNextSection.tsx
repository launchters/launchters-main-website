import { ArrowDownward } from "@mui/icons-material";
import { Link, styled } from "@mui/material";

type Props = {
  toId: string;
};

const CustomLink = styled(Link)(() => ({
  "&, &:hover": {
    color: "inherit",
  },
}));

export default function ArrowNextSection({ toId }: Props) {
  return (
    <CustomLink href={`#${toId}`}>
      <ArrowDownward sx={{ mt: 4 }} />
    </CustomLink>
  );
}
