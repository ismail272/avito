import Header from "./Header";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import Footer from "./Footer";
import Main from "./Main";
import {loadImages} from "../redux/action";


function App() {
const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadImages())
    })

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />

    </div>
  );
}

export default App;
