import axios from "axios";

export default async function handler(req, res)
{
    try
    {
        const search = req.query;
        const data = await axios.get(`https://api.scryfall.com/cards/autocomplete?q=${search.auto}`);

        if(!data)
        {
            res.status(500).json({message: 'Server Error getting auto complete'});
        }
        else
        {
            res.status(200).json(data);
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