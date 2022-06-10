import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {

  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: `INCREMENT` });
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>증가!</button>
    </>
  );
}

export default App;
