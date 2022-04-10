import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import useDarkMode from "./hooks/useDarkMode";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Welcome />
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
