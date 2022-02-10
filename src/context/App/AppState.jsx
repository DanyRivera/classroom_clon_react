import { useReducer } from "react";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import {
    MOSTRAR_BARRA,
    AGREGAR_CLASE,
    AGREGAR_TAREA,
    ESTADO_TAREA
} from "../../types";

const AppState = (props) => {

    const initialState = {
        clases: [],
        tareas: [],
        compress: true
    }

    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Funciones
    const setCompress = () => {
        dispatch({
            type: MOSTRAR_BARRA
        })
    }

    const setClase = clase => {
        dispatch({
            type: AGREGAR_CLASE,
            payload: clase
        })
    }

    const setTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
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
                setTarea,
                setEntregada
            }}
        >
            {props.children}
        </AppContext.Provider>
    )

};

export default AppState;
