import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.618,
  transition: theme.transitions.create("opacity"),
}));

type Props = {
  imgUrl: string;
  isDisabled: boolean;
};

export default function ImageBoxWithOverlay({ imgUrl, isDisabled }: Props) {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
          backgroundImage: `url(${imgUrl})`,
          opacity: 1,
          ...(isDisabled ? { filter: "grayscale(.9)" } : {}),
        }}
      />
      <ImageBackdrop className="imageBackdrop" />
    </>
  );
}
