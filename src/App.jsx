import "./App.css";
import ButtonClick from "./components/ButtonClick";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ChallengeThreeInstructions from "./components/challenge/ChallengeThreeInstructions";

function App() {
  return (
    <div>
      <div className="App">
        <Header />
      </div>
      <ButtonClick />
      <ChallengeThreeInstructions />
      <Footer />
    </div>
  );
}

export default App;
