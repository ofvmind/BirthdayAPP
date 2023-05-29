import React, { useState } from "react";
import "./styles/App.css"
import Main from "./components/Main";
import useSound from "use-sound";
import sound from "./components/sounds/click.mp3"

function App() {

  const [ play ] = useSound(sound);

  const [ toasts, setToasts ] = useState([
    'За зустріч!', 
    'Вип’ємо за ВДВ – Віру, Доблесть та Везіння!', 
    'За дружбу!',
    'За перемогу!',
    'Щоб хуй стояв і серце билось!',
    'За любих дівчат!',
    'За те щоб сонце заствітило!',
    'За ход ноги!',
    'Щоб у вас завжди стояв, хліб на столі',
    'Щоб ніколи не падав, авторитет між людьми!',
    'Щоб вам завжди давали ваші та інші жінки, гарну оцінку в житті',
    'За посмішку для всіх людей))',
    'Щоб було перед ким роздягнутися, і за що - вдягнутися!',
    'П`ємо за посмішки дівочі І за серця палкі жіночі!',
    'За людину-павука))',
    'За віру в себе',
    'За самих кращих друзів в світі))',
    'За справжнє добро',
    'За те щоб ныколи не здаватись',
    'Помиляйся, тільки не зупиняйся'
  ]);

  return (
    <div className="App">
      <Main toasts={ toasts } audio={ play }/>
    </div>
  );
}

export default App;
