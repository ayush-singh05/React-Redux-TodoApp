import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/TodoFeatures/todoSlice';
function Todo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch();

  const todoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <div className=''>

      <div className='flex justify-center items-center flex-wrap'>
        <form onSubmit={todoHandler}
          className='flex items-center '
        >
          <input type="text"
            className='w-96 p-2 outline-none h-10 mx-2 rounded focus:font-semibold focus:text-lg'
            value={input}
            placeholder='Write todo...'
            onChange={(e) => setInput(e.target.value)}
          
          />

          <button
            type='submit'
            className='px-4 rounded py-2 h-10 bg-blue-500 hover:bg-blue-600 font-normal text-white outline-none'
          > Add Todo</button>
        </form>
      </div>

    </div>
  )
}

export default Todo
