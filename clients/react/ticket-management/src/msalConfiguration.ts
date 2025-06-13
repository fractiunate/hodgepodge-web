import { type Configuration } from "@azure/msal-browser";

export const configuration: Configuration = {
    auth: {
        clientId: "31a3d216-eeee-4ba0-a7ad-2e71928bb5c0",
        authority: "https://login.microsoftonline.com/87cf8e2d-6112-447e-97d2-e1fa50f73e00",
        redirectUri: "http://localhost:5173/",
        // postLogoutRedirectUri: "enter_postlogout_uri_here",
    },  
};

export const scopes = ["openid", "profile", "email"];
