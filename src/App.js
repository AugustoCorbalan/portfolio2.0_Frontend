import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { InitialPage } from './pages/InitialPage/initialPage';
import { About } from './pages/About/about';
import { Projects } from './pages/Projects/projects';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/'element={<InitialPage/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/projects'element={<Projects/>}/>
      </Routes>
    </Provider>
  );
}

export default App;
