import { Link, Outlet } from "react-router-dom";
import { getAccountList } from "../features/account/utils";

export async function accountLoader() {
  const accountList = await getAccountList();
  return accountList;
}

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <nav>
          <ul>
            <li>
              <Link to={`sample/1`}>Your Name</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}