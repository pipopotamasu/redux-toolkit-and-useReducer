import './CounterApp.css';

function CounterApp() {
  return (
    <div className="counter-app">
      <p className="counter">Counter: 0</p>
      <ul className="buttons">
        <li><button>+</button></li>
        <li><button>-</button></li>
        <li><button>reset</button></li>
      </ul>
    </div>
  );
}

export default CounterApp;
