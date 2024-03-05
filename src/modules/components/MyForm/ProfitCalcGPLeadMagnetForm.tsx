import { Button, IconButton, TextField } from "@material-ui/core";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useState } from "react";
import Typography from "../Typography";

export default function ProfitCalcGPLeadMagnetForm() {
  const [currentStep, setCurrentStep] = useState(1); // TODO: En secuencias numericas lineales usa por defecto 0 como el primer indice, por respetar que el indice 0 de una array apunta al primer elemento de la array, etc...
  const [formData, setFormData] = useState({
    // TODO: Pasemos a usar RHF (react hook forms) o "Formik Forms" en lugar del State.
    instagram: "",
    // *... más campos del formulario
    // TODO: En el formulario... pidamos el email primero, luego el instagram.
  });

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // TODO: Estamos programando en TypeScript (por eso el archivo es .tsx Y NO .jsx), por lo que agregale un tipo a la "e" aunque sea e: any. Debemos evitar en general usar tipos "any", pues son demasiado genericos y entonces TypeScript no puede hacer su magia... pierde toda la utilidad. Para hacer más fácil el seguimiento de tipos "any", he creado un tipo equivalente que se llama $TSFix para asi acordarme de cambiarlos en el futuro pero facilitar la experiencia de desarrollo en esta etapa del proyecto.
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
        // No dejes por ahi divs sin nada... cada elemento que agregues debe tener un motivo. Si agregas un div agregale una clase al menos para que podamos a futuro
        // modificar su estilo desde CSS...
        // De todos modos en este caso creo que te encaja mejor usar simplemente un <React.Fragment> o simplemente: <>___aqui tu codigo__</>
        <div>
          {/* // TODO: abstraer LAYOUT a componente propio PARA "DON'T REPEAT YOURSELF" (DRY principle)
          Podemos extrar la estructura/layout del template a un componente padre e inyectarle los detalles por parametros o como sus hijos.
          De esa manera todas las paginas/pasos del formulario seguirán el mismo template y es más facil el mantenimiento del codigo ya que si en el
          futuro queremos modificar el "padding" o algun elemento de uno de los pasos, tendriamos que ir manualmente modificando el resto (por haber
          codigo repetido) o se nos podria olvidar (si entra un dev junior por ejemplo)..., para evitar eso es que debemos pensar en la experiencia de
          otros desarrolladores a futuro en los proyectos y siempre que tenga sentido, EVITAR REPETIR EL CODIGO
          */}
          <Typography>Agregar tu Instagram:</Typography>
          {/* Agregar un subtitulo y darles algo de estilo */}
          <IconButton>
            <InstagramIcon />
          </IconButton>
          {/* No queremos el icono de insta, queremos la arroba DENTRO del TextField, para eso puedes usar la propiedad "InputProps" 
          con "startAdornment" y meterle ahi el "EmailAlternativeIcon" o simplemente el texto "@".
           */}
          <TextField
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            placeholder="Tu Instagram"
          />
          {/* Agregar boton para ir para atras. Asegurate de que no solo sea mostrado una vez que el usuario ha avanzado. 
          Es decir, en la primera pagina no será mostrado. Asimismo, el boton "Siguiente" no será mostrado en la última página (thank you page),
          esto puede ser configurado en el layout mas adelante */}
          <Button onClick={handleNextStep}>Next</Button>
        </div>
      )}
    </form>
  );
}
