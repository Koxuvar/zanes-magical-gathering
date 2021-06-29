import axios from "axios";

export default async function handler(req, res) {
    try
    {
        const data = await axios.get("https://api.scryfall.com/cards/random");

        if(!data)
        {
            res.status(500).json({message: 'Server Error retreiving random card'});
        }
        else
        {
            let obj = {};
            obj.c = data.data;

            if(obj.c.legalities.standard === 'not_legal')
            {
                obj.legal = false;
            }
            else 
            {
                obj.legal = true;
            }

            res.status(200).json(obj);
        }
    }
    catch(err)
    {
        if(err)
        {
            res.status(500).json({message: `Internal Server Error ${err}`});
        }
    }
  }
  