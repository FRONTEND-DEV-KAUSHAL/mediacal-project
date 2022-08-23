import logo from './logo.svg';
import './App.css';
import Department from './container/departments/Department'
import Home from './container/home/Home';
import Doctor from './container/doctors/Doctors';
import About from './container/about/About';
import Contact from './container/contect/Contect';
import Footer from './components/footer/Footer';
import Medicine from './container/medicine/Medicine';
import BookAppointment from './container/appointment/BookAppointemnt';
import { Route, Switch } from 'react-router-dom';
import ListAppointment from './container/appointment/ListAppointment';
import Header from './components/header/Header';
import Auth from './container/auth/Auth'
import PublicRoute from './route/PublicRoute';
import PrivetRoute from './route/PrivetRoute';
import ToggleContext from './context/Themecontext';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    // <div className="App">
      <Provider store={store}>
        <ToggleContext>

          <Header />
          <Switch>
            <PublicRoute path={"/"} exact component={Home} />
            <PublicRoute path={"/Department"} exact component={Department} />
            <PublicRoute path={"/Doctor"} exact component={Doctor} />
            <PublicRoute path={"/About"} exact component={About} />
            <PublicRoute path={"/Contact"} exact component={Contact} />
            <PublicRoute path={"/Medicine"} exact component={Medicine} />
            <PrivetRoute path={"/book_apt"} exact component={BookAppointment} />
            <PrivetRoute path={"/list_apt"} exact component={ListAppointment} />
            <PublicRoute path={"/Auth"} exact restricted={true} component={Auth} />
            {/* <Route path={"/Form"} exact component={Form}></Route> */}

          </Switch>
          <Footer />
        </ToggleContext>
      </Provider>
    // </div>
  );
}

export default App;