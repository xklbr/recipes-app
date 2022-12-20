import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "router";
import { store } from "store";

import "assets/styles/style.scss";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
