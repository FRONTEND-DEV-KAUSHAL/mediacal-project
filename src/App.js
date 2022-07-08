
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./container/home/Home";
import { Route, Switch } from 'react-router-dom'
import Department from "./container/departments/Department";
import Doctors from "./container/doctors/Doctors";
import About from "./container/about/About";
import Contect from "./container/contect/Contect";
import Auth from "./container/auth/Auth";
import Medicine from "./container/medicine/Medicine";
import BookAppointemnt from "./container/appointment/BookAppointemnt";
import ListAppointment from "./container/appointment/ListAppointment";


function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route path={'/'} exact component={Home}></Route>
      <Route path={'/Departments'} exact component={Department}></Route>
      <Route path={'/Doctors'} exact component={Doctors}></Route>
      <Route path={'/About'} exact component={About}></Route>
      <Route path={'/Contect'} exact component={Contect}></Route>
      <Route path={'/Auth'} exact component={Auth}></Route>
      <Route path={'/Medicine'} exact component={Medicine}></Route>
      <Route path={'/BookAppointment'} exact component={BookAppointemnt}></Route> 
      <Route path={'/ListAppointment'} exact component={ListAppointment}></Route> 
      {/* <Route path={'/Refexample'} exact component={Refexample}></Route> */}
    </Switch>
    <Footer/>

    {/* <Pass data={getdata}/> */}
    </>
  );
}

export default App;
