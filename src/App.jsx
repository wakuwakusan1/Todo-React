/** eslint off */
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceShowflag, setfaceShowflag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setfaceShowflag(!faceShowflag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowflag || setfaceShowflag(true);
      } else {
        faceShowflag && setfaceShowflag(false);
      }
    }
  }, [num]); //[num, faceShowflag]

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">オゲンキデスカ</ColorfulMessage>
      <ColorfulMessage color="pink">ゲンキデス</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>

      <br />
      <button onClick={onClickSwitchShowFlag}>ON/OFF</button>
      <p>{num}</p>
      {faceShowflag && <p>＼(^o^)／</p>}
    </>
  );
};

export default App;
