import './App.css';
import {  useState } from 'react';
import { useFetch } from './components/useFetch';
import { Form } from './components/Form';
import { ItemsList } from './components/ItemsList';

function App() {
  const [userInputHeading, setUserInputHeading] = useState('');
  const [userInputText, setUserInputText] = useState('');
  const [userInputImage, setUserInputImage] = useState('');
  const [group, setGroup] = useState('museums');
  const [base64, setBase64] = useState('');

  const url = 'http://827013-cs70445.tmweb.ru:4000/db';
  const { data, isLoading, deletePost, addPost} = useFetch(url, userInputHeading, userInputText, base64, group);
  
  const LoadingComponent = () =>{
    if(isLoading){
      return(
        <div className="loadingContainer">
        <div className="loadingContainer__modal">
          <p>Загрузка</p>
        </div>
      </div>
      )
    }
  }

  return (
    <div className="App">
      <Form 
        data={data}
        userInputHeading={userInputHeading}
        setUserInputHeading={setUserInputHeading}
        userInputText={userInputText}
        setUserInputText={setUserInputText}
        userInputImage={userInputImage}
        setUserInputImage={setUserInputImage}
        addPost={addPost}
        setBase64={setBase64}
        setGroup={setGroup}
      />
      <LoadingComponent/>
      <ItemsList
        data={data}
        deletePost={deletePost}
      />
    </div>
  );
}

export default App;
