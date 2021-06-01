import './App.css';
import Order from './components/orders/orders.js'
import Customer from './components/customer/customer.js'

function App() {
  return (
    <div className="App">
      <header>
        <h5>Anna Anne (19901230-4567)</h5>
      </header>
      <Customer />
      <hr></hr>
      <div className="title">
        <div className="left">
          <h5>Anna´s orders</h5>
        </div>
        <div className="help">
          <p className="info"><span>i</span> <a className="link" href="https://www.qliro.com/sv-se/kundservice">Help</a></p>
        </div>
      </div>
      <Order />
      <footer>
        <div className="footerWrapper"><p>Back</p><p className="active">1</p><p>2</p><p className="next">Next</p></div>
      </footer>
    </div>
  );
}

export default App;
