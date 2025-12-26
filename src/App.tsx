import { Auth0Provider } from "@auth0/auth0-react";
import { NavLink, Outlet } from "react-router";

export default function Root() {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;
  if (!(domain && clientId && redirectUri)) {
    return null;
  }
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        audience: audience,
        redirect_uri: redirectUri,
      }}
    >
      <div>
        <ul>
          <li>
            <NavLink to={"/secured"}>secured</NavLink>
          </li>
          <li>
            <NavLink to={"/vanilla"}>vanilla</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </Auth0Provider>
  );
}
