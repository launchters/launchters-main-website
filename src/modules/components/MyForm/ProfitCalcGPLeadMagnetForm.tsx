import { Button } from "@mui/material";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { EmailStep } from "./EmailStep";

//* Definir el tipo de dato que se espera recibir en el formulario
interface IFormInput {
  email: string;
}


export default function ProfitCalcGPLeadMagnetForm() {
  //* Especificar el tipo de dato genérico para useForm
  const { register, handleSubmit, formState: { errors }, trigger } = useForm<IFormInput>();
  const [currentStep, setCurrentStep] = useState<number>(0);

  //* Especificar el tipo de dato genérico para onSubmit
  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    console.log(data);
  }

  const handleNextStep = async () : Promise<void> => {
    //* Comprueba si hay errores en el formulario antes de avanzar al siguiente paso
    const result = await trigger();
    if (result) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      console.log("Por favor, corrige los errores en el formulario antes de continuar");
    }
  };

  const handlePreviousStep = () => { 
    setCurrentStep((prevStep) => prevStep - 1);
  };

//* Definir la función renderStep con el tipo de retorno correcto
  const renderStep = () : JSX.Element | null => {
    switch (currentStep) {
      case 0:
        return <EmailStep register={register} errors={errors} onNext={handleNextStep} /> 
      // case 1:
      //   return (
      //     ... Paso de Email
      //   );
      // case 2:
      //   return (
      //     ... Paso de visualizaciones en Stories
      //   );
      // ... y así sucesivamente para cada paso
      // case 7:
      //   return (
      //     ... Paso de aspectos implementados efectivamente
      //   );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderStep()}
      <div>
        {currentStep > 0 && (
          <Button onClick={handlePreviousStep}>Anterior</Button>
        )}
        {currentStep < 7 && (
          <Button onClick={handleNextStep}>Siguiente</Button>
        )}
        {currentStep === 7 && (
          <Button type="submit">Enviar</Button>
        )}
      </div>
    </form>
  );
}







// export default function ProfitCalcGPLeadMagnetForm() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [currentStep, setCurrentStep] = useState(0);

//   const onSubmit = (data) => { 
//     console.log(data);
//   }

//   const handleNextStep = () => {
//     setCurrentStep(currentStep + 1);
//     TODO: Aqui agregaremos una estructura switch con un "case" por cada step del formulario.
//   };

//   TODO: Estamos programando en TypeScript (por eso el archivo es .tsx Y NO .jsx), por lo que agregale un tipo a la "e" aunque sea e: any. Debemos evitar en general usar tipos "any", pues son demasiado genericos y entonces TypeScript no puede hacer su magia... pierde toda la utilidad. Para hacer más fácil el seguimiento de tipos "any", he creado un tipo equivalente que se llama $TSFix para asi acordarme de cambiarlos en el futuro pero facilitar la experiencia de desarrollo en esta etapa del proyecto.
//   const handleFieldChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     * Apartado para manejar el envío de los datos del formulario
//   };

//   return (
//     TODO: Agregar una clase css al form siguiendo nomenclatura BEM (😝 investiga lo que es jajjaa )

//     <form onSubmit={handleSubmit}>
//       {currentStep === 1 && (
//         /* // TODO: No dejes por ahi divs sin nada... 
//         cada elemento que agregues debe tener un motivo. Si agregas un div agregale una clase al menos para que podamos a futuro
//         modificar su estilo desde CSS...
//         De todos modos en este caso creo que te encaja mejor usar simplemente un <React.Fragment> o simplemente: <>___aqui tu codigo__</>
//         */
//         <div>
//           {/* 
//           TODO: abstraer LAYOUT a componente propio PARA "DON'T REPEAT YOURSELF" (DRY principle)
//           Podemos extrar la estructura/layout del template a un componente padre e inyectarle los detalles por parametros o como sus hijos.
//           De esa manera todas las paginas/pasos del formulario seguirán el mismo template y es más facil el mantenimiento del codigo ya que si en el
//           futuro queremos modificar el "padding" o algun elemento de uno de los pasos, tendriamos que ir manualmente modificando el resto (por haber
//           codigo repetido) o se nos podria olvidar (si entra un dev junior por ejemplo)..., para evitar eso es que debemos pensar en la experiencia de
//           otros desarrolladores a futuro en los proyectos y siempre que tenga sentido, EVITAR REPETIR EL CODIGO
//           */}
//           <Typography>Agregar tu Instagram:</Typography>
//           {/* 
//           TODO: Agregar un subtitulo y darles algo de estilo 
//           */}
//           {/* 
//           TODO: El IconButton creo que sería innecesario 
//           */}
//           <IconButton>
//             <InstagramIcon />
//           </IconButton>
//           {/* 
//           TODO: No queremos el icono de insta, queremos la arroba DENTRO del TextField, para eso puedes usar la propiedad "InputProps" 
//           con "startAdornment" y meterle ahi el "EmailAlternativeIcon" o simplemente el texto "@".
//            */}
//           <TextField
//             name="instagram"
//             value={formData.instagram}
//             onChange={handleFieldChange}
//             placeholder="Tu Instagram"
//           />
//           {/* 
//           TODO: Agregar boton para ir para atras. 
//           Asegurate de que no solo sea mostrado una vez que el usuario ha avanzado. 
//           Es decir, en la primera pagina no será mostrado. Asimismo, el boton "Siguiente" no será mostrado en la última página (thank you page),
//           esto puede ser configurado en el layout mas adelante */}
//           <Button onClick={handleNextStep}>Next</Button>
//         </div>
//       )}
//     </form>
//   );
// }
