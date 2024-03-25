import React from 'react';
import './App.css';
import sakuraImage from './sakura.png'; // 画像をインポート

import {Camera} from "react-camera-pro";

interface SakuraProps {
  left: number;
  animationDuration: number;
  swayDuration: number;
}

const Sakura: React.FC<SakuraProps> = ({ left, animationDuration, swayDuration }) => (
  <div
    className="sakura"
    style={{
      left: `${left}%`,
      animationDuration: `${animationDuration}s, ${swayDuration}s`,
      backgroundImage: `url(${sakuraImage})`, // 画像を背景に設定
      backgroundSize: 'cover',
    }}
  />
);

function App() {
  const sakuraCount = 20; // 生成する桜の数
  const sakuras = Array.from({ length: sakuraCount }).map((_, index) => (
    <Sakura
      key={index}
      left={Math.random() * 100} // 0%から100%の間でランダムな位置
      animationDuration={Math.random() * 5 + 3} // 5秒から10秒の間でランダムな落下時間
      swayDuration={2 + Math.random() * 2} // 2秒から4秒の間でランダムな左方向への流れる時間
    />
  ));

  return (
    <div className="App">
      {sakuras}
      <div className="centered-text">
        <h1>入学おめでとうございます！</h1>
      </div>
    </div>
  );
}

export default App;
