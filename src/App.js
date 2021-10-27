import './App.css';
import Child from './Child.js'
import { TransactionProvider } from './transContext';

function App() {
  return (
    <>
      <TransactionProvider>
        <Child />
      </TransactionProvider>
    </>
  );
}

export default App;
