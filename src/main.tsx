import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import  Home  from "./pages/Home.tsx";
import Explore from './pages/Explore.tsx';
import MyEvents from './pages/MyEvents.tsx';
import MyTickets from './pages/MyTickets.tsx';
import Financials from './pages/Financials.tsx';
import ServiceManagement from './pages/ServiceManagement.tsx';
import Media from './pages/Media.tsx';
import EventStoreGift from './pages/EventStoreGift.tsx';
import Messages from './pages/Messages.tsx';
import Settings from './pages/Settings.tsx';
import ActivityLog from './pages/ActivityLog.tsx';
import Support from './pages/Support.tsx';
import DashboardLayout from './components/DashboardLayout/DashboardLayout.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route element={<DashboardLayout />} >
          <Route path="/dashboard" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/my-events" element={<MyEvents />} />
          <Route path="/my-tickets" element={<MyTickets />} />
          <Route path="/financials" element={<Financials />} />
          <Route path="/service-management" element={<ServiceManagement />} />
          <Route path="/media" element={<Media />} />
          <Route path="/event-store" element={<EventStoreGift />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/activity-log" element={<ActivityLog />} />
          <Route path="/help" element={<Support />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
