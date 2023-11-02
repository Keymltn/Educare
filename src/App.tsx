import "./App.css";
import Community from "./components/Community/Community";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Online from "./components/Online/Online";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Online />
      <Register />
      <Form />
      <Community />
      <Footer />
    </>
  );
}

export default App;
