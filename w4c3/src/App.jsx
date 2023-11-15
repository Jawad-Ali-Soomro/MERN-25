import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [Value, setValue] = useState({});
  const options = {
    method: "GET",
    url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather",
    params: { city: "Seattle" },
    headers: {
      "X-RapidAPI-Key": "eece9701d5msh16333191a55c652p17b5b7jsnb7792f8d8b1c",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  const getResult = () => {
    try {
      axios.request(options).then((res) => setValue(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  const getData = JSON.stringify(Value)
  return (
    <>
    <input type="text" placeholder="Enter City Name" />
      <h1>{getData}</h1>
      <button onClick={getResult}>Fetch</button>
    </>
  );
}

export default App;
