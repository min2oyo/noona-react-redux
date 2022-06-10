import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Box from './component/Box';

function App() {

  const count = useSelector(state => state.count);
  const id = useSelector(state => state.id);
  const password = useSelector(state => state.password);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: `INCREMENT`, payload: { num: 5 } });
  };

  const login = () => {
    dispatch({ type: `LOGIN`, payload: { id: `ina`, password: `1111` } });
  };

  return (
    <>
      <h1>{id}, {password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가!</button>
      <button onClick={login}>Login</button>
      <Box />
    </>
  );
}

export default App;
