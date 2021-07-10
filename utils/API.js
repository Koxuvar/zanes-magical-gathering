import axios from "axios";

export default 
{
    searchTerms: async function(query)
    {
        try
        {
            console.log('fuuuuu');
            const thing = await axios.get(`https://api.scryfall.com/cards/autocomplete?q=${query}`);
            if(thing.data == undefined)
            {
                return [];
            }
            return thing;
        }
        catch(err)
        {
            if(err)
            {
                console.log('Error 1');
            }
        }
    },

    searchCards: async function(query)
    {
        try
        {
            const searchCl = query.replace(/\s/g, '+');
            console.log('hello');
            const thing = await axios.get(`https://api.scryfall.com/cards/named?fuzzy=${searchCl}`);
            
            return thing;
            
        }
        catch(err)
        {
            if(err)
            {
                console.log('error2');
            }
        }
    }
}