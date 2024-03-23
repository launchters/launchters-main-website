import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledFormPageLayout = styled(Box)(() => ({
  display: "flex",
  flex: 1,
  width: "100%",
  justifyContent: "center",
  alignItems: "flex-start",
  backgroundPosition: "50% 50",
  backgroundClip: "border-box",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundImage: `url(https://images.pexels.com/photos/7130497/pexels-photo-7130497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) `,
  // backgroundImage: `url(https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) `,
}));

export default StyledFormPageLayout;
