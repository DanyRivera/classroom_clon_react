import FormularioTarea from "../components/FormularioTarea";

const NuevaTareaPage = () => {

  return (
    <div className="md:m-16 my-16">

      <h2 className="text-5xl text-center md:p-0 px-7 mt-10 md:m-0">Crea Una Nueva Tarea</h2>

      <div className="mt-14">
        <FormularioTarea />
      </div>

    </div>
  )

};

export default NuevaTareaPage;
