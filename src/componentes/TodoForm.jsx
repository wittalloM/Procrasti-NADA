import React, { useState } from "react"

import '../componentsCSS/TodoForm.css'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;
        addTodo(value,category);
        setValue("");
        setCategory("");
        console.log("Tarefa: " + value + "," + " Categoria: " + category);

    };
    return (
        <container>
            <h2>Criar nova tarefa</h2>
            <form onSubmit={handleSubmit} className="novaTarefa">
                <input value={value} type="text" placeholder="Digite aqui a sua tarefa" onChange={(e) => setValue(e.target.value)} ></input>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Escolha uma categoria</option>
                    <option value="Estudos" >Estudos</option>
                    <option value="Doméstico" >Doméstico</option>
                    <option value="Trabalho" >Trabalho</option>
                    <option value="Pessoal" >Pessoal</option>

                </select>
                <button className="btt-form" type="submit">Criar Tarefa</button>
            </form>
        </container>
    )
}

export default TodoForm