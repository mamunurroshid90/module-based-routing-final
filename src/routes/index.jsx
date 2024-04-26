import { createBrowserRouter } from "react-router-dom";
import registration from "./registration";
import login from "./login";
import home from "./home";
import account from "./account/account";
import contact from "./account/contact";

const router = createBrowserRouter([
  registration,
  login,
  home,
  account,
  contact,
]);

export default router;
