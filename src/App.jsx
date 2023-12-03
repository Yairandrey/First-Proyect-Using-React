const App = () => {
    const variable = "Hola visitante";
    const clasesObjeto = {
        primary : "text-primary",
        danger: "text-danger",
    };
    const user = true;

    const SaludoBienvenida = () => {
       return <h2 className="text-success">Bienvenido!</h2>
    }
    const SaludoDespedida = () => {
        return (
        <h2 className="text-danger">Adios!</h2>
        );
    }

    const frutas = ["🍉", "🍌", "🍓"];
    return (
        <div className="container">
           <p className={clasesObjeto.primary}>{variable}</p>

            {user ? <SaludoBienvenida /> : <SaludoDespedida />}


            {
            
            frutas.map((fruta , index) =>(
                <li key={index}>{index+1} {" - "}{fruta}</li>
            ))
            }


            <button
            className="btn btn-primary"
            onClick={() => alert("Me diste click")}
            >
                Click
            </button>
        </div>
    );

};

export default App;

