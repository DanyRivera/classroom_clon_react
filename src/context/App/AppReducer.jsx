import { 
    MOSTRAR_BARRA
} from "../../types";

export default (state, action) => {

    switch (action.type) {

        case MOSTRAR_BARRA:
            return {
                ...state,
                compress: !state.compress
            }
            
    
        default:
            return state;
    }

}