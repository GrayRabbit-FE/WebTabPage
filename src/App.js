import React, { useState, useEffect, useRef } from "react";
import "../src/App.css";
function NumberLine() {
  return <div className="number-line preserve translate"></div>;
}
function Char(props) {
  const char = props.char;
  if (char >= "0" && char <= "9") {
    return (
      <div data-digit={char} className="number preserve translate">
        {new Array(7).fill(0).map((e, i) => (
          <NumberLine key={i}></NumberLine>
        ))}
      </div>
    );
  } else {
    return (
      <div className="char preserve translate" data-before={char}>
        {char}
      </div>
    );
  }
}
function NumberContainer(props) {
  return (
    <div className="container preserve">
      {[...props.str].map((c, i) => (
        <Char char={c} key={i}></Char>
      ))}
    </div>
  );
}
function App() {
  let [str, setStr] = useState("");
  let [sc, setSc] = useState("");
  const ref = useRef();
  function handleInput(event) {
    setSc(event.target.value);
  }
  function handleButton() {
    window.open("https://www.baidu.com.cn/s?cl=3&wd=" + sc);
  }
  function enter() {
    return setInterval(() => {
      let date = new Date();
      setStr(date.toLocaleTimeString());
    }, 900);
  }
  useEffect(() => {
    ref.current = enter();
    return () => {
      clearInterval(ref.current);
    };
  });

  return (
    <div id="app">
      <NumberContainer str={str}></NumberContainer>
      <div>
        <input
          id="content-input"
          placeholder="请输入搜索内容"
          onInput={handleInput}
          type="text"
          name="wd"
        />
        <button onClick={handleButton} id="sbtn">
          搜索
        </button>{" "}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "3vh",
          margin: "2vh",
          color: "#d4fc79"
        }}
      >
        By GrayRabbit@HIT
      </div>
    </div>
  );
}
export default App;
