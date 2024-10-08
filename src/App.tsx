import Footer from "./components/Footer";
import Home from "./pages/Home";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import Awards from "./components/Awards";

function App() {
  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="flex flex-col relative min-h-screen bg-gradient-to-b from-purple-50 to-pink-500">
        <Header />
        <Awards />
        <div className="flex flex-col flex-grow  my-12 md:my-0">
          <Home />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
