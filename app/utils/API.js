import axios from "axios";

export default 
{
    searchTerms: function(query)
    {
        return axios.get(`https://api.scryfall.com/cards/autocomplete?q=${query}`)
    },

    searchCards: function(query)
    {
        const searchCl = query.replace(/\s/g, '+');
        return axios.get(`https://api.scryfall.com/cards/named?fuzzy=${searchCl}`);
    }
}