import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Registration from "./pages/registration";

import Login from "./pages/Login";
import Home from "./pages/Home";
import RootLayout from "./Components/Rootlayout";
import Notloggedinuser from "./privaterouter/Notloggedinuser";
import Loggedinuser from "./privaterouter/Loggedinuser";
import Forgotpass from "./pages/forgotpassword";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Loggedinuser />}>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />}></Route>
          </Route>
        </Route>

        <Route element={<Notloggedinuser />}>
          <Route path="/signup" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgotpassword" element={<Forgotpass />}></Route>
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
