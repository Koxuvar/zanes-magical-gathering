import withSession from '../../lib/session';
import connectDB from '../../utils/mongodb';
import User from '../../models/user';
import bcrypt from 'bcrypt';

export default connectDB(withSession(async (req, res) =>
{
    const {userName, userPassword} = await req.body;

    try
    {
        const dbUser = await User.find({'name': userName});

        if(!dbUser)
        {   
            res.status(400).json({message: 'no User Found'});
            return;
        }
        
        const validPassword = await bcrypt.compare(
            userPassword,
            dbUser[0].password
        );
        
        if(!validPassword)
        {
            res.status(400).json({message: 'Login Failed. Please try again!'});
            return;
        }

        const user = {isLoggedIn: true, name: dbUser[0].name, decks:dbUser[0].decks};
        req.session.set('user', user);
        await req.session.save();
        res.status(200).json(user)
    }
    catch(err)
    {
        const {response: fetchResponse } = err;
        res.status(fetchResponse?.status || 500).json(err.data);
    }
}));