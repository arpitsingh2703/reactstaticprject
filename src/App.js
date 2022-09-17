import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import NavBar from './components/NavBar';
function App() {
	return (
		<div className="App">
			<Header />
			<NavBar />
			<div className="app_cards">
				<Cards />
			</div>
		</div>
	);
}

export default App;
