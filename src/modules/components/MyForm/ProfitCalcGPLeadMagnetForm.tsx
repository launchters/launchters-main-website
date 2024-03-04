import { useState } from 'react';
import { TextField, Button, IconButton } from '@material-ui/core';
import Typography from '../Typography';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function ProfitCalcGPLeadMagnetForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    instagram: '',
    // *... más campos del formulario
  });

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // * Apartado para manejar el envío de los datos del formulario
  };

    return (
        <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
                <div>
                    <Typography>Agregar tu Instagram:</Typography>
                    <IconButton>
                        <InstagramIcon />
                    </IconButton>
                    <TextField
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                        placeholder="Tu Instagram"
                    />
                    <Button onClick={handleNextStep}>Next</Button>
                </div>
            )}
        </form>
    )
}