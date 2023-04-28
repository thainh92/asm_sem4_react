import {Route, Router, Routes} from "react-router-dom";
import MasterLayout from "./layout/MasterLayout";
import Product from "./page/Product";
import AddProduct from "./products/AddProduct";
import AddOrder from "./orders/AddOrder";
import ViewOrder from "./orders/ViewOrder";
import EditProduct from "./products/EditProduct";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MasterLayout/>}>
                    <Route path="/" index element={<Product/>}/>
                    <Route path="/products" element={<Product/>}/>
                    <Route path="/addProduct" element={<AddProduct/>}/>
                    <Route path="/editProduct/:id" element={<EditProduct/>}/>
                    <Route path="/orders" element={<ViewOrder/>}/>
                    <Route path="/addOrder" element={<AddOrder/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
