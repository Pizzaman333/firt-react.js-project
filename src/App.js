import "./App.css";

const myName = "Andrew";
const url =
  "https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg";
const youtube = { name: "YouTube", url: "https://www.youtube.com/" };
const num1 = 500240;
const num2 = 90600;
const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "cyan",
  "lime",
  "teal",
];

const ColorList = ( colors ) => (
  <ul>
    {colors.map((color, index) => (
      <li key={index} style={{ color: color}}>{color}</li>
    ))}
  </ul>
);

function App() {
  return (
    <div className="App">
      <h1>Welcome! This is {myName}'s site.</h1>
      <div className="line"></div>
      <img src={url} className="App-logo" alt="logo" />
      <p>This is pizza!</p>
      <div className="line"></div>
      <a className="App-link" href={youtube.url} target="_blank">
        {youtube.name}
      </a>
      <div className="line"></div>
      <p>
        The sum of {num1} and {num2} is {num1 + num2}!
      </p>
      <div className="line"></div>
      {ColorList(colors)}
    </div>
  );
}

export default App;
{
  /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
}
