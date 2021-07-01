const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gamecardSchema = new mongoose.Schema({
  object: {
    type: String,
    required: true 
  },
  id: {
    type: String,
    required: true
  },
  oracle_id: {
    type: String,
    required: true
  },
  multiverse_ids: {
    type: Array,
    required: true
  },
  mtgo_id: {
    type: Number,
    required: true
  },
  arena_id: {
    type: Number,
    required: true
  },
  tcgplayer_id: {
    type: Number,
    required: true
  },
  cardmarket_id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lang: {
    type: String,
    required: true
  },
  released_at: {
    type: String,
    required: true
  },
  uri: {
    type: String,
    required: true
  },
  scryfall_uri: {
    type: String,
    required: true
  },
  layout: {
    type: String,
    required: true
  },
  highres_image: {
    type: Boolean,
    required: true
  },
  image_status: {
    type: String,
    required: true
  },
  image_uris: {
    type: String,
    required: true
  },
  mana_cost: {
    type: String,
    required: true
  },
  cmc: {
    type: Number,
    required: true
  },
  type_line: {
    type: String,
    required: true
  },
  oracle_text: {
    type: String,
    required: true
  },
  power: {
    type: String,
    required: true
  },
  toughness: {
    type: String,
    required: true
  },
  colors: {
    type: String,
    required: true
  },
  color_identity: {
    type: String,
    required: true
  },
  keywords: {
    type: String,
    required: true
  },
  legalities: {
    type: String,
    required: true
  },
  games: {
    type: Array,
    required: true
  },
  reserved: {
    type: Boolean,
    required: true
  },
  foil: {
    type: Boolean,
    required: true
  },
  nonfoil: {
    type: Boolean,
    required: true
  },
  oversized: {
    type: Boolean,
    required: true
  },
  promo: {
    type: Boolean,
    required: true
  },
  reprint: {
    type: Boolean,
    required: true
  },
  variation: {
    type: Boolean,
    required: true
  },
  set: {
    type: String,
    required: true
  },
  set_name: {
    type: String,
    required: true
  },
  set_type: {
    type: String,
    required: true
  },
  set_uri: {
    type: String,
    required: true
  },
  set_search_uri: {
    type: String,
    required: true
  },
  scryfall_set_uri: {
    type: String,
    required: true
  },
  rulings_uri: {
    type: String,
    required: true
  },
  prints_search_uri: {
    type: String,
    required: true
  },
  collector_number: {
    type: String,
    required: true
  },
  digital: {
    type: Boolean,
    required: true
  },
  rarity: {
    type: String,
    required: true
  },
  watermark: {
    type: String,
    required: true
  },
  card_back_id: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  artist_ids: {
    type: Array,
    required: true
  },
  illustration_id: {
    type: String,
    required: true
  },
  border_color: {
    type: String,
    required: true
  },
  frame: {
    type: String,
    required: true
  },
  full_art: {
    type: Boolean,
    required: true
  },
  textless: {
    type: Boolean,
    required: true
  },
  booster: {
    type: Boolean,
    required: true
  },
  story_spotlight: {
    type: Boolean,
    required: true
  },
  edhrec_rank: {
    type: Number,
    required: true
  },
  preview: {
    type: String,
    required: true
  },
  prices: {
    type: String,
    required: true
  },
  related_uris: {
    type: String,
    required: true
  },
  purchase_uris: {
    type: String,
    required: true
  }
});

const gameCard = mongoose.model("gameCard", gamecardSchema);

module.exports = gameCard;