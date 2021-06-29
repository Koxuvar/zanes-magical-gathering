import axios from "axios";

export default 
{
    searchTerms: function(query)
    {
        return axios.get(`https://api.scryfall.com/cards/autocomplete?q=${query}`)
    }
}