import axios from "axios";

export default async function handler(req, res)
{
    try
    {
        const {search} = req.query;
        const searchCl = search[0].replace(/\s/g, '+');
        const data = await axios.get(`https://api.scryfall.com/cards/named?fuzzy=${searchCl}`);

        if(!data)
        {
            res.status(500).json({message: 'Server Error: No Card Found.'});
        }
        else
        {
            res.status(200).json(data.data);
        }
    }
    catch(err)
    {
        if(err)
        {
            res.status(500).json({message: `Server Error: ${err}`});
        }
    }
}