
const Alerta = ({children}) => {

  return (
    <div>
        <div className="bg-red-500 p-3 text-center my-5 text-white rounded">
            {children}
        </div>
    </div>
  )

};

export default Alerta;
