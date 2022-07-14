
import { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Patient } from './components/Patient/Patient';
import { Answer } from './components/Answer/Answer';
import { Describe } from './components/Describe/Describe';
import WebFont from 'webfontloader';
import Media from 'react-media';


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

	function View(match = '') {

		return (
			<>
				{
					match === '' ?
					<>
						<Header match={match}/>
						<Patient match={match}/>
						<Answer match={match}/>
						<Describe match={match}/>
					</> :
					<>
						<Header match={match}/>
						<Patient match={match}/>
						<Answer match={match}/>
						<Describe match={match}/>
					</>
					

				} 
			</>
		)
	}

  return (
    <div className="App">
		<main className='container'>
			<Media queries={{
				mobile: "(min-width: 415px)"
			}}>
				{matches => {
					return (
						<>
							{matches.mobile ? View() : View('_mobile')}
						</>
					)
				}}
			</Media>
		</main>
    </div>
  );
}

export default App;
