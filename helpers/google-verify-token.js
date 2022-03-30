const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = '626541427885-9ol8e2k3gl280au5u52g79k62m0kr0i9.apps.googleusercontent.com';

const client = new OAuth2Client(CLIENT_ID);

const validarGoogleIdToken = async (token) => {

    try {
        
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [
                CLIENT_ID,
                '626541427885-1cuss2r6re2m04dqpv3qtqlfc07cjt5u.apps.googleusercontent.com',
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