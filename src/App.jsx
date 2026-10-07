//import { useState } from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import OrdersPage from "./pages/OrdersPage";
import TrackingsPage from "./pages/TrackingsPage";

import "./App.css";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingsPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
