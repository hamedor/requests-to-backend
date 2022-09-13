export const Form = ({data, userInputHeading, setUserInputHeading, userInputText, setUserInputText, userInputImage,setUserInputImage, addPost,setGroup, setBase64})=>{

    const userHeadingChange = (e) => setUserInputHeading(e.target.value);
    const userTextChange = (e) => setUserInputText(e.target.value);
    const userCathegoryChange = (e) => {
      setGroup(e.target.value)
    }
   
    const userImageChange = (e) => {
      setUserInputImage(e.target.value);
      const file = e.target.files[0];
      setBase64(base(file));
    }
  
    async function base(file){
      try{
          const result = await toBase64(file)
          setBase64(result);
          return result
      }catch(error){
          console.log('ошибка')
      }
    }
  
    const toBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
  })

    return(
        <div className='modal'>
            <form  className='form'> 
                <select onChange={userCathegoryChange}>
                    {Object.keys(data).map(key =>
                        <option key={key} value={key}>{key}</option> 
                    )}
                </select>
                <input type='text'
                    value={userInputHeading}
                    onChange={userHeadingChange}
                    placeholder='Заголовок'
                    className='form__input'>
                </input>
                <input type='text'
                    value={userInputText}
                    onChange={userTextChange}
                    placeholder='Текст'
                    className='form__input form__input-large'>
                </input>
                <input 
                    value={userInputImage}
                    onChange={userImageChange}      
                    type='file'
                    placeholder='Загрузить изображение'
                    className='form__input'>
                </input>
                <div className='form__buttonContainer'>
                    <button className='btn' onClick={(e) =>addPost(e)}>Добавить запись</button>
                </div>
            </form>
        </div>
    )
}