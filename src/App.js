import { useEffect , useState} from 'react';
import './App.css';
import Breadcrumb from './componant/Breadcrumb';
import Images from './componant/Images';
import Navbar from './componant/Navbar';
import {getimages} from './services/Api'

function App() {
  const [data, setData] =useState([]);
  const [count, setCount] =useState(10);
  const[ text, setText] = useState('mountains');
  useEffect(() =>{
    getimages(text,count).then(response =>{
      setData(response.data.hits)
      console.log(response.data.hits);
    }  )
  },
  [text,count])
  const onTextChange =(text) => {setText(text)
  };
  const onCountChange=(count) =>{ setCount(count)};
  return (
    <div>
      <Navbar/>
      <Breadcrumb onTextChange={onTextChange} onCountChange={onCountChange}/>
      <Images data={data}/>

    </div>
  );
}

export default App;
