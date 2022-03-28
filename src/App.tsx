import React, {useState} from 'react';
import './App.css';

import Component1 from './components/Component1';
import List from './components/List'

interface IState {
  people: {
    name: string
    url: string
    age: number
    note?: string
  }[]
}

function add(n1: number, n2:number) {
  return n1+n2;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result)
}

let combinedValues: (a: number, b: number) => number;

combinedValues = add;
console.log(combinedValues(1,2))

addAndHandle(10, 20, (result) => {
  console.log(result)
})

function App() {
  const [people, setPeople] = useState<IState["people"]>([]);

  return (
    <div className="App">
      <h1>Hello</h1>
      <List people={people} />
      <Component1 label="test" handleChange={(e)=> console.log(e.target.value)} />
    </div>
  );
}

export default App;
