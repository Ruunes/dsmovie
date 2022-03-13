import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Listing from "Assets/pages/Lisiting/Index";
import Form from "Assets/pages/Form/Index";
import Navbar from "components/Navbar";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieID" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;