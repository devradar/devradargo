import {
  createHashRouter
} from "react-router-dom";
import App from '../App';
import Radar from '../components/radar'


export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "radar",
        element: <Radar />,
      },
    ],
  },
]);
