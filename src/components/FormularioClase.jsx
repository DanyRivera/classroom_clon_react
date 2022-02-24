import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import { generarId } from "../helpers";
import AppContext from "../context/App/AppContext";
import Alerta from "./Alerta";

const FormularioClase = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { setClase, actualizarClase, clases } = useContext(AppContext);

    const [claseActual, setClaseActual] = useState({});

    const nuevaClaseSchema = Yup.object().shape({
        profesor: Yup.string().required('El nombre del profesor es obligatorio'),
        nombreClase: Yup.string().required('El nombre de la clase es obligatoria'),
        color: Yup.string().required('El color es obligatorio'),
    })

    useEffect(() => {

        if (clases.length > 0 && id) {
            const clase = clases.find(clase => clase.id == id);
            setClaseActual(clase);
        }

    }, [])


    return (
        <Formik

            initialValues={{
                profesor: claseActual?.profesor ?? '',
                nombreClase: claseActual?.nombreClase ?? '',
                color: claseActual?.color ?? '',
                id: claseActual?.id ?? generarId()
            }}

            validationSchema={nuevaClaseSchema}
            enableReinitialize={true}

            onSubmit={values => {

                // console.log(values);
                const clasesArr = [...clases, values]

                if (id) {
                    //Esta editando
                    actualizarClase(values);
                } else {
                    //Esta creando
                    setClase(clasesArr);
                }

                navigate('/clases');
            }}
        >

            {({ errors, touched }) => {

                return (
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

                            {errors.profesor && touched.profesor ? (
                                <Alerta>{errors.profesor}</Alerta>
                            ) : null}

                        </div>

                        <div className="mb-10">
                            <label htmlFor="clase" className="text-xl">Clase:</label>
                            <Field
                                id="clase"
                                type="text"
                                placeholder="Nombre de la Clase"
                                name="nombreClase"
                                className="w-full block mt-3 bg-gray-50 rounded-full p-3"
                            />
                            {errors.nombreClase && touched.nombreClase ? (
                                <Alerta>{errors.nombreClase}</Alerta>
                            ) : null}
                        </div>

                        <div>
                            <label htmlFor="color" className="text-xl">Escoge un Color:</label>
                            <div className="w-full mt-3 grid grid-cols-3 text-center">
                                <div className="my-5">
                                    <Field id="rojo" name="color" type="radio" value="#038A00" />
                                    <label htmlFor="rojo" className="ml-2 font-bold text-white py-1 px-2 rounded-lg bg-[#038A00]">Verde</label>
                                </div>

                                <div className="my-5">
                                    <Field id="rojo" name="color" type="radio" value="#00b4d8" />
                                    <label htmlFor="rojo" className="ml-2 font-bold text-white py-1 px-2 rounded-lg bg-[#00b4d8]">Azul</label>
                                </div>

                                <div className="my-5">
                                    <Field id="rojo" name="color" type="radio" value="#6c757d" />
                                    <label htmlFor="rojo" className="ml-2 font-bold text-white py-1 px-2 rounded-lg bg-[#6c757d]">Gris</label>
                                </div>

                                <div className="my-5">
                                    <Field id="rojo" name="color" type="radio" value="#f48c06" />
                                    <label htmlFor="rojo" className="ml-2 font-bold text-white py-1 px-2 rounded-lg bg-[#f48c06]">Naranja</label>
                                </div>

                                <div className="my-5">
                                    <Field id="rojo" name="color" type="radio" value="#8338ec" />
                                    <label htmlFor="rojo" className="ml-2 font-bold text-white py-1 px-2 rounded-lg bg-[#8338ec]">Morado</label>
                                </div>

                                <div className="my-5">
                                    <Field id="rojo" name="color" type="radio" value="#d90429" />
                                    <label htmlFor="rojo" className="ml-2 font-bold text-white py-1 px-2 rounded-lg bg-[#d90429]">Rojo</label>
                                </div>

                            </div>

                            {errors.color && touched.color ? (
                                <Alerta>{errors.color}</Alerta>
                            ) : null}
                        </div>

                        <div className="mt-12 mb-3 flex justify-center">
                            <input
                                type="submit"
                                value={id ? 'Editar Clase' : 'Crear Clase'}
                                className="bg-gray-100 py-3 px-8 rounded-xl text-xl hover:bg-gray-200 transition-all duration-[250ms] cursor-pointer"
                            />
                        </div>

                    </Form>
                )
            }}

        </Formik>
    )

};

export default FormularioClase;
