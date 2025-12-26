## Showcase project for filing a bug report @ auth0-react

# Requirements

The project requires a valid Auth0 tenant to work. Please provide appropriate values through environment variables:

- VITE_AUTH0_DOMAIN
- VITE_AUTH0_CLIENT_ID
- VITE_AUTH0_REDIRECT_URI
- VITE_AUTH0_AUDIENCE

These are all expected by the Auth0Provider component, defined in src/App.tsx

# The issue

Wrapping a component with `withAuthenticationRequired` and using `useNavigate` on the same component triggers the
scenario.
This combination affects the router's ability to block navigation.

# Test case

The router has two routes for the same component. One wrapped by Auth0's `withAuthenticationRequired` (_/secured_),
while the other not (_/vanilla_).
When using the plain one, the blocker activates. When using the wrapped one, it doesn't.

# Evidence

Details on our findings are in the comments on src/AuthGuard.tsx. Everything seems to work if one either avoids
calling `useNavigate`, or avoids wrapping the component with `withAuthenticationRequired`.

# Workaround

We found out that using navigate with its component rather than function (that is, <Navigate to="/somewhere">) in
the guard is enough to get both things working fine.
