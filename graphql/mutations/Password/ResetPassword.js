const User = require("../../types/User")
const emailInput = require("../../inputs/emailInput")
const { Users } = require("../../../database/models")
const sendmail = require("sendmail")()
const jwt = require('jsonwebtoken');
const os = require("os");

module.exports = {
    type: User,
    args: {
        email: {
            type: emailInput
        }
    },
    resolve(root, args) {

        const getUser = async (email) => {

            const user = await Users.findOne(email)

            if (!user) {
                return new Error("Error")
            }

            const plainUserObject = Object.assign({}, user);

            const token = jwt.sign(
                plainUserObject,
                process.env.SECRET,
                { expiresIn: 60 * 60 }
            );

            user.reset_token = token;
            const save_result = await user.save()

            sendmail({
                from: 'no-reply@netflix-copy.com',
                to: process.env.ENV === 'development' ? process.env.EMAIL_TEST : plainUserObject.email,
                subject: 'Reset password email',
                html: `<html><body><div>
                    <a title="Reset password link" href="http://${process.env.HOSTNAME}:${process.env.PORT}/?token=${token}">Reset password</a>
                </body></div></html>`,
            }, function (err, reply) {
                console.log(err && err.stack);
                console.dir(reply);
            });

            return user;
        }

        return getUser(args.email)
    }
}