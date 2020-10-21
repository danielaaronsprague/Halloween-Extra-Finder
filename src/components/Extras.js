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
      <Extra />
      {extras.length > 0
        ? extras.map((item) => (
            <img
              key={item.login.uuid}
              src={item.picture.large}
              className='extra-image'
              alt='halloween extra actor'
            />
          ))
        : null}
    </div>
  );
};
