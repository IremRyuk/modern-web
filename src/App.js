import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Jobs from "./pages/Jobs";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/contact' element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
