import { useReducer } from "react";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import { 
    MOSTRAR_BARRA
 } from "../../types";

const AppState = (props) => {

    const initialState = {
        compress: true
    }

    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Funciones
    const setCompress = () => {
        dispatch({
            type: MOSTRAR_BARRA
        })
    }

  return (
    <AppContext.Provider
        value={{
            compress: state.compress,
            setCompress
        }}
    >
        {props.children}
    </AppContext.Provider>
  )

};

export default AppState;
