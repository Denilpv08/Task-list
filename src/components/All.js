//Importaciones
import { useState } from "react";
import '../css/All.css';

const All = ({ item, onUpdate, onDelete }) => {
    //Estado para editar
    const [edit, setEdit] = useState(false);

    //Funcion para manejar el formulario de editar 
    const FormEdit = () =>{
        //Estado para contener lo esta en el input
        const [newValue,  setNewValue] = useState(item.title);

        //Funcion para manejar mi evento de submit
        const handleSubmit = (e) => {
            e.preventDefault();
        }
        //Funcion para manejar mi evento  change
        const handleChange = (e) => {
            const value = e.target.value;
            setNewValue(value);
        }
        //Funcion para manejar mi evento click
        const handleClickUpdate = () => {
            onUpdate(item.id, newValue);
            setEdit(false);
        }

        return (
            <form className="allUpdateForm" onSubmit={ handleSubmit }>
                <input 
                type="text" 
                className="allInput" 
                onChange={ handleChange } 
                value={ newValue }/>
                <button className="button" onClick={ handleClickUpdate }>Update</button>
            </form>
        );
    }

    //Funcion para contener todos los elementos
    const AllElement = () => {
        return (
            <div className="allInfo">
                <span className="allTitle">{ item.title }</span>
                <button className="button" onClick={ () => setEdit(true) }>Edit</button>
                <button className="buttonDelete" onClick={ (e) => onDelete(item.id) }>Delete</button>
            </div>
        );
    }
    //Reflejado contenido de mi input
    return (
        //Contenedor para hacer la validacion cuando vaya a editar un comentario
        <div className="all">
            { edit ? <FormEdit /> : <AllElement /> }
        </div>
    ); 
}

//Exportaciones
export default All;