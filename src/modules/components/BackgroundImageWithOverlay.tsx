import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { Theme, styled } from "@mui/material/styles";
import { SxProps } from "@mui/system";

type Props = {
  src: string;
  opacity?: number;
};

const Background = styled("div")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  zIndex: 0,
});

export default function BackgroundImageWithOverlay({
  src,
  opacity = 0.7,
}: Props) {
  const sxBackground: SxProps<Theme> = {
    backgroundImage: `url(${src})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "50% 50%",
    zIndex: 0,
    width: "100%",
    height: "100%",
  };
  return (
    <Stack>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "common.black",
          opacity,
          zIndex: 1,
        }}
      />
      <Background sx={sxBackground} />
    </Stack>
  );
}
