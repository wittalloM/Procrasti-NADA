import React from "react";

import '../componentsCSS/Todo.css'

const Todo = ({todo, removTarefa, estaCompleta}) => {
    return (
        <div className='lstarefas' style={{ textDecoration: todo.completado ? "line-through" : ""}}>
                <div className='lsitem'>
                  <h4>{todo.enunTarefa}</h4>
                  <h4 className="categoria">({todo.categoria})</h4>
                </div>
                <div className='lscontrols'>
                  <button id='btt-comp-tarefa' className='btt-complete' onClick={() => estaCompleta(todo.id)}>Completar</button>
                  <button id='btt-apg-tarefa' className='btt-exclTarefa' onClick={() => removTarefa(todo.id)}>X</button>
                </div>
              </div>
               
               
               
               
               

    )
}


export default Todo