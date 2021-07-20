import withSession from '../../lib/session';
import connectDB from '../../utils/mongodb';
import User from '../../models/user';
import bcrypt from 'bcrypt';

export default connectDB(withSession(async (req, res) =>
{
    const {userName, userPassword} = await req.body;

    try
    {
        let passwordHash = await bcrypt.hash(userPassword, 10);

        let {name, decks, since} = User.create({
            name: userName,
            password: passwordHash,
            decks: []
        });
        
        const user = {isLoggedIn: true, name, decks, since};
        req.session.set('user', user);
        await req.session.save();
        res.status(200).json(user);
    }
    catch(err)
    {
        const {response: fetchResponse } = err;
        res.status(fetchResponse?.status || 500).json(err.data);
    }
}));