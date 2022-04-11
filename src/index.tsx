import 'bootstrap/dist/css/bootstrap.min.css'
import {createRoot} from 'react-dom/client'
import App from './App';

const container = document.getElementById('root') as HTMLElement;

if (!container) {
    throw new Error("No root element found");
}
const root = createRoot(container);
root.render(<App />);