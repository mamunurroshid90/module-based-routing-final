import Account from "../../components/account/Account";
import Contact from "./contact";

export default {
  path: "/account",
  element: <Account />,
  children: [Contact],
};
