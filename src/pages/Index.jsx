import Home from "./Home";
import Participantes from "./Participantes";
import Registro from "./Registro";
import NotFound from "./NotFound";
import Gafete from "./Gafete";
import LayoutPublic from "../layout/LayoutPublic";
import { createBrowserRouter } from "react-router-dom";
//Creamos el router de la aplicacion
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/participantes",
        element: <Participantes />,
      },
      {
        path: "/gafete/:id",
        element: <Gafete />,
      },
      {
        path: "/registro",
        element: <Registro />,
      },
    ],
  },
]);
