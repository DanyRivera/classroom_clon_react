import { Formik, Form, Field } from "formik";

const FormularioClase = () => {

    return (
        <Formik
        
            initialValues={{
                profesor: '',
                clase: '',
                color: ''
            }}

            onSubmit={ values =>{
                console.log(values)
            }}
        >

            {() => (

                <Form
                    className="border rounded-lg p-8 w-1/2 mx-auto"
                >

                    <div className="mb-10">
                        <label htmlFor="profesor" className="text-xl">Profesor:</label>
                        <Field
                            id="profesor"
                            type="text"
                            placeholder="Nombre del Profesor"
                            name="profesor"
                            className="w-full block mt-3 bg-gray-50 rounded-full p-3"
                        />
                    </div>

                    <div className="mb-10">
                        <label htmlFor="clase" className="text-xl">Clase:</label>
                        <Field
                            id="clase"
                            type="text"
                            placeholder="Nombre de la Clase"
                            name="clase"
                            className="w-full block mt-3 bg-gray-50 rounded-full p-3"
                        />
                    </div>

                    <div>
                        <label htmlFor="color" className="text-xl">Escoge un Color:</label>
                        <div className="w-full mt-3 grid grid-cols-3 text-center">
                            <div className="my-5">
                                <Field id="rojo" name="color" type="radio" value="038A00" />
                                <label htmlFor="rojo" className="ml-2 font-bold text-white py-1 px-2 rounded-lg bg-[#038A00]">Verde</label>
                            </div>

                            <div className="my-5">
                                <Field id="rojo" name="color" type="radio" value="00b4d8" />
                                <label htmlFor="rojo" className="ml-2 font-bold text-white py-1 px-2 rounded-lg bg-[#00b4d8]">Azul</label>
                            </div>

                            <div className="my-5">
                                <Field id="rojo" name="color" type="radio" value="6c757d" />
                                <label htmlFor="rojo" className="ml-2 font-bold text-white py-1 px-2 rounded-lg bg-[#6c757d]">Gris</label>
                            </div>

                            <div className="my-5">
                                <Field id="rojo" name="color" type="radio" value="f48c06" />
                                <label htmlFor="rojo" className="ml-2 font-bold text-white py-1 px-2 rounded-lg bg-[#f48c06]">Naranja</label>
                            </div>

                            <div className="my-5">
                                <Field id="rojo" name="color" type="radio" value="8338ec" />
                                <label htmlFor="rojo" className="ml-2 font-bold text-white py-1 px-2 rounded-lg bg-[#8338ec]">Morado</label>
                            </div>

                            <div className="my-5">
                                <Field id="rojo" name="color" type="radio" value="d90429" />
                                <label htmlFor="rojo" className="ml-2 font-bold text-white py-1 px-2 rounded-lg bg-[#d90429]">Rojo</label>
                            </div>

                        </div>
                    </div>

                    <div className="mt-12 mb-3 flex justify-center">
                        <input
                            type="submit"
                            value="Crear Clase"
                            className="bg-gray-100 py-3 px-8 rounded-xl text-xl hover:bg-gray-200 transition-all duration-[250ms] cursor-pointer"
                        />
                    </div>

                </Form>

            )}

        </Formik>
    )

};

export default FormularioClase;
