import './App.css';

import Header from './components/header';
import Footer from './components/footer';

import Routes from './routes';
import { BrowserRouter, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
            <nav id="main-nav">
              <ul>
                <li><Link className="menu" to={`/`}><button type="button" className="btn btn-primary">Home</button></Link></li>
                <li><Link className="menu" to={`/about`}><button type="button" className="btn btn-primary">Sobre</button></Link></li>
                <li><Link className="menu" to={`/register-poke`}><button type="button" className="btn btn-primary">Registro</button></Link></li>
                <li><Link className="menu" to={`/list-poke`}><button type="button" className="btn btn-primary">Consulta</button></Link></li>
                <li><Link className="menu" to={`/bonus`}><button type="button" className="btn btn-primary">Bonus</button></Link></li>
              </ul>
            </nav>
            <Routes/>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
