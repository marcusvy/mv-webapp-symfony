/*
 * App
*/
// Declare Global
declare global {
  interface Window {
    Author: string;
  }
}
window.Author = 'Marcus Vinícius da R G Cardoso';

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import './styles/tailwind.css';
import "@fortawesome/fontawesome-free/css/fontawesome.css"
import "@fortawesome/fontawesome-free/css/brands.css"
import "@fortawesome/fontawesome-free/css/solid.css"

// start the Stimulus application
import './bootstrap';

// Components
import './components';