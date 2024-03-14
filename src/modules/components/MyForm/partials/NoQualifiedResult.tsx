import { Container, Typography } from "@mui/material";
import React from "react";
import { FaSadTear } from "react-icons/fa";
import DownSizedOffer from "./DownSizedOffer";

const NoQualifiedResult: React.FC = () => {
  return (
    <Container>
      <FaSadTear size={50} />
      <Typography variant="h6">
        Tu perfil no reune los requisitos para el programa <i>Growth Partner</i>{" "}
        <u>todavía</u>,
      </Typography>

      <DownSizedOffer variant="gpp-workshop-waitlist" />
    </Container>
  );
};

export default NoQualifiedResult;
