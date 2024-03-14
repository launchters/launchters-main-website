import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import ButtonCustom from "../../ButtonCustom";

const YesQualifiedResult: React.FC = () => {
  const handleConfirmation = () => {
    // Add the user to the waiting list
    // Redirect them to the online event page
  };

  return (
    <div>
      <FaCheckCircle size={50} />
      <p>Si que cumple los requisitos. ¿Que hacemos ahora?</p>
      <p>xxxxx</p>
      <ButtonCustom onClick={handleConfirmation}>CTA</ButtonCustom>
    </div>
  );
};

export default YesQualifiedResult;
