import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
	const [ mode, SetMode ] = useState('light'); //whether dark mode is  enabled or not
	const [ alert, setAlert ] = useState(null);
	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type
		});
		setTimeout(() => {
			setAlert(null);
		}, 1500);
	};
	const toggleMode = () => {
		if (mode === 'light') {
			SetMode('dark');
			document.body.style.backgroundColor = '#042743';
			showAlert('Dark mode has been enabled', 'success');
			document.title = 'TextUtils - Dark Mode';
		} else {
			SetMode('light');
			document.body.style.backgroundColor = 'white';
			showAlert('Light mode has been enabled', 'success');
			document.title = 'TextUtils - Light Mode';
			//   setInterval(() => {
			//     document.title = 'TextUtils is Amazing Mode';
			//   })
			//     setInterval(() => {
			//     document.title = 'Install TextUtils Now';
			//   })
			// }
		}
	};

	return (
		<>
		 {/* <BrowserRouter> */}
			<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
			<Alert alert={alert} />
			<TextForm mode={mode} showAlert={showAlert} heading={"Enter the text to analyze below"} />
			{/* <Navigation /> */}
	 {/* </BrowserRouter> */}
			</>
	);
}
export default App;
