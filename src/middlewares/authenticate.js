import constants from "../config/constants";
import  utilityModel from "../Utility/utility.model";
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
class Authenticate {
    constructor () {}

    authenticate = async (passport) => {
      let opts = {
          jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
          secretOrKey : constants.JWT_SECRET
      };   

      passport.use(new JwtStrategy(opts, async(jwt_payload, done) => {
            let user = await utilityModel.getFields(["userId"], "User", {userId : jwt_payload.userId});
            if (user[0] && user[0].userId) {
                return done(null, user[0].userId);
            }
            else {
                return done(null,false);
            }
        }));
    } 
}

export default new Authenticate();