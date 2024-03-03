import './App.css'
import Counter from './features/counter/Counter.jsx'

function App() {
  console.log("App: rendering");
  return (

    <div className='border rounded'>
      <h1 className='font-semibold text-5xl p-4'>React-Redux</h1>
      <p className="text-stone-500 text-md">
        We are going to implement the react redux with an example called counter react-app
      </p>
      <Counter />
    </div>
  )
}

export default App
