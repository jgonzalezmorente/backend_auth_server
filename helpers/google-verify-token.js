const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = '';

const client = new OAuth2Client(CLIENT_ID);

const validarGoogleIdToken = async (token) => {    
    try {
        
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [
                CLIENT_ID,
                '',
            ],
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        console.log('================== PAYLOAD ==================');
        console.log(payload);
    
        return {
            name: payload['name'],
            picture: payload['picture'],
            email: payload['email']
        }
    } catch (error) {
        console.log(error);
        return null;        
    }

    
}


module.exports = {
    validarGoogleIdToken
}