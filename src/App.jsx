import "./App.css";

const Card = ({cardName, imgLink, title, val}) => {
  return (
    <div className={`${cardName} flex justify-evenly`}>
      <img src={imgLink} alt="" />
      <div className="text">
        <p className="title">{title}</p>
        <p className="val">{val}</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
    <div className="flex justify-center text-center text-white ">

      <div className="block w-card w-80 h-80 bg-teal-800 opacity-70 bg-center">
        <div className="title text-2xl">
          <h1>Weather</h1>
        </div>
        <div className="location text-xs">
          <p>New Delhi, IN</p>
        </div>
        <div className="update-status text-xs">
          <p>Last updated 2024-01-20 10:30</p>
        </div>

        <div className="temperature flex justify-evenly">
          <div className="text">
            <p className="sup-text text-6xl">28%</p>
            <p className="sub-text">Feels Like: 30%</p>
          </div>
          <div className="img"></div>
        </div>

        <div className="weather-status m-4">Partly Cloudy</div>

        <div className="cards flex justify-evenly">
          <Card cardName="wind" imgLink="nothing" title="Wind Speed" val="12.5 km/h"></Card>
          <Card cardName="humidity" imgLink="nothing" title="Humidity" val="65%"></Card>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
