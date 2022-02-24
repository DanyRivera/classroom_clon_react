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
                clases: action.payload
            }

        case ACTUALIZAR_CLASE:
            return {
                ...state,
                clases: state.clases.map(clase => clase.id == action.payload.id ? action.payload : clase),
                tareas: state.tareas.map(tarea => Object.defineProperty(tarea, 'profesor', { value: action.payload.profesor }))
            }

        case ELIMINAR_CLASE:
            return {
                ...state,
                clases: state.clases.filter(clase => clase.id !== action.payload),
                tareas: state.tareas.filter(tarea => tarea.idClase !== action.payload)
            }

        case AGREGAR_TAREA:
            return {
                ...state,
                tareas: action.payload
            }

        case ACTUALIZAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.map(tarea => tarea.id == action.payload.id ? action.payload : tarea)
            }

        case ELIMINAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
            }

        case ESTADO_TAREA:

            const estadoTarea = () => {

                if (action.payload.entregada == false) {
                    return true
                } else {
                    return false
                }

            }

            return {
                ...state,
                tareas: state.tareas.map(tarea => tarea.id == action.payload.id ? Object.defineProperty(action.payload, 'entregada', { value: estadoTarea() }) : tarea)
            }


        default:
            return state;
    }

}