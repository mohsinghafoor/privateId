import logo from "./logo.svg";
import "./App.css";
import ExemptWeb from "./components/exempt/web";
import Carosoul from "./components/carosoul";
import FacialRecognition from "./components/facialrecognition";

import Protects from "./components/protect";
import LetsTalk from "./components/letstalk";
import DecenterlizedWeb from "./components/decenterlized/web";
import Footer from "./components/footer";
import FooterFields from "./components/footer/upper";
import Table2 from "./components/consumption/table1";
import DecenterlizedPad from "./components/decenterlized/tab";
import Decenterlized from "./components/decenterlized";
import OrderTab from "./components/order/tab";
import Order from "./components/order";
import Consumption from "./components/consumption";
import ExemptTab from "./components/exempt/tab";
import Exempt from "./components/exempt";

import FastTab from "./components/fast/tab";
import Fast from "./components/fast";
import EasyTab from "./components/easy/tab";
import Easy from "./components/easy";
import Engineered from "./components/engineered";
import VoiceAuthentication from "./components/voiceauthentication";
import Face from "./components/face";

function App() {
  return (
    <div className="App">
      {/* Approved by Ali
      <Decenterlized />
      <Order /> 
      <Fast />
      <Easy />
      <Exempt />
      <Carosoul />
      <FacialRecognition />
      <Protects />
      <Engineered />
      <Consumption />
      <LetsTalk />*/}
      {/* Resposinve on all screens
      <Decenterlized />
      <Order />
      <Fast />
      <Easy />
      <Exempt />
      <Carosoul />
      <FacialRecognition />
      <Protects />
      <Engineered />
      <Consumption />
      <LetsTalk />
      <Footer /> */}
      <Face />
      {/*      
      <VoiceAuthentication />
      <Face />
       */}
    </div>
  );
}

export default App;
