import React from 'react'; // babel(transcompiler) takes jsx and converts to js that browsers can compile using React.createElement
import ReactDOM from 'react-dom' // react updates real DOM based on changes to virtual DOM using ReactDOM.render
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './component/counter'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Counter/>
  </React.StrictMode>,
  document.getElementById('root')
);
// component output will be whatever is returned from the render method
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
