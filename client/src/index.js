import './index.css';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));