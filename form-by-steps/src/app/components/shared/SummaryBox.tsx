import { $TSFixMeLater } from "@/app/models";
import Iconify from "@components/shared/Iconify";
import { Card, Typography } from "@mui/material";
import { SxProps, alpha, styled, useTheme } from "@mui/material/styles";
import { fShortenNumber } from "@utils/formatNumber";

// ----------------------------------------------------------------------

const StyledIcon = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
}));

type Props = {
  title: string;
  total: number;
  color?: string;
  icon?: string;
  sx?: SxProps;
};

const SummaryBox = ({
  title,
  total,
  icon,
  color = "primary",
  sx,
  ...other
}: Props) => {
  const { palette }: { palette: $TSFixMeLater } = useTheme();

  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: "center",
        color: palette[color].darker,
        bgcolor: palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
      <StyledIcon
        sx={{
          color: palette[color].dark,
          backgroundImage: `linear-gradient(135deg, ${alpha(
            palette[color].dark,
            0
          )} 0%, ${alpha(palette[color].dark, 0.24)} 100%)`,
        }}
      >
        {icon && <Iconify icon={icon} width={24} height={24} />}
      </StyledIcon>
      <Typography variant="h3">{fShortenNumber(total)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
};

export default SummaryBox;
