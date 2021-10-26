import "./App.css";
import Carosoul from "./components/carosoul";
import FacialRecognition from "./components/facialrecognition";
import Protects from "./components/protect";
import LetsTalk from "./components/letstalk";
import Footer from "./components/footer";
import Decenterlized from "./components/decenterlized";
import Order from "./components/order";
import Consumption from "./components/consumption";
import Exempt from "./components/exempt";
import Fast from "./components/fast";
import Easy from "./components/easy";
import Engineered from "./components/engineered";
import VoiceAuthentication from "./components/voiceauthentication";
import Face from "./components/face";
import DecenterlizedFull from "./decenterlizedfull";
function App() {
  return (
    <div className="App">
      <DecenterlizedFull />
      <Fast />
      <Face />
      <VoiceAuthentication />
      <Order />
      <Easy />
      <Exempt />
      <Carosoul />
      <FacialRecognition />
      <Protects />
      <Engineered />
      <Consumption />
      <LetsTalk />
      <Footer />
    </div>
  );
}

export default App;
