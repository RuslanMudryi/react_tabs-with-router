import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Outlet } from 'react-router-dom';
import { getLinkClassNavbarItem } from './util/util';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getLinkClassNavbarItem}>
            Home
          </NavLink>
          <NavLink to="tabs" className={getLinkClassNavbarItem}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
