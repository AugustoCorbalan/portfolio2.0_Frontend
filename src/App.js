import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { InitialPage } from './pages/initialPage';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/'element={<InitialPage/>}/>
      </Routes>
    </Provider>
  );
}

export default App;
