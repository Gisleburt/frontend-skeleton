import React from 'react';

type AppProps = {
  name: string,
};

const App = ({name}:AppProps) => (
  <div>
    <h1>Hello {name}</h1>
  </div>
);

export default App;
