import connectDB from "../../utils/mongodb";
import User from "../../models/user";

const bcrypt = require('bcrypt');

const handler = async(req, res) =>
{
    if (req.method == 'POST')
    {
        const {name, email, password} = req.body;
        if(name && email && password)
        {
            try
            {
                let passwordHash = await bcrypt.hash(password, 10);
                let user = new User({
                    name,
                    email,
                    password: passwordHash
                });

                let userCreated = await user.save();
                return res.status(200).send(userCreated);
            }
            catch(err)
            {
                return res.status(500).send(err.message);
            }
        }
        else
        {
            res.status(422).send('data_incomplete');
        }
    }
    else
    {
        res.status(422).send('req_method_not_supported');
    }
};

export default connectDB(handler);