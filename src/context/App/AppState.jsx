import { useReducer } from "react";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import {
    MOSTRAR_BARRA,
    AGREGAR_CLASE,
    ACTUALIZAR_CLASE,
    ELIMINAR_CLASE,
    AGREGAR_TAREA,
    ACTUALIZAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA
} from "../../types";

const AppState = (props) => {

    const initialState = {
        clases: localStorage.getItem('clases') ? JSON.parse(localStorage.getItem('clases')) : [],
        tareas: localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [],
        compress: false
    }

    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Funciones
    const setCompress = () => {
        dispatch({
            type: MOSTRAR_BARRA
        })
    }

    const setClase = clases => {
        dispatch({
            type: AGREGAR_CLASE,
            payload: clases
        })
    }

    const actualizarClase = clase => {
        dispatch({
            type: ACTUALIZAR_CLASE,
            payload: clase
        })
    }

    const eliminarClase = id => {
        dispatch({
            type: ELIMINAR_CLASE,
            payload: id
        })
    }

    const setTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    const setEntregada = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    return (
        <AppContext.Provider
            value={{
                compress: state.compress,
                clases: state.clases,
                tareas: state.tareas,
                setCompress,
                setClase,
                actualizarClase,
                eliminarClase,
                setTarea,
                actualizarTarea,
                eliminarTarea,
                setEntregada
            }}
        >
            {props.children}
        </AppContext.Provider>
    )

};

export default AppState;
