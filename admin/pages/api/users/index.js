import { apiHandler } from '../../../helpers/api';


export default apiHandler(handler);

function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return getUsers();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function getUsers() {
        // return users without passwords in the response
        const response = {};
        return res.status(200).json(response);
    }
}