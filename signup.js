// Initialize the Google Sign-In API with your client ID
function initGoogleSignIn() {
    gapi.load('auth2', function () {
        gapi.auth2.init({
            client_id: 'YOUR_CLIENT_ID_HERE', // Replace with your Google OAuth client ID
        });
    });
}

// Function to handle Google Sign-In
function handleGoogleSignIn() {
    const auth2 = gapi.auth2.getAuthInstance();

    auth2.signIn().then(function (googleUser) {
        const profile = googleUser.getBasicProfile();
        const userEmail = profile.getEmail();

        // You can send userEmail to your server for further processing
        // Example: Make an API request to your backend to authenticate the user
        // and store user information in your database.

        console.log('User signed in with Google: ' + userEmail);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Load the Google Sign-In API
    initGoogleSignIn();

    const googleLoginBtn = document.getElementById('google-login');
    googleLoginBtn.addEventListener('click', handleGoogleSignIn);
});
