import { withAuthenticationRequired } from "@auth0/auth0-react";
import { createElement, type ComponentType } from "react";
import { useNavigate } from "react-router";

// to make the blocker work on /secured
export const AuthGuard = (props: { component: ComponentType }) => {
  useNavigate(); // comment out this line

  const Component = withAuthenticationRequired(props.component, {
    onRedirecting: () => <div>loading!</div>,
  });

  return <Component />;
  // or comment lines 9 to 13 and uncomment 15
  // return createElement(props.component)
};
