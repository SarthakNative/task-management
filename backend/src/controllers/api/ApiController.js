const Response = require('../../utils/Response');

module.exports = {

    /**
     * This is an sample API controller.
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    //hello
    sample: async (req, res) => {
        return res.json(Response.success("Get User", req.user));
    }
}