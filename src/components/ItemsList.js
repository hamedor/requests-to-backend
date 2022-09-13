export const ItemsList = ({data, deletePost}) =>{

    return(
        <div className='container'>
        {Object.entries(data).map(([key,val])=>
        <div key={key}>
            <ul ><li ><h2 >{key}</h2></li>
            {val.map(el => <li key={el.id}>
                <p>{el.heading}</p>
                <p>{el.id}</p>
                <p>{el.text}</p>
                <div>
                    <img src={el.img} width='300' height='300' alt='картинка локации'></img>
                </div>
                <button className='btn' onClick={(e) => deletePost(e, key)} id={el.id}>Удалить</button>
            </li>)}
            </ul>
        </div>)}
        </div>
    )
} 
