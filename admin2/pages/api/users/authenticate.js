const jwt = require('jsonwebtoken');
import getConfig from 'next/config';

import { apiHandler } from '../../../helpers/api';

const { serverRuntimeConfig } = getConfig();

export default apiHandler(handler);

function handler(req, res) {
    switch (req.method) {
        case 'POST':
            return authenticate();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function authenticate() {
        const { username, password } = req.body;
        
    
        // return basic user details and token
        return res.status(200).json({});
    }
}