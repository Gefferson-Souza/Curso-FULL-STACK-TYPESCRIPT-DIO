interface ICard {
    id:number
    paragraph: string
    detail: string
}

function Card({id, paragraph, detail}:ICard){
    console.log(id)
    return (
        <div>
            <h1>Card</h1>
            <span>{id}</span>
            <p>{paragraph}</p>
            <p>{detail}</p>
        </div>
    )
}

export default Card;