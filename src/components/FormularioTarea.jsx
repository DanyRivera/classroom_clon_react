import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import AppContext from "../context/App/AppContext";
import { generarId, formatDate } from "../helpers";
import Alerta from "./Alerta";

const FormularioTarea = () => {

    const navigate = useNavigate();
    const date = new Date();
    const { id } = useParams();
    const { setTarea } = useContext(AppContext);

    const nuevaTareaSchema = Yup.object().shape({
        nombre: Yup.string().required('El nombre de la tarea es obligatoria'),
        puntos: Yup.number().required('Los puntos de la tarea son obligatorios'),
        entrega: Yup.date().required('La fecha de entrega es obligatoria'),
        descripcion: Yup.string().required('La descripción es obligatoria')
    })

    // console.log(formatDate(date))

    return (
        <Formik

            initialValues={{
                nombre: '',
                puntos: '',
                entrega: '',
                descripcion: '',
                creado: formatDate(date),
                entregada: false,
                id: generarId(),
                idClase: id
            }}

            onSubmit={values => {
                setTarea(values);
                navigate(`/clases/${id}`);
            }}

            validationSchema={nuevaTareaSchema}
        >

            {({ errors, touched }) => (

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
                        {errors.nombre && touched.nombre ? (
                            <Alerta>{errors.nombre}</Alerta>
                        ) : null}
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
                        {errors.puntos && touched.puntos ? (
                            <Alerta>{errors.puntos}</Alerta>
                        ) : null}
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
                        {errors.entrega && touched.entrega ? (
                            <Alerta>{errors.entrega}</Alerta>
                        ) : null}
                    </div>

                    <div className="mb-10">
                        <label htmlFor="descripcion" className="text-xl">Descripción:</label>
                        <Field
                            id="descripcion"
                            as="textarea"
                            name="descripcion"
                            className="w-full block mt-3 bg-gray-50 rounded-md p-3 h-32"
                        />
                        {errors.descripcion && touched.descripcion ? (
                            <Alerta>{errors.descripcion}</Alerta>
                        ) : null}
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
