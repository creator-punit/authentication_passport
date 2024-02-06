import { User } from "../model/user.model.js";

const register = async (req, res) => {
  
   try {
     const {username, password} = req.body
     const newUser = new User({ username, password });
     const registeredUser = await newUser.save()
     res.send(registeredUser);
   } catch (error) {
    throw error
   }
};

export { register };
