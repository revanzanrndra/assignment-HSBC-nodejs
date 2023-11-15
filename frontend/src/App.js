import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./components/Homepage";
import ViewallBuku from "./components/ViewallBuku";
import AddBuku from "./components/AddBuku";
import ViewBuku from "./components/ViewBuku";
import UpdateBuku from "./components/UpdateBuku";
import SuccessPage from "./components/SuccessPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="buku" element={<ViewallBuku/>}/>
        <Route path="buku/add" element={<AddBuku/>}/>
        <Route path="buku/detail/:id" element={<ViewBuku/>}/>
        <Route path="buku/update/:id" element={<UpdateBuku/>}/>
        <Route path="buku/add/success" element={<SuccessPage/>}/>
        <Route path="buku/update/:id/success" element={<SuccessPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
