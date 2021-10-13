import logo from "./logo.svg";
import "./App.css";
import Fast from "./components/fast";
import Easy from "./components/easy";
import ExemptWeb from "./components/exempt/web";
import Carosoul from "./components/carosoul";
import FacialRecognition from "./components/facialrecognition";
import VoiceAuthentication from "./components/voiceauthentication";
import Protects from "./components/protect";
import Engineered from "./components/engineered";
import LetsTalk from "./components/letstalk";
import DecenterlizedWeb from "./components/decenterlized/web";
import Footer from "./components/footer";
import FooterFields from "./components/footer/upper";
import Face from "./components/face";
import Table1 from "./components/consumption/table1";
import Table2 from "./components/consumption/table2";
import Consumption from "./components/consumption";
import DecenterlizedPad from "./components/decenterlized/tab";
import Decenterlized from "./components/decenterlized";
import OrderTab from "./components/order/tab";
import Order from "./components/order";
import ExemptTab from "./components/exempt/tab";
import Exempt from "./components/exempt";

function App() {
  return (
    <div className="App">
      {/* Resposinve on all screens
      <Decenterlized />
      <Order />
      <Fast />
      <Easy />
      <Exempt /> */}
      <Decenterlized />
      <Order />
      <Fast />
      <Easy />
      <Exempt />
      <Carosoul />
      {/* 
      
      
      
      
      
      
      <FacialRecognition />
      <VoiceAuthentication />
      <Face />
      <Protects />
      <Engineered />
      <Consumption />
      <LetsTalk />
      <Footer /> */}
    </div>
  );
}

export default App;
