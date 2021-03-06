import React from "react";
import { A } from "hookrouter";

export const Home = () => {
  return (
    <div className='App-content'>
      <h1 className='playful'>
        {/* Do you need extras to kill in your new Halloween film!? */}
        <span aria-hidden='true'>D</span>
        <span aria-hidden='true'>o</span>
        <span aria-hidden='true'> </span>
        <span aria-hidden='true'>y</span>
        <span aria-hidden='true'>o</span>
        <span aria-hidden='true'>u</span>
        <br />
        <span aria-hidden='true'>n</span>
        <span aria-hidden='true'>e</span>
        <span aria-hidden='true'>e</span>
        <span aria-hidden='true'>d</span>
        <span aria-hidden='true'> </span>
        <span aria-hidden='true'>e</span>
        <span aria-hidden='true'>x</span>
        <span aria-hidden='true'>t</span>
        <span aria-hidden='true'>r</span>
        <span aria-hidden='true'>a</span>
        <span aria-hidden='true'>s</span>
        <br />
        <span aria-hidden='true'>t</span>
        <span aria-hidden='true'>o</span>
        <span aria-hidden='true'> </span>
        <span aria-hidden='true'>k</span>
        <span aria-hidden='true'>i</span>
        <span aria-hidden='true'>l</span>
        <span aria-hidden='true'>l</span>
        <span aria-hidden='true'>!</span>
        <span aria-hidden='true'>?</span>
      </h1>
      <A className='button-no' href='/'>
        <button className='button-no'>
          <p className='button-no'>
            <span className='button-no'>N O</span>
          </p>
        </button>
      </A>
      <A href='/extras'>
        <button id='button-yes'>Y E S</button>
      </A>
    </div>
  );
};
