//Importaciones
import React from 'react';
import { useState } from 'react';
import All from './All';
import '../css/AllApp.css';

//Mi componente funcional 
const AllApp = () => {
    // Estado para obtener lo del input
    const [title, setTitle] = useState('');
    //Estado para almacenar todo lo de setTitle
    const [all, setAll] = useState([]);

    //Funcion para manejar los eventos de cambio de estados 
    const handleChange = (e) => {
        const value = e.target.value;
        setTitle(value);
    }
    //Funcion para manejar los evento de submit cuando suba algo 
    const handleSubmit = (e) => {
        e.preventDefault();

        const newAll = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        };
        //Para actualizar mi estado 
        const templete = [...all];
        templete.unshift(newAll);

        setAll(templete);
        setTitle('');
    }
    //Funcion para manejar las actualizaciones
    const handleUpdate = (id, value) =>{
        const templete = [...all];
        const item = templete.find((item) =>  item.id === id);
        item.title = value;
        setAll(templete);
    }
    //Funcion para elimienar
    const handleDelete = (id) =>{
        const templete = all.filter((item) => item.id !== id);
        setAll(templete);
    }

    return (
        //Formulario
        <div className='allContainer'>
            <form className='allCreateForm' onSubmit={ handleSubmit }>
                {/* Caja de texto */}
                <input onChange={ handleChange } className='allInput' value={ title } />
                {/* Boton */}
                <input 
                onClick={ handleSubmit } 
                type="submit" 
                value="Create All" 
                className='buttonCreate' />
            </form>
            <div className='allContainers'>
                { all.map((item) => (
                    <All key={ item.id } item={ item } onUpdate={ handleUpdate } onDelete={ handleDelete } />          
                )) }
            </div>
        </div>
    );
}

//Exportaciones, esto se haces para poder hacer el llamado de mi componente a la pagina principal
export default AllApp;
