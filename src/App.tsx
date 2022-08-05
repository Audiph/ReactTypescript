import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Chopin",
      url: "https://crosseyedpianist.files.wordpress.com/2020/07/o9fxa5e1h7kd2frv44lyk.jpg",
      age: 25,
      note: "The Piano King",
    },
  ]);

  return (
    <div className="App">
      <h1>Classical Musicians</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
