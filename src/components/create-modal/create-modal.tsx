import { useState } from "react";

interface InputProps{
    label: string,
    value: string | number,
    updateValue(value: any):void

}


const Input = ({label, value, updateValue}: InputProps)=>{
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}> </input>
        </>
    )
}




export function CreateModal(){
    const [nome, setNome] = useState("");
    const [titulos, setTitulos] = useState(0);
    const [image, setImage] = useState("");
    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre o Idolo do TIMAO</h2>
                <form className="input-container">
                    <Input label="nome" value={nome} updateValue={setNome}/>
                    <Input label="titulos" value={titulos} updateValue={setTitulos}/>
                    <Input label="image" value={image} updateValue={setImage}/>
                </form>
            </div>

        </div>
    )
}