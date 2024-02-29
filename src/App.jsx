

import './App.css'
import Body from './components/Body'
import Footer from './components/Footer'

import Header from './components/Header'

function App() {


  return (
    <div>
    <div className=' flex flex-col gap-5'>
    <Header/>
      <Body/>
    </div>
   
       <Footer/>
    
    </div>
  )
}

export default App
