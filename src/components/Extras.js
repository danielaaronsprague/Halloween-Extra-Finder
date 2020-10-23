import React from "react";
import { fetchInfo } from "../helper functions";
import { Extra } from "./Extra";

export const Extras = () => {
  const [extras, setExtras] = React.useState([]);
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        const results = await fetchInfo();
        setExtras(results);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        console.log("results successfully loaded!");
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return (
    <div className='App-content'>
      <h2 className='extra-header'> Extra Finder!</h2>
      <h3 className='extra-header'>
        Here you will find a host of aspiring actors waiting for your call!
      </h3>
      <ul className='extra-container'>
        {extras.length > 0
          ? extras.map((item) => <Extra key={item.login.uuid} info={item} />)
          : null}
      </ul>
    </div>
  );
};
