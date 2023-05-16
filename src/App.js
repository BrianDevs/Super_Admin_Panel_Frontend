import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Admin } from "./components/Admin";
import { AdminLayout } from "./layout/AdminLayout";
import { Analytics } from "./pages/Analytics";
import { Profile } from "./pages/Profile";
import { Providers, View } from "./pages/Providers";
import AdminLogin from "./components/AdminLogin";
import Forgotpassword from "./pages/Forgotpassword";
import Providerprofile from "./pages/Providerprofile";
import Reviews from "./pages/Reviews";
import { Business } from "./pages/Business";
import Businessadmin from "./pages/Businessadmin";
import Businessproviderprofile from "./pages/Businessproviderprofile";
import { User } from "./pages/User";
import Profileuser from "./pages/Profileuser";
import Clientreviews from "./pages/Clientreviews";
import { Useractivity } from "./pages/Useractivity";
import Bookings from "./pages/Bookings";
import Todaysbooking from "./pages/Todaysbooking";
import Upcomingbookings from "./pages/Upcomingbookings";
import { Feedback } from "./pages/Feedback";
import Chats from "./pages/Chats";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route path="/" element={<Analytics />} />
          <Route path="/Profile" element={<Profile />} />

          <Route path="/Business" element={<Business />} />
          <Route path="/Businessadmin" element={<Businessadmin />} />
          <Route
            path="/Businessproviderprofile"
            element={<Businessproviderprofile />}
          />
          <Route path="/Userprofile" element={<Profileuser />} />
          <Route path="/User" element={<User />} />
          <Route path="/Bookings" element={<Bookings />} />
          <Route path="/Useractivity" element={<Useractivity />} />
          <Route path="/view" element={<Providers />} />
          <Route path="/Providerprofile" element={<Providerprofile />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Clientreviews" element={<Clientreviews />} />
          <Route path="/Todaysbooking" element={<Todaysbooking />} />
          <Route path="/Upcomingbookings" element={<Upcomingbookings />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/Chats" element={<Chats />} />
        </Route>
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/Forgotpassword" element={<Forgotpassword />} />
      </Routes>
    </div>
  );
}

export default App;
