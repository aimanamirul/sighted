export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectURI = process.env.REDIRECT_URI;
const clientId = process.env.CLIENT_ID;

const scopes = [
    "user-top-read",
    "user-read-private",
    "user-read-email"
]

interface tokenObj {
    access_token? : string,
    token_type? : string,
    expires_in? : string,
}

export const loginURI = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

export const getTokenFromUrl = () : tokenObj => {
    let tokenObj = {};

    tokenObj = window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial
    }, {});

    return tokenObj;
}