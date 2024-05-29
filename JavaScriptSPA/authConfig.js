 const msalConfig = {
  auth: {
    clientId: "5a7b3613-7175-4fab-9e53-22250045b5b5",
    authority: "https://login.microsoftonline.com/a5a0774f-498f-417d-8c07-6e978024b6e7",
    redirectUri: "http://localhost:3000/",
  },
  cache: {
    cacheLocation: "sessionStorage", 
    storeAuthStateInCookie: false, 
  }
};  
  
const loginRequest = {
  scopes: ["openid", "profile", "User.Read"]
};


const tokenRequest = {
  scopes: ["Mail.Read"]
};