const Users = require('../users/users-model');

const checkUsernameExists = async (req, res, next) => {
    try{
        const test = await Users.findBy({ username: req.body.username });

        if(test.length){
            req.user = test[0];
            next();
        }else{
            next({ status: 401, message: 'Invalid credentials'})
        }
    }catch(error){
        next(error);
    }
}