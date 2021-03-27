import { render } from "@testing-library/react";
import React from "react";
import * as SortingAlgorithms from "../SortingAlgorithms/SortingAlgorithms";
import "./SortingVisualizer.css";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 310; i++) {
      array.push(randomIntFromInterval(5, 1000));
    }
    this.setState({ array });
  }

  mergeSort() {
    const javaScriptSortedArray = this.state.array.slice().sort();
    const sortedArray = SortingAlgorithms.mergeSort(this.state.array);

    console.log(arrayAreEqual(javaScriptSortedArray, sortedArray));
  }

  quickSort() {}

  heapSort() {}

  bubbleSort() {}

  render() {
    const { array } = this.state;

    return (
      <div className="array-container">
        <button onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.quickSort()}>Quick Sort</button>
        <button onClick={() => this.heapSort()}>Heap Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <div className="array-bar-container">
          {array.map((value, idx) => (
            <div className="array-bar" key={idx} style={{ height: `${value}px` }}>
              {value}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arrayAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) return false;
  }
  return true;
}
