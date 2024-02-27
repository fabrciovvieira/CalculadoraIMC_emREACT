import Button from "./Button"
import "./ImcCalc.css"
import { useState } from "react"


const ImcCalc = ({ calcImc }) => {
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")

    const clearForm = (e) => {
        e.preventDefaut()
        setHeight("")
        setWeight("")
    }

    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "")
    }
    const handleHeightChange = (e) => {
        const updateValue = validDigits(e.target.value)
        setHeight(updateValue)
    }
    const handleWeighttChange = (e) => {
        const updateValue = validDigits(e.target.value)
        setWeight(updateValue)
    }

  return (
    <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height">Altura:</label>
                    <input type="text"
                    name="height"
                    placeholder="1,83"
                    onChange={(e) => handleHeightChange(e)}
                    value={height}/>
                </div>
                <div className="form-control">
                    <label htmlFor="weight">Peso:</label>
                    <input type="text"
                    name="weight"
                    placeholder="88,7"
                    onChange={(e) => handleWeighttChange(e)}
                    value={weight}/>
                </div>
            </div>
            <div className="action-control">
                <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weight)}/>
                <Button id="clear-btn" text="Limpar" action={clearForm}/>
            </div>
        </form>
    </div>
  )
}

export default ImcCalc