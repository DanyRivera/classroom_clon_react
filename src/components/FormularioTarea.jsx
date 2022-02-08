import { Formik, Form, Field } from "formik";

const FormularioTarea = () => {

    return (
        <Formik

            initialValues={{
                nombre: '',
                puntos: '',
                entrega: '',
                descripcion: ''
            }}

            onSubmit={values => {
                console.log(values)
            }}
        >

            {() => (

                <Form
                    className="border rounded-lg p-8 w-1/2 mx-auto"
                >

                    <div className="mb-10">
                        <label htmlFor="nombre" className="text-xl">Nombre:</label>
                        <Field
                            id="nombre"
                            type="text"
                            placeholder="Nombre de la Tarea"
                            name="nombre"
                            className="w-full block mt-3 bg-gray-50 rounded-full p-3"
                        />
                    </div>

                    <div className="mb-10">
                        <label htmlFor="puntos" className="text-xl">Puntos:</label>
                        <Field
                            id="puntos"
                            type="number"
                            placeholder="Cuantos Puntos vale esta tarea?"
                            name="puntos"
                            className="w-full block mt-3 bg-gray-50 rounded-full p-3"
                        />
                    </div>

                    <div className="mb-10">
                        <label htmlFor="entrega" className="text-xl">Entrega:</label>
                        <Field
                            id="entrega"
                            type="date"
                            placeholder="Fecha de entrega"
                            name="entrega"
                            className="w-full block mt-3 bg-gray-50 rounded-full p-3"
                        />
                    </div>

                    <div className="mb-10">
                        <label htmlFor="descripcion" className="text-xl">Descripción:</label>
                        <Field
                            id="descripcion"
                            as="textarea"
                            name="descripcion"
                            className="w-full block mt-3 bg-gray-50 rounded-md p-3 h-32"
                        />
                    </div>

                    <div className="mt-12 mb-3 flex justify-center">
                        <input
                            type="submit"
                            value="Crear Tarea"
                            className="bg-gray-100 py-3 px-8 rounded-xl text-xl hover:bg-gray-200 transition-all duration-[250ms] cursor-pointer"
                        />
                    </div>

                </Form>

            )}

        </Formik>
    )

};

export default FormularioTarea;
