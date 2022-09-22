import logo from "./logo.svg";
import "./App.css";
import InputField from "./components/inputField";
import LandingPageIllustration from "./components/landingPageIllustration";
import CallToActionButton from "./components/callToActionButton";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import UserChoicePage from "./screens/userChoicePage";
import ParentHomePage from "./screens/parentHomePage";
import EditChildInfoPage from "./screens/editChildInfoPage";
import LoginScreen from "./screens/loginPage";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import StudentSearchPage from "./screens/studentSearchPage";
import StudentApprovalPage from "./screens/studentApprovalPage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMIYjhgRFoBR_EDuOwpp6XBb7nsrIFgs4",
  authDomain: "kidsewallet.firebaseapp.com",
  projectId: "kidsewallet",
  storageBucket: "kidsewallet.appspot.com",
  messagingSenderId: "190205557817",
  appId: "1:190205557817:web:83b96467a1836708cba1e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/temp" element={<LandingPage />} />
          <Route path="/choice" element={<UserChoicePage />} />

          <Route path="/home" element={<ParentHomePage />} />

          <Route path="/edit" element={<EditChildInfoPage />} />

          <Route path="/login" element={<LoginScreen />} />

          <Route path="/search" element={<StudentSearchPage />} />
        
          <Route path="/approval" element={<StudentApprovalPage />} />

        </Routes>
        {/* <header className="App-header">
        <h1>Kids E-Wallet</h1>
        <h2 className={"App-description"}>Control what your kids<br/>consume at school</h2>
        <CallToActionButton/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LandingPageIllustration/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    </Router>
  );
}

export default App;
