import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Footer from "./Footer";
import Main from "./Main";
import {loadImages} from "../redux/action";
import ReactLoading from 'react-loading'

function App() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.images.loading)

    useEffect(() => {
        dispatch(loadImages())
    }, [dispatch])

    if (loading) {
        return (
            <div className="first-loading">
                <ReactLoading
                    type='spin'
                    width={100}
                    height={100}
                    color='darkgrey'/>
            </div>
        )
    }

    return (
        <div className="App">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
