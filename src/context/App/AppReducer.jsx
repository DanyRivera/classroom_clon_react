import {
    MOSTRAR_BARRA,
    AGREGAR_CLASE,
    AGREGAR_TAREA,
    ESTADO_TAREA
} from "../../types";

export default (state, action) => {

    switch (action.type) {

        case MOSTRAR_BARRA:
            return {
                ...state,
                compress: !state.compress
            }

        case AGREGAR_CLASE:
            return {
                ...state,
                clases: [...state.clases, action.payload]
            }

        case AGREGAR_TAREA:
            return {
                ...state,
                tareas: [...state.tareas, action.payload]
            }

        case ESTADO_TAREA:

            return {
                ...state,
                // tareas: state.tareas.map(tarea => tarea.id == action.payload.id ? tarea.entregada = true : tarea)
            }


        default:
            return state;
    }

}