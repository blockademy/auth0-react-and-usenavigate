import { withAuthenticationRequired } from "@auth0/auth0-react";
import { type ComponentType } from "react";
import { useNavigate } from "react-router";

// to make the blocker work on /secured
export const createAuthGuard = (component: ComponentType) => {
  const SecuredComponent = withAuthenticationRequired(component, {
    onRedirecting: () => <div>loading!</div>,
  });

  return () => {
    useNavigate();
    return <SecuredComponent />;
  };
};
