import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import TextForm from './component/TextForm';
import About from './component/About';

const head = "TextUtils"
const abouttext ="About Us"

function App() {
  return (
    <div className='A'>
     
<Header tittle={head} about={abouttext}/>
<div className="container">
{/* <TextForm/> */}
<About/>

</div>

    </div>

  );
}

export default App;
