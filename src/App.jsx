import './App.css'
import { TodoApp } from './components/features/Todo/TodoApp'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'

function App() {

  return (
    <div className="container">
      <Header />
      <TodoApp />
      <Footer />
    </div>
  )
}

export default App
