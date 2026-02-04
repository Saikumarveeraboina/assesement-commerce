import AppRoutes from "./components/routes/AppRoutes";
import Navbar from "./components/common/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
