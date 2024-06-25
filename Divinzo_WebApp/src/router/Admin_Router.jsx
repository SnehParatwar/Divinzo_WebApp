import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/admin/admin_login/admin_login';
import Dashboard from '../pages/admin/admindashboard/Dashboard';
import AddCollections from '../pages/admin/admindashboard/AddCollections';
import AddSubCollections from '../pages/admin/admindashboard/AddSubcollections';
import ViewCollections from '../pages/admin/admindashboard/ViewCollections';
import ViewSubCollections from '../pages/admin/admindashboard/ViewSubcollections';
import AddProducts from '../pages/admin/admindashboard/AddProducts';
import AdminPanel from '../component/admin/sidebar/admin_panel';

const Admin_Router = () => {
  return (
    <div>
      <AdminPanel />
      <div className="admin-main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addcollections" element={<AddCollections />} />
          <Route path="/addsubcollections" element={<AddSubCollections />} />
          <Route path="/viewcollections" element={<ViewCollections />} />
          <Route path="/viewsubcollections" element={<ViewSubCollections />} />
          <Route path="/addproducts" element={<AddProducts />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin_Router;
