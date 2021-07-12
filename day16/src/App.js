import "./App.css";

const Card = () => {
    return (
        <div className="card">
            <h2>Card-1</h2>
            <p>Hi</p>
        </div>
    );
};


const Carding = () => {
    return (
        <div className="card">
            <h2>Card-2</h2>
            <p>Hello</p>
        </div>
    );
};

function App() {
    return (
      <div className="App">
        <Card />
        <Carding />
    </div>
    );
}

export default App;