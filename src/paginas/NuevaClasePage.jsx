import FormularioClase from "../components/FormularioClase";

const NuevaClasePage = () => {
  return (
    <div className="md:m-16 my-16">

      <h2 className="text-5xl text-center md:p-0 px-7">Crea Una Nueva Clase</h2>

      <div className="mt-14">
        <FormularioClase />
      </div>

    </div>
  )
};

export default NuevaClasePage;
