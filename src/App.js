
import { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Patient } from './components/Patient/Patient';
import { Answer } from './components/Answer/Answer';
import { Describe } from './components/Describe/Describe';
import WebFont from 'webfontloader';


const App = ({title}) => {

	useEffect(() => {
		document.title = 'CMA'
	}, [])

	useEffect(() => {
		WebFont.load({
		  google: {
			 families: ['Roboto: 400, 500, 700, 900', 'sans-serif']
		  }
		});
	  }, []);

	

  return (
    <div className="App">
		<main className='container'>
				<Header/>
				<Patient/>
				<Answer/>
				<Describe/>
		</main>
    </div>
  );
}

export default App;
