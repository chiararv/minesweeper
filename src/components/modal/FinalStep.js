import React, { useState } from 'react'

const FinalStep = ({closeModal, setWidth, setHeight}) => {

    const [custom, setCustom] = useState(false)
    const [customHeight, setCustomHeight] = useState(null)
    const [customWidth, setCustomWidth] = useState(null)

    const play = (level) => {
        switch (level) {
            case "principiante":
                break;
            case "intermedio":
                setHeight(16)
                setWidth(16)
                break;
            case "experto":
                setHeight(16)
                setWidth(32)
                break;        
            case "custom":
                setHeight(customHeight)
                setWidth(customWidth)
                break;        
            default:
                break;
        }
        closeModal()
    }
    return (
        <div>
            {
                !custom && (
                    <div>                           
                        <button onClick={() => play("principiante")}>Principiante</button>
                        <button onClick={() => play("intermedio")}>Intermedio</button>
                        <button onClick={() => play("experto")}>Experto</button>
                        <button onClick={() =>setCustom(true)}>Personalizado</button>
                    </div>
                )
            }
            {
                custom && (
                    <div>
                        <input onChange={(e) => setCustomHeight(e.target.value)} placeholder="altura"/>
                        <input onChange={(e) => setCustomWidth(e.target.value)} placeholder="ancho"/>
                        <button onClick={() => play("custom")}>Jugar</button>
                        <button onClick={() =>setCustom(false)}>volver</button>
                    </div>
                )
            }
        </div>
    )
}

export default FinalStep
