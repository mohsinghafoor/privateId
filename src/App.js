import logo from "./logo.svg";
import "./App.css";
import Order from "./components/order";
import Fast from "./components/fast";
import Easy from "./components/easy";
import Exempt from "./components/exempt";
import Carosoul from "./components/carosoul";
import FacialRecognition from "./components/facialrecognition";
import VoiceAuthentication from "./components/voiceauthentication";
import Protects from "./components/protect";
import Engineered from "./components/engineered";
import LetsTalk from "./components/letstalk";
import Decenterlized from "./components/decenterlized";
import Footer from "./components/footer";
import FooterFields from "./components/footer/upper";
import Face from "./components/face";
import Table1 from "./components/tables/table1";
import Table2 from "./components/tables/table2";

function App() {
  return (
    <div className="App">
      <Decenterlized />
      <Order />
      <Fast />
      <Easy />
      <Exempt />
      <Carosoul />
      <FacialRecognition />
      <VoiceAuthentication />
      <Face />
      <Protects />
      <Engineered />
      <LetsTalk />
      <Footer />
    </div>
  );
}

export default App;
