import { useLocation, useNavigate } from "react-router-dom";

const BtnAgregar = ({id}) => {

    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = () => {

        if(location.pathname == '/clases') {
            navigate('/clases/nueva')
        } else {
            navigate(`/clases/${id}/tareas/nueva`)
        }

    }

    // console.log(location.pathname);

    return (
        <button
            onClick={() => handleClick()}
            className='mx-auto mt-10 md:m-16 md:mt-24 py-3 px-4 rounded-xl border text-md bg-gray-100 flex items-center hover:bg-gray-200 transition-all duration-[250ms]'
        >Agregar<span className='text-2xl px-1'>+</span></button>
    )
    
};

export default BtnAgregar;
