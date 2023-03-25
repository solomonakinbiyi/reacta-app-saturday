import './App.css';
import Review from './components/Review';
import { ReviewJson } from './data/ReviewJson';

function App() {
  return (
    <div className="App">
      {
        ReviewJson.map((rvw, i) => (
          <Review 
            key={i}
            {...rvw}
          />
        ))
      }
    </div>
  );
}

export default App;
