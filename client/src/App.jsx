import { Navbar, Welcome, Footer, Services, Transactions } from "./components";

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
