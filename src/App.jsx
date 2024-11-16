import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

const Card = ({ cardName, imgLink, title, val }) => {
  return (
    <div className={`${cardName} flex justify-evenly shadow-lg p-2 mx-2 rounded-lg backdrop-blur-md min-w-32 border-e border-b`}>
      <img src={imgLink} alt="" />
      <div className="text">
        <p className="title">{title}</p>
        <p className="val">{val}</p>
      </div>
    </div>
  );
};

function App() {
  const baseUri = process.env.REACT_APP_BASE_URI || "";
  const apiKey = process.env.REACT_APP_API_KEY || "";
  // const baseUri = ""
  // const apiKey =  ""

  const [text, setText] = useState("London");

  useEffect(() => {
    const response = async () => {
      await axios({
        url: `${baseUri}/current.json`,
        method: "GET",
        headers: {
          authorization: apiKey,
        },
        params: {
          q: text,
          lang: "en",
        },
      })
        .then((response) => {
          alert(response.data);
        })
        .catch((error) => {
          alert(error?.message);
        });
    };
  }, [text]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const gradientCSS = "bg-gradient-to-r from-emerald-400 to-emerald-600"

  return (
    <>
      <div className={`flex justify-center text-center items-center text-white h-screen w-screen ${gradientCSS}`}>
        <div className={`block w-card px-12 py-4 rounded-xl bg-white/5 bg-center backdrop-blur-md shadow-2xl border`}>
          <div className="input-field">
            <input
              className={`bg-transparent px-4 border-none text-center rounded-full`}
              type="text"
              value={text}
              onChange={handleChange}
            />
          </div>
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
            <Card
              cardName="wind"
              imgLink="nothing"
              title="Wind Speed"
              val="12.5 km/h"
            ></Card>
            <Card
              cardName="humidity"
              imgLink="nothing"
              title="Humidity"
              val="65%"
            ></Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
