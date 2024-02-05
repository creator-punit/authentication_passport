import passport from "passport";
import { OAuthStrategy } from "passport-google-oauth";

passport.use(new OAuthStrategy({}), () => {});
