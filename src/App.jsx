import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Game from "./components/Game";
import WellComePage from "./components/WellComePage";
import AllAnswers from "./components/AllAnswers";
import { RouterProvider } from "react-router-dom";
import { createHashRouter } from "react-router-dom";

const Router = createHashRouter([
  { path: "/", element: <WellComePage /> },
  { path: "/game", element: <Game /> },
  { path: "/answers", element: <AllAnswers /> },
]);

const App = () => <RouterProvider router={Router} />;

export default App;
