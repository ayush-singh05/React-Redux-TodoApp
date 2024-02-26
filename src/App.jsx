import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Todo from './components/Todo'
import TodoItems from './components/TodoItems'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <div className=' w-full '>
        <h1 className='text-center text-white text-4xl font-semibold py-10'
          
        >Todo App</h1>
        <Todo />
        <TodoItems />
      </div>
    </>
  )
}



export default App
