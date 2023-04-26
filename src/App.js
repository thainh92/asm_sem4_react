import {Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import MasterLayout from "./layout/MasterLayout";
import Product from "./page/Product";

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<MasterLayout/>}>
            <Route path="/" index  element={<Home/>}/>
            <Route path="/products" element={<Product/>}/>
          </Route>
        </Routes>
      </>
  );
}

export default App;
