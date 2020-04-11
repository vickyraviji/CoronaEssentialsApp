import React from 'react';
import './css/App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminInventory from './pages/admin/AdminInventory';
import VendorInventory from './pages/vendor/VendorInventory';
import SellerCart from './pages/vendor/SellerCart'
import VendorInfo from './pages/vendor/VendorInfo';
import UploadDocuments from './pages/vendor/UploadDocuments'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Route path='/VendorInfo' exact={true}>
        <VendorInfo />
      </Route>
      <Route path='/UploadDocs' exact={true}>
        <UploadDocuments />
      </Route>
      <Route path='/VendorInventory' exact={true}>
        <VendorInventory />
      </Route>
      <Route path='/SellerCart' exact={true}>
      <SellerCart />
    </Route>
      <Route path='/AdminInventory' exact={true}>
        <AdminInventory />
      </Route>
      <Route path='/Register' exact={true}>
        <Register />
      </Route>
      <Route path='/' exact={true}>
        <Login />
      </Route>
    </Router>
  );
}

export default App;
