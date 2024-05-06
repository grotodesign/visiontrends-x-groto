import { Route, Routes } from "react-router-dom";
import ProtectedLayout from "./components/ProtectedLayout";
import HomePage from "./pages/home";
import VendorPartnersPage from "./pages/vendor-partners";
import EventCalendarPage from "./pages/event-calendar";
// import PractiseBuilderPage from "./pages/practise-builder";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="/vendor-partners" element={<VendorPartnersPage />} />
        <Route path="/event-calendar" element={<EventCalendarPage />} />
        {/* <Route path="/practise-builder" element={<PractiseBuilderPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
