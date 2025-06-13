
export const msalConfig = {
  auth: {
    clientId: "YOUR_CLIENT_ID_HERE",
    authority: "https://login.microsoftonline.com/YOUR_TENANT_ID",
    redirectUri: "http://localhost:3000", // or your app's redirect URI
  },
  cache: {
    cacheLocation: "localStorage", // or sessionStorage
    storeAuthStateInCookie: false,
  },
};