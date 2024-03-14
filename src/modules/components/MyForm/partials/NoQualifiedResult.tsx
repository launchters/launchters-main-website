import React from "react";
import { FaSadTear } from "react-icons/fa";

const NoQualifiedResult: React.FC = () => {
  const handleConfirmation = () => {
    // Add the user to the waiting list
    // Redirect them to the online event page
  };

  return (
    <div>
      <FaSadTear size={50} />
      <p>
        Your current profile does not meet the requirements for the 'Growth
        Partner' program yet.
      </p>
      <p>
        However, by clicking the confirmation button below, you will be added to
        a waiting list for an online event where you will learn how to grow your
        coaching business from 0 to 3000€/month.
      </p>
      <button onClick={handleConfirmation}>Confirm</button>
    </div>
  );
};

export default NoQualifiedResult;
