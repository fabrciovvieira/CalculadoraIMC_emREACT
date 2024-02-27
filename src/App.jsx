import './App.css'
import ImcCalc from './components/ImcCalc.jsx'
import { useState } from 'react'
import data from './data/data.js'
import ImcInfo from './components/ImcInfo.jsx'

function App() {

  const calcImc = (e, height, weight) => {
    e.preventDefault()

    if(!height || !weight) return

    const weightFloat = +weight.replace(",", ".")
    const heightFloat = +height.replace(",", ".")

    const imc = (weightFloat / (heightFloat * heightFloat)).toFixed(1)

    setImc(imc)

    data.forEach((item) => {
      if(imc >= item.min && imc <= item.max) {
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
    })

    if(!info) return
  }

  const resetCalc = (e) => {
    e.preventDefault()

    setImc("")
    setInfo("")
    setInfoClass("")
  }

  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")

  


  return (
    <>
    <div className="container">
      {!imc ? (
        <ImcCalc calcImc={calcImc}/>
      ):(
        <ImcInfo data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc}/>
      )}
      </div>
    </>
  )
}

export default App
