import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ListaPerguntas from "../pages/ListaPerguntas";

const Routesw = () => {
    return (
    <Router>
      <Routes>
        <Route path="/" exact element={<ListaPerguntas />}>
          
        </Route>
      </Routes>
    </Router>
    );
};


export default Routesw;
