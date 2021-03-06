import "./App.css";
import Testimonies from "./components/testimonies";
import Protects from "./components/protect";
import LetsTalk from "./components/letstalk";
import Footer from "./components/footer";
import Order from "./components/order";
import Consumption from "./components/consumption";
import Exempt from "./components/exempt";
import Fast from "./components/faceandvoice";
import Easy from "./components/easy";
import Engineered from "./components/engineered";
import VoiceAuthentication from "./components/voiceauthentication";
import Face from "./components/face";
import DecenterlizedFull from "./components/decenterlizedfull";

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
      <Testimonies />
      <Protects />
      <Engineered />
      <Consumption />
      <LetsTalk />
      <Footer />
    </div>
  );
}

export default App;
