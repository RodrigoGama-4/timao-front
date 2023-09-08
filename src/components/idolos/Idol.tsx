import "./Idol.css"

interface IdolProps{
    quantidadeTitulos: number,
    nome: string,
    image: string
}

export function Idol({quantidadeTitulos, nome, image}: IdolProps){
    return(
        <div className="card">
            <img src={image}/>
            <h2>{nome}</h2>
            <p><b>Titulos:</b>{quantidadeTitulos}</p>

        </div>
    )
}