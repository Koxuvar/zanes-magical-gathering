const mongoose = require("mongoose");
const db = require("../models");

// This file empties the card collection and inserts the cards below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactcards"
);

const gameCardSeed = [
  {
    "object": "card",
    "id": "c5bbffb9-1f1c-40e5-97f4-29bf1fc68625",
    "oracle_id": "bbe41a21-f8ad-4e5c-88d8-2a41dfd32d13",
    "multiverse_ids": [
      503757
    ],
    "mtgo_id": 87625,
    "arena_id": 75188,
    "tcgplayer_id": 230179,
    "cardmarket_id": 530377,
    "name": "Quakebringer",
    "lang": "en",
    "released_at": "2021-02-05",
    "uri": "https://api.scryfall.com/cards/c5bbffb9-1f1c-40e5-97f4-29bf1fc68625",
    "scryfall_uri": "https://scryfall.com/card/khm/145/quakebringer?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/c/5/c5bbffb9-1f1c-40e5-97f4-29bf1fc68625.jpg?1614988065",
      "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/5/c5bbffb9-1f1c-40e5-97f4-29bf1fc68625.jpg?1614988065",
      "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/c/5/c5bbffb9-1f1c-40e5-97f4-29bf1fc68625.jpg?1614988065",
      "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/c/5/c5bbffb9-1f1c-40e5-97f4-29bf1fc68625.png?1614988065",
      "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/5/c5bbffb9-1f1c-40e5-97f4-29bf1fc68625.jpg?1614988065",
      "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/5/c5bbffb9-1f1c-40e5-97f4-29bf1fc68625.jpg?1614988065"
    },
    "mana_cost": "{3}{R}{R}",
    "cmc": 5.0,
    "type_line": "Creature — Giant Berserker",
    "oracle_text": "Your opponents can't gain life.\nAt the beginning of your upkeep, Quakebringer deals 2 damage to each opponent. This ability triggers only if Quakebringer is on the battlefield or if Quakebringer is in your graveyard and you control a Giant.\nForetell {2}{R}{R}",
    "power": "5",
    "toughness": "4",
    "colors": [
      "R"
    ],
    "color_identity": [
      "R"
    ],
    "keywords": [
      "Foretell"
    ],
    "legalities": {
      "standard": "legal",
      "future": "legal",
      "historic": "legal",
      "gladiator": "legal",
      "pioneer": "legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "not_legal",
      "vintage": "legal",
      "penny": "not_legal",
      "commander": "legal",
      "brawl": "legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal"
    },
    "games": [
      "arena",
      "paper",
      "mtgo"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "oversized": false,
    "promo": false,
    "reprint": false,
    "variation": false,
    "set": "khm",
    "set_name": "Kaldheim",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/43057fad-b1c1-437f-bc48-0045bce6d8c9",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Akhm&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/khm?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/c5bbffb9-1f1c-40e5-97f4-29bf1fc68625/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Abbe41a21-f8ad-4e5c-88d8-2a41dfd32d13&unique=prints",
    "collector_number": "145",
    "digital": false,
    "rarity": "mythic",
    "watermark": "foretell",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Lucas Graciano",
    "artist_ids": [
      "ce98f39c-7cdd-47e6-a520-6c50443bb4c2"
    ],
    "illustration_id": "b68e725a-b328-44e1-9f23-de679b9f45bc",
    "border_color": "black",
    "frame": "2015",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 7223,
    "preview": {
      "source": "Cedric Phillips",
      "source_uri": "https://twitter.com/CedricAPhillips/status/1347982754789539841",
      "previewed_at": "2021-01-09"
    },
    "prices": {
      "usd": "1.53",
      "usd_foil": "2.21",
      "eur": "2.62",
      "eur_foil": "2.95",
      "tix": "2.15"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=503757",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Quakebringer&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Quakebringer&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Quakebringer",
      "mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Quakebringer"
    },
    "purchase_uris": {
      "tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=230179&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Quakebringer&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/87625?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },

  {
    "object": "card",
    "id": "ca7f2426-5a56-4dca-a059-65aa7266ac83",
    "oracle_id": "f5c38c01-4a40-469f-91a0-7479daf4e8e7",
    "multiverse_ids": [
      129751
    ],
    "mtgo_id": 27436,
    "mtgo_foil_id": 27437,
    "tcgplayer_id": 15345,
    "cardmarket_id": 16523,
    "name": "Sulfurous Springs",
    "lang": "en",
    "released_at": "2007-07-13",
    "uri": "https://api.scryfall.com/cards/ca7f2426-5a56-4dca-a059-65aa7266ac83",
    "scryfall_uri": "https://scryfall.com/card/10e/359/sulfurous-springs?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/c/a/ca7f2426-5a56-4dca-a059-65aa7266ac83.jpg?1562555138",
      "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/a/ca7f2426-5a56-4dca-a059-65aa7266ac83.jpg?1562555138",
      "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/c/a/ca7f2426-5a56-4dca-a059-65aa7266ac83.jpg?1562555138",
      "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/c/a/ca7f2426-5a56-4dca-a059-65aa7266ac83.png?1562555138",
      "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/a/ca7f2426-5a56-4dca-a059-65aa7266ac83.jpg?1562555138",
      "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/a/ca7f2426-5a56-4dca-a059-65aa7266ac83.jpg?1562555138"
    },
    "mana_cost": "",
    "cmc": 0.0,
    "type_line": "Land",
    "oracle_text": "{T}: Add {C}.\n{T}: Add {B} or {R}. Sulfurous Springs deals 1 damage to you.",
    "colors": [
  
    ],
    "color_identity": [
      "B",
      "R"
    ],
    "keywords": [
  
    ],
    "produced_mana": [
      "B",
      "C",
      "R"
    ],
    "legalities": {
      "standard": "not_legal",
      "future": "not_legal",
      "historic": "not_legal",
      "gladiator": "not_legal",
      "pioneer": "not_legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "not_legal",
      "vintage": "legal",
      "penny": "not_legal",
      "commander": "legal",
      "brawl": "not_legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "legal"
    },
    "games": [
      "paper",
      "mtgo"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "oversized": false,
    "promo": false,
    "reprint": true,
    "variation": false,
    "set": "10e",
    "set_name": "Tenth Edition",
    "set_type": "core",
    "set_uri": "https://api.scryfall.com/sets/a66a6124-0d81-488d-b080-91f5ba7fbad0",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3A10e&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/10e?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/ca7f2426-5a56-4dca-a059-65aa7266ac83/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Af5c38c01-4a40-469f-91a0-7479daf4e8e7&unique=prints",
    "collector_number": "359",
    "digital": false,
    "rarity": "rare",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Rob Alexander",
    "artist_ids": [
      "35906871-6c78-4ab2-9ed1-e6792c8efb74"
    ],
    "illustration_id": "28e06825-6a2b-4c7d-89c0-421a534847ee",
    "border_color": "black",
    "frame": "2003",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 653,
    "prices": {
      "usd": "17.13",
      "usd_foil": "34.99",
      "eur": "4.11",
      "eur_foil": "19.90",
      "tix": "0.10"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=129751",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Sulfurous+Springs&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Sulfurous+Springs&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Sulfurous+Springs",
      "mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Sulfurous+Springs"
    },
    "purchase_uris": {
      "tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=15345&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Sulfurous+Springs&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/27436?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },

  {
    "object": "card",
    "id": "26b69045-2b22-4fba-868a-b91c93eb960a",
    "oracle_id": "d09b0648-e324-4a16-b78c-d1849177c04f",
    "multiverse_ids": [
      409883
    ],
    "mtgo_id": 60318,
    "mtgo_foil_id": 60319,
    "tcgplayer_id": 116452,
    "cardmarket_id": 289177,
    "name": "Sanitarium Skeleton",
    "lang": "en",
    "released_at": "2016-04-08",
    "uri": "https://api.scryfall.com/cards/26b69045-2b22-4fba-868a-b91c93eb960a",
    "scryfall_uri": "https://scryfall.com/card/soi/133/sanitarium-skeleton?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/2/6/26b69045-2b22-4fba-868a-b91c93eb960a.jpg?1576384577",
      "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/2/6/26b69045-2b22-4fba-868a-b91c93eb960a.jpg?1576384577",
      "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/2/6/26b69045-2b22-4fba-868a-b91c93eb960a.jpg?1576384577",
      "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/2/6/26b69045-2b22-4fba-868a-b91c93eb960a.png?1576384577",
      "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/2/6/26b69045-2b22-4fba-868a-b91c93eb960a.jpg?1576384577",
      "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/2/6/26b69045-2b22-4fba-868a-b91c93eb960a.jpg?1576384577"
    },
    "mana_cost": "{B}",
    "cmc": 1.0,
    "type_line": "Creature — Skeleton",
    "oracle_text": "{2}{B}: Return Sanitarium Skeleton from your graveyard to your hand.",
    "power": "1",
    "toughness": "2",
    "colors": [
      "B"
    ],
    "color_identity": [
      "B"
    ],
    "keywords": [
  
    ],
    "legalities": {
      "standard": "not_legal",
      "future": "not_legal",
      "historic": "legal",
      "gladiator": "legal",
      "pioneer": "legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "legal",
      "vintage": "legal",
      "penny": "legal",
      "commander": "legal",
      "brawl": "not_legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal"
    },
    "games": [
      "paper",
      "mtgo"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "oversized": false,
    "promo": false,
    "reprint": false,
    "variation": false,
    "set": "soi",
    "set_name": "Shadows over Innistrad",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/5e914d7e-c1e9-446c-a33d-d093c02b2743",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Asoi&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/soi?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/26b69045-2b22-4fba-868a-b91c93eb960a/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Ad09b0648-e324-4a16-b78c-d1849177c04f&unique=prints",
    "collector_number": "133",
    "digital": false,
    "rarity": "common",
    "flavor_text": "His mind was lost long before his flesh.",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Kev Walker",
    "artist_ids": [
      "f366a0ee-a0cd-466d-ba6a-90058c7a31a6"
    ],
    "illustration_id": "b2a08324-1197-44dc-bb89-2c3610a8ec12",
    "border_color": "black",
    "frame": "2015",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 4549,
    "prices": {
      "usd": "0.11",
      "usd_foil": "0.36",
      "eur": "0.09",
      "eur_foil": "0.25",
      "tix": "0.03"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=409883",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Sanitarium+Skeleton&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Sanitarium+Skeleton&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Sanitarium+Skeleton",
      "mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Sanitarium+Skeleton"
    },
    "purchase_uris": {
      "tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=116452&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Sanitarium+Skeleton&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/60318?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },

  {
    "object": "card",
    "id": "ee0ecbc8-767b-475c-bb74-2abc0da5d745",
    "oracle_id": "24d2cbf6-6268-4da3-8413-6c76679576fe",
    "multiverse_ids": [
      45315
    ],
    "mtgo_id": 19489,
    "mtgo_foil_id": 19490,
    "tcgplayer_id": 11092,
    "cardmarket_id": 768,
    "name": "Execute",
    "lang": "en",
    "released_at": "2003-07-28",
    "uri": "https://api.scryfall.com/cards/ee0ecbc8-767b-475c-bb74-2abc0da5d745",
    "scryfall_uri": "https://scryfall.com/card/8ed/132/execute?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/e/e/ee0ecbc8-767b-475c-bb74-2abc0da5d745.jpg?1562942812",
      "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/e/e/ee0ecbc8-767b-475c-bb74-2abc0da5d745.jpg?1562942812",
      "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/e/e/ee0ecbc8-767b-475c-bb74-2abc0da5d745.jpg?1562942812",
      "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/e/e/ee0ecbc8-767b-475c-bb74-2abc0da5d745.png?1562942812",
      "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/e/ee0ecbc8-767b-475c-bb74-2abc0da5d745.jpg?1562942812",
      "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/e/e/ee0ecbc8-767b-475c-bb74-2abc0da5d745.jpg?1562942812"
    },
    "mana_cost": "{2}{B}",
    "cmc": 3.0,
    "type_line": "Instant",
    "oracle_text": "Destroy target white creature. It can't be regenerated.\nDraw a card.",
    "colors": [
      "B"
    ],
    "color_identity": [
      "B"
    ],
    "keywords": [
  
    ],
    "legalities": {
      "standard": "not_legal",
      "future": "not_legal",
      "historic": "not_legal",
      "gladiator": "not_legal",
      "pioneer": "not_legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "not_legal",
      "vintage": "legal",
      "penny": "legal",
      "commander": "legal",
      "brawl": "not_legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "legal"
    },
    "games": [
      "paper",
      "mtgo"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "oversized": false,
    "promo": false,
    "reprint": true,
    "variation": false,
    "set": "8ed",
    "set_name": "Eighth Edition",
    "set_type": "core",
    "set_uri": "https://api.scryfall.com/sets/cae8d29d-5979-4d8f-884d-7f3183bcc886",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3A8ed&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/8ed?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/ee0ecbc8-767b-475c-bb74-2abc0da5d745/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A24d2cbf6-6268-4da3-8413-6c76679576fe&unique=prints",
    "collector_number": "132",
    "digital": false,
    "rarity": "uncommon",
    "flavor_text": "\"Any fool who would die for honor is better off dead.\"\n—Cabal Patriarch",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Gary Ruddell",
    "artist_ids": [
      "086111c7-93f0-4bab-b339-6fe1c00d693c"
    ],
    "illustration_id": "4f4a9ae3-ece7-4cd2-b7ce-cde6fa3c44e3",
    "border_color": "white",
    "frame": "2003",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 18188,
    "prices": {
      "usd": "0.04",
      "usd_foil": null,
      "eur": "0.01",
      "eur_foil": "0.10",
      "tix": "0.03"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=45315",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Execute&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Execute&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Execute",
      "mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Execute"
    },
    "purchase_uris": {
      "tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=11092&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Execute&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/19489?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },

  {
    "object": "card",
    "id": "cd8958d5-e4a9-42ee-ae82-d184c4b92c9d",
    "oracle_id": "00ad27a1-9162-408d-ac75-970e45d7e06c",
    "multiverse_ids": [
      31832
    ],
    "mtgo_id": 16485,
    "mtgo_foil_id": 16486,
    "tcgplayer_id": 9581,
    "cardmarket_id": 2718,
    "name": "Patchwork Gnomes",
    "lang": "en",
    "released_at": "2001-10-01",
    "uri": "https://api.scryfall.com/cards/cd8958d5-e4a9-42ee-ae82-d184c4b92c9d",
    "scryfall_uri": "https://scryfall.com/card/ody/306/patchwork-gnomes?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/c/d/cd8958d5-e4a9-42ee-ae82-d184c4b92c9d.jpg?1562933479",
      "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/c/d/cd8958d5-e4a9-42ee-ae82-d184c4b92c9d.jpg?1562933479",
      "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/c/d/cd8958d5-e4a9-42ee-ae82-d184c4b92c9d.jpg?1562933479",
      "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/c/d/cd8958d5-e4a9-42ee-ae82-d184c4b92c9d.png?1562933479",
      "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/c/d/cd8958d5-e4a9-42ee-ae82-d184c4b92c9d.jpg?1562933479",
      "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/c/d/cd8958d5-e4a9-42ee-ae82-d184c4b92c9d.jpg?1562933479"
    },
    "mana_cost": "{3}",
    "cmc": 3.0,
    "type_line": "Artifact Creature — Gnome",
    "oracle_text": "Discard a card: Regenerate Patchwork Gnomes. (The next time this creature would be destroyed, instead tap it, remove it from combat, and heal all damage on it.)",
    "power": "2",
    "toughness": "1",
    "colors": [
  
    ],
    "color_identity": [
  
    ],
    "keywords": [
  
    ],
    "legalities": {
      "standard": "not_legal",
      "future": "not_legal",
      "historic": "not_legal",
      "gladiator": "not_legal",
      "pioneer": "not_legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "legal",
      "vintage": "legal",
      "penny": "legal",
      "commander": "legal",
      "brawl": "not_legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "legal"
    },
    "games": [
      "paper",
      "mtgo"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "oversized": false,
    "promo": false,
    "reprint": true,
    "variation": false,
    "set": "ody",
    "set_name": "Odyssey",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/b0d90d2d-494a-4224-bfa0-36ce5ee281b1",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aody&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/ody?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/cd8958d5-e4a9-42ee-ae82-d184c4b92c9d/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A00ad27a1-9162-408d-ac75-970e45d7e06c&unique=prints",
    "collector_number": "306",
    "digital": false,
    "rarity": "uncommon",
    "flavor_text": "When building gnomes, dwarves adhere to the highest standards. The gnomes themselves aren't as particular.",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Jerry Tiritilli",
    "artist_ids": [
      "54366fc1-c5b1-4faa-a7a5-de2abc119de1"
    ],
    "illustration_id": "74ecaa42-7055-47d9-b075-3daf864e6b3a",
    "border_color": "black",
    "frame": "1997",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 12055,
    "prices": {
      "usd": "0.13",
      "usd_foil": "0.50",
      "eur": "0.25",
      "eur_foil": "0.47",
      "tix": "0.05"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=31832",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Patchwork+Gnomes&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Patchwork+Gnomes&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Patchwork+Gnomes",
      "mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Patchwork+Gnomes"
    },
    "purchase_uris": {
      "tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=9581&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Patchwork+Gnomes&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/16485?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },

  {
    "object": "card",
    "id": "6e865bf1-0c46-4505-bbe9-bdeef7ff1100",
    "oracle_id": "a7c46e5f-6e3a-405b-86fa-404d3b6971db",
    "multiverse_ids": [
  
    ],
    "tcgplayer_id": 203698,
    "name": "Chronostutter",
    "lang": "en",
    "released_at": "2019-11-07",
    "uri": "https://api.scryfall.com/cards/6e865bf1-0c46-4505-bbe9-bdeef7ff1100",
    "scryfall_uri": "https://scryfall.com/card/mb1/316/chronostutter?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/6/e/6e865bf1-0c46-4505-bbe9-bdeef7ff1100.jpg?1573507071",
      "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/6/e/6e865bf1-0c46-4505-bbe9-bdeef7ff1100.jpg?1573507071",
      "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/6/e/6e865bf1-0c46-4505-bbe9-bdeef7ff1100.jpg?1573507071",
      "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/6/e/6e865bf1-0c46-4505-bbe9-bdeef7ff1100.png?1573507071",
      "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/6/e/6e865bf1-0c46-4505-bbe9-bdeef7ff1100.jpg?1573507071",
      "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/6/e/6e865bf1-0c46-4505-bbe9-bdeef7ff1100.jpg?1573507071"
    },
    "mana_cost": "{5}{U}",
    "cmc": 6.0,
    "type_line": "Instant",
    "oracle_text": "Put target creature into its owner's library second from the top.",
    "colors": [
      "U"
    ],
    "color_identity": [
      "U"
    ],
    "keywords": [
  
    ],
    "legalities": {
      "standard": "not_legal",
      "future": "not_legal",
      "historic": "not_legal",
      "gladiator": "not_legal",
      "pioneer": "legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "legal",
      "vintage": "legal",
      "penny": "not_legal",
      "commander": "legal",
      "brawl": "not_legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal"
    },
    "games": [
      "paper"
    ],
    "reserved": false,
    "foil": false,
    "nonfoil": true,
    "oversized": false,
    "promo": false,
    "reprint": true,
    "variation": false,
    "set": "mb1",
    "set_name": "Mystery Booster",
    "set_type": "masters",
    "set_uri": "https://api.scryfall.com/sets/d13bfc70-6137-4179-aa96-da30fd84de29",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Amb1&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/mb1?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/6e865bf1-0c46-4505-bbe9-bdeef7ff1100/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Aa7c46e5f-6e3a-405b-86fa-404d3b6971db&unique=prints",
    "collector_number": "316",
    "digital": false,
    "rarity": "common",
    "flavor_text": "Timing is everything.",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Seb McKinnon",
    "artist_ids": [
      "ad4caca0-8d89-44ce-a1a6-d5ca905bd6fb"
    ],
    "illustration_id": "ccd122b7-2ef5-4d90-8dc8-352db266ed95",
    "border_color": "black",
    "frame": "2015",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 16807,
    "prices": {
      "usd": "0.07",
      "usd_foil": null,
      "eur": null,
      "eur_foil": null,
      "tix": null
    },
    "related_uris": {
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Chronostutter&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Chronostutter&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Chronostutter",
      "mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Chronostutter"
    },
    "purchase_uris": {
      "tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=203698&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Chronostutter&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Chronostutter&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },

  {
    "object": "card",
    "id": "a5423cb8-38a2-4769-8999-de6ab5ebc294",
    "oracle_id": "0cc6d683-366f-4ae4-be60-20ad9621fdaf",
    "multiverse_ids": [
  
    ],
    "tcgplayer_id": 38272,
    "cardmarket_id": 17600,
    "name": "Stroke of Genius",
    "lang": "en",
    "released_at": "1998-01-01",
    "uri": "https://api.scryfall.com/cards/a5423cb8-38a2-4769-8999-de6ab5ebc294",
    "scryfall_uri": "https://scryfall.com/card/jgp/2/stroke-of-genius?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/a/5/a5423cb8-38a2-4769-8999-de6ab5ebc294.jpg?1561757759",
      "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/5/a5423cb8-38a2-4769-8999-de6ab5ebc294.jpg?1561757759",
      "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/a/5/a5423cb8-38a2-4769-8999-de6ab5ebc294.jpg?1561757759",
      "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/a/5/a5423cb8-38a2-4769-8999-de6ab5ebc294.png?1561757759",
      "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/5/a5423cb8-38a2-4769-8999-de6ab5ebc294.jpg?1561757759",
      "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/5/a5423cb8-38a2-4769-8999-de6ab5ebc294.jpg?1561757759"
    },
    "mana_cost": "{X}{2}{U}",
    "cmc": 3.0,
    "type_line": "Instant",
    "oracle_text": "Target player draws X cards.",
    "colors": [
      "U"
    ],
    "color_identity": [
      "U"
    ],
    "keywords": [
  
    ],
    "legalities": {
      "standard": "not_legal",
      "future": "not_legal",
      "historic": "not_legal",
      "gladiator": "not_legal",
      "pioneer": "not_legal",
      "modern": "not_legal",
      "legacy": "legal",
      "pauper": "not_legal",
      "vintage": "legal",
      "penny": "not_legal",
      "commander": "legal",
      "brawl": "not_legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "legal"
    },
    "games": [
      "paper"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": false,
    "oversized": false,
    "promo": true,
    "reprint": true,
    "variation": false,
    "set": "jgp",
    "set_name": "Judge Gift Cards 1998",
    "set_type": "promo",
    "set_uri": "https://api.scryfall.com/sets/804c01dd-4714-440a-950e-2f2130d781f3",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Ajgp&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/jgp?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/a5423cb8-38a2-4769-8999-de6ab5ebc294/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A0cc6d683-366f-4ae4-be60-20ad9621fdaf&unique=prints",
    "collector_number": "2",
    "digital": false,
    "rarity": "rare",
    "flavor_text": "After a hundred failed experiments, Urza was stunned to find that common silver passed through the portal undamaged. He immediately designed a golem made of the metal.",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Stephen Daniele",
    "artist_ids": [
      "a267f9bb-072b-410a-a704-50f4d19020d8"
    ],
    "illustration_id": "dd3f514c-a057-4083-ab5c-d8d1f271d813",
    "border_color": "black",
    "frame": "1997",
    "full_art": false,
    "textless": false,
    "booster": false,
    "story_spotlight": false,
    "promo_types": [
      "judgegift"
    ],
    "edhrec_rank": 1407,
    "prices": {
      "usd": null,
      "usd_foil": "63.39",
      "eur": null,
      "eur_foil": "49.00",
      "tix": null
    },
    "related_uris": {
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Stroke+of+Genius&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Stroke+of+Genius&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Stroke+of+Genius",
      "mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Stroke+of+Genius"
    },
    "purchase_uris": {
      "tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=38272&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Stroke+of+Genius&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Stroke+of+Genius&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },

  {
    "object": "card",
    "id": "64a07e7d-e203-4ecd-98bf-f8ef08c38d78",
    "oracle_id": "bc8b2b89-7118-4662-beda-9108cd08491b",
    "multiverse_ids": [
      380490
    ],
    "mtgo_id": 52006,
    "mtgo_foil_id": 52007,
    "tcgplayer_id": 82328,
    "cardmarket_id": 266727,
    "name": "Rouse the Mob",
    "lang": "en",
    "released_at": "2014-05-02",
    "uri": "https://api.scryfall.com/cards/64a07e7d-e203-4ecd-98bf-f8ef08c38d78",
    "scryfall_uri": "https://scryfall.com/card/jou/109/rouse-the-mob?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/6/4/64a07e7d-e203-4ecd-98bf-f8ef08c38d78.jpg?1593096082",
      "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/6/4/64a07e7d-e203-4ecd-98bf-f8ef08c38d78.jpg?1593096082",
      "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/6/4/64a07e7d-e203-4ecd-98bf-f8ef08c38d78.jpg?1593096082",
      "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/6/4/64a07e7d-e203-4ecd-98bf-f8ef08c38d78.png?1593096082",
      "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/6/4/64a07e7d-e203-4ecd-98bf-f8ef08c38d78.jpg?1593096082",
      "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/6/4/64a07e7d-e203-4ecd-98bf-f8ef08c38d78.jpg?1593096082"
    },
    "mana_cost": "{R}",
    "cmc": 1.0,
    "type_line": "Instant",
    "oracle_text": "Strive — This spell costs {2}{R} more to cast for each target beyond the first.\nAny number of target creatures each get +2/+0 and gain trample until end of turn.",
    "colors": [
      "R"
    ],
    "color_identity": [
      "R"
    ],
    "keywords": [
      "Strive"
    ],
    "legalities": {
      "standard": "not_legal",
      "future": "not_legal",
      "historic": "not_legal",
      "gladiator": "not_legal",
      "pioneer": "legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "legal",
      "vintage": "legal",
      "penny": "legal",
      "commander": "legal",
      "brawl": "not_legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal"
    },
    "games": [
      "paper",
      "mtgo"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "oversized": false,
    "promo": false,
    "reprint": false,
    "variation": false,
    "set": "jou",
    "set_name": "Journey into Nyx",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/204d2dca-1887-4721-9558-164aa7bbeb4f",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Ajou&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/jou?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/64a07e7d-e203-4ecd-98bf-f8ef08c38d78/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Abc8b2b89-7118-4662-beda-9108cd08491b&unique=prints",
    "collector_number": "109",
    "digital": false,
    "rarity": "common",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "John Stanko",
    "artist_ids": [
      "b0f038a0-73b5-4806-918e-9cd11b5f92e1"
    ],
    "illustration_id": "6850690b-bf71-4d3b-8624-7490cd4d31fe",
    "border_color": "black",
    "frame": "2003",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 8830,
    "prices": {
      "usd": "0.08",
      "usd_foil": "0.25",
      "eur": "0.10",
      "eur_foil": "0.19",
      "tix": "0.03"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=380490",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Rouse+the+Mob&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Rouse+the+Mob&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Rouse+the+Mob",
      "mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Rouse+the+Mob"
    },
    "purchase_uris": {
      "tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=82328&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Rouse+the+Mob&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/52006?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },

  {
    "object": "card",
    "id": "197080a9-ebb5-4a8b-81f8-0368c5bba35a",
    "oracle_id": "b2c6aa39-2d2a-459c-a555-fb48ba993373",
    "multiverse_ids": [
      417828
    ],
    "mtgo_id": 61585,
    "mtgo_foil_id": 61586,
    "tcgplayer_id": 122785,
    "cardmarket_id": 292609,
    "name": "Island",
    "lang": "en",
    "released_at": "2016-09-30",
    "uri": "https://api.scryfall.com/cards/197080a9-ebb5-4a8b-81f8-0368c5bba35a",
    "scryfall_uri": "https://scryfall.com/card/kld/255/island?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/1/9/197080a9-ebb5-4a8b-81f8-0368c5bba35a.jpg?1562732181",
      "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/1/9/197080a9-ebb5-4a8b-81f8-0368c5bba35a.jpg?1562732181",
      "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/1/9/197080a9-ebb5-4a8b-81f8-0368c5bba35a.jpg?1562732181",
      "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/1/9/197080a9-ebb5-4a8b-81f8-0368c5bba35a.png?1562732181",
      "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/1/9/197080a9-ebb5-4a8b-81f8-0368c5bba35a.jpg?1562732181",
      "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/1/9/197080a9-ebb5-4a8b-81f8-0368c5bba35a.jpg?1562732181"
    },
    "mana_cost": "",
    "cmc": 0.0,
    "type_line": "Basic Land — Island",
    "oracle_text": "({T}: Add {U}.)",
    "colors": [
  
    ],
    "color_identity": [
      "U"
    ],
    "keywords": [
  
    ],
    "produced_mana": [
      "U"
    ],
    "legalities": {
      "standard": "legal",
      "future": "legal",
      "historic": "legal",
      "gladiator": "legal",
      "pioneer": "legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "legal",
      "vintage": "legal",
      "penny": "legal",
      "commander": "legal",
      "brawl": "legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "legal"
    },
    "games": [
      "paper",
      "mtgo"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "oversized": false,
    "promo": false,
    "reprint": true,
    "variation": false,
    "set": "kld",
    "set_name": "Kaladesh",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/d667e468-be8f-411f-a030-473d148deb74",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Akld&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/kld?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/197080a9-ebb5-4a8b-81f8-0368c5bba35a/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Ab2c6aa39-2d2a-459c-a555-fb48ba993373&unique=prints",
    "collector_number": "255",
    "digital": false,
    "rarity": "common",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Johannes Voss",
    "artist_ids": [
      "3593dd7e-c547-4a32-81cd-7da725f60118"
    ],
    "illustration_id": "8abad0cd-c316-487d-813f-4e5de10c7106",
    "border_color": "black",
    "frame": "2015",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "prices": {
      "usd": "0.12",
      "usd_foil": "0.83",
      "eur": "0.05",
      "eur_foil": "0.35",
      "tix": "0.03"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=417828",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Island&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Island&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Island",
      "mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Island"
    },
    "purchase_uris": {
      "tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=122785&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Island&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/61585?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },

  {
    "object": "card",
    "id": "6003e1e8-13d5-4f17-bbd4-ee05a6c4b30d",
    "oracle_id": "358789f9-7d87-411d-919e-d597da665cbd",
    "multiverse_ids": [
  
    ],
    "tcgplayer_id": 111210,
    "cardmarket_id": 286888,
    "name": "Stoneforge Mystic",
    "lang": "en",
    "released_at": "2016-01-01",
    "uri": "https://api.scryfall.com/cards/6003e1e8-13d5-4f17-bbd4-ee05a6c4b30d",
    "scryfall_uri": "https://scryfall.com/card/pgpx/2016/stoneforge-mystic?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/6/0/6003e1e8-13d5-4f17-bbd4-ee05a6c4b30d.jpg?1561929918",
      "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/6/0/6003e1e8-13d5-4f17-bbd4-ee05a6c4b30d.jpg?1561929918",
      "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/6/0/6003e1e8-13d5-4f17-bbd4-ee05a6c4b30d.jpg?1561929918",
      "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/6/0/6003e1e8-13d5-4f17-bbd4-ee05a6c4b30d.png?1561929918",
      "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/6/0/6003e1e8-13d5-4f17-bbd4-ee05a6c4b30d.jpg?1561929918",
      "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/6/0/6003e1e8-13d5-4f17-bbd4-ee05a6c4b30d.jpg?1561929918"
    },
    "mana_cost": "{1}{W}",
    "cmc": 2.0,
    "type_line": "Creature — Kor Artificer",
    "oracle_text": "When Stoneforge Mystic enters the battlefield, you may search your library for an Equipment card, reveal it, put it into your hand, then shuffle.\n{1}{W}, {T}: You may put an Equipment card from your hand onto the battlefield.",
    "power": "1",
    "toughness": "2",
    "colors": [
      "W"
    ],
    "color_identity": [
      "W"
    ],
    "keywords": [
  
    ],
    "legalities": {
      "standard": "not_legal",
      "future": "not_legal",
      "historic": "not_legal",
      "gladiator": "not_legal",
      "pioneer": "not_legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "not_legal",
      "vintage": "legal",
      "penny": "not_legal",
      "commander": "legal",
      "brawl": "not_legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal"
    },
    "games": [
      "paper"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": false,
    "oversized": false,
    "promo": true,
    "reprint": true,
    "variation": false,
    "set": "pgpx",
    "set_name": "Grand Prix Promos",
    "set_type": "promo",
    "set_uri": "https://api.scryfall.com/sets/08e04147-c201-4c75-9b30-a566164ecaf3",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Apgpx&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/pgpx?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/6003e1e8-13d5-4f17-bbd4-ee05a6c4b30d/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A358789f9-7d87-411d-919e-d597da665cbd&unique=prints",
    "collector_number": "2016",
    "digital": false,
    "rarity": "rare",
    "watermark": "wotc",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Johannes Voss",
    "artist_ids": [
      "3593dd7e-c547-4a32-81cd-7da725f60118"
    ],
    "illustration_id": "928595f2-6daa-459f-bbac-9ec44c9d69f7",
    "border_color": "black",
    "frame": "2015",
    "full_art": false,
    "textless": false,
    "booster": false,
    "story_spotlight": false,
    "promo_types": [
      "tourney"
    ],
    "edhrec_rank": 802,
    "prices": {
      "usd": null,
      "usd_foil": "54.85",
      "eur": null,
      "eur_foil": "35.80",
      "tix": null
    },
    "related_uris": {
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Stoneforge+Mystic&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Stoneforge+Mystic&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Stoneforge+Mystic",
      "mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Stoneforge+Mystic"
    },
    "purchase_uris": {
      "tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=111210&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Stoneforge+Mystic&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Stoneforge+Mystic&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },

  {
    "object": "card",
    "id": "63005c92-fc0b-45dc-b488-489350527453",
    "oracle_id": "e6788809-6b34-4701-89af-b422ba35efb2",
    "multiverse_ids": [
      247273
    ],
    "mtgo_id": 40474,
    "mtgo_foil_id": 40794,
    "tcgplayer_id": 47355,
    "cardmarket_id": 247275,
    "name": "Magus of the Vineyard",
    "lang": "en",
    "released_at": "2011-06-17",
    "uri": "https://api.scryfall.com/cards/63005c92-fc0b-45dc-b488-489350527453",
    "scryfall_uri": "https://scryfall.com/card/cmd/166/magus-of-the-vineyard?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/6/3/63005c92-fc0b-45dc-b488-489350527453.jpg?1592713834",
      "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/6/3/63005c92-fc0b-45dc-b488-489350527453.jpg?1592713834",
      "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/6/3/63005c92-fc0b-45dc-b488-489350527453.jpg?1592713834",
      "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/6/3/63005c92-fc0b-45dc-b488-489350527453.png?1592713834",
      "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/6/3/63005c92-fc0b-45dc-b488-489350527453.jpg?1592713834",
      "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/6/3/63005c92-fc0b-45dc-b488-489350527453.jpg?1592713834"
    },
    "mana_cost": "{G}",
    "cmc": 1.0,
    "type_line": "Creature — Human Wizard",
    "oracle_text": "At the beginning of each player's precombat main phase, that player adds {G}{G}.",
    "power": "1",
    "toughness": "1",
    "colors": [
      "G"
    ],
    "color_identity": [
      "G"
    ],
    "keywords": [
  
    ],
    "produced_mana": [
      "G"
    ],
    "legalities": {
      "standard": "not_legal",
      "future": "not_legal",
      "historic": "not_legal",
      "gladiator": "not_legal",
      "pioneer": "not_legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "not_legal",
      "vintage": "legal",
      "penny": "legal",
      "commander": "legal",
      "brawl": "not_legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal"
    },
    "games": [
      "paper",
      "mtgo"
    ],
    "reserved": false,
    "foil": false,
    "nonfoil": true,
    "oversized": false,
    "promo": false,
    "reprint": true,
    "variation": false,
    "set": "cmd",
    "set_name": "Commander 2011",
    "set_type": "commander",
    "set_uri": "https://api.scryfall.com/sets/84ff1a64-4e69-4ed2-8c08-26206e3b97a0",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Acmd&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/cmd?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/63005c92-fc0b-45dc-b488-489350527453/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Ae6788809-6b34-4701-89af-b422ba35efb2&unique=prints",
    "collector_number": "166",
    "digital": false,
    "rarity": "rare",
    "flavor_text": "Battered and beaten by years of salt and claw, he never ceased to walk, and to seed. Only now, in this time of rebirth, do his seeds take root.",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Jim Murray",
    "artist_ids": [
      "1c906f9b-5bbe-4643-8f5c-90eb1c7f0c43"
    ],
    "illustration_id": "23f210d4-f144-4c9b-9a9d-4430c9aad817",
    "border_color": "black",
    "frame": "2003",
    "full_art": false,
    "textless": false,
    "booster": false,
    "story_spotlight": false,
    "edhrec_rank": 4794,
    "prices": {
      "usd": "3.95",
      "usd_foil": null,
      "eur": "0.30",
      "eur_foil": null,
      "tix": "0.14"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=247273",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Magus+of+the+Vineyard&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Magus+of+the+Vineyard&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Magus+of+the+Vineyard",
      "mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Magus+of+the+Vineyard"
    },
    "purchase_uris": {
      "tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=47355&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Magus+of+the+Vineyard&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/40474?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },

  {
    "object": "card",
    "id": "1e8f50be-1629-40eb-8916-019903d2e6a4",
    "oracle_id": "1239d3bf-06e8-4732-b1e2-f6eb145e5894",
    "multiverse_ids": [
      1936
    ],
    "tcgplayer_id": 18258,
    "cardmarket_id": 7499,
    "name": "Thorn Thallid",
    "lang": "en",
    "released_at": "1994-11-01",
    "uri": "https://api.scryfall.com/cards/1e8f50be-1629-40eb-8916-019903d2e6a4",
    "scryfall_uri": "https://scryfall.com/card/fem/80d/thorn-thallid?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/1/e/1e8f50be-1629-40eb-8916-019903d2e6a4.jpg?1562900652",
      "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/1/e/1e8f50be-1629-40eb-8916-019903d2e6a4.jpg?1562900652",
      "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/1/e/1e8f50be-1629-40eb-8916-019903d2e6a4.jpg?1562900652",
      "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/1/e/1e8f50be-1629-40eb-8916-019903d2e6a4.png?1562900652",
      "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/1/e/1e8f50be-1629-40eb-8916-019903d2e6a4.jpg?1562900652",
      "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/1/e/1e8f50be-1629-40eb-8916-019903d2e6a4.jpg?1562900652"
    },
    "mana_cost": "{1}{G}{G}",
    "cmc": 3.0,
    "type_line": "Creature — Fungus",
    "oracle_text": "At the beginning of your upkeep, put a spore counter on Thorn Thallid.\nRemove three spore counters from Thorn Thallid: It deals 1 damage to any target.",
    "power": "2",
    "toughness": "2",
    "colors": [
      "G"
    ],
    "color_identity": [
      "G"
    ],
    "keywords": [
  
    ],
    "legalities": {
      "standard": "not_legal",
      "future": "not_legal",
      "historic": "not_legal",
      "gladiator": "not_legal",
      "pioneer": "not_legal",
      "modern": "not_legal",
      "legacy": "legal",
      "pauper": "legal",
      "vintage": "legal",
      "penny": "legal",
      "commander": "legal",
      "brawl": "not_legal",
      "duel": "legal",
      "oldschool": "legal",
      "premodern": "not_legal"
    },
    "games": [
      "paper"
    ],
    "reserved": false,
    "foil": false,
    "nonfoil": true,
    "oversized": false,
    "promo": false,
    "reprint": false,
    "variation": false,
    "set": "fem",
    "set_name": "Fallen Empires",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/cf7390b1-341a-4ae8-a325-da0f5f322f13",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Afem&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/fem?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/1e8f50be-1629-40eb-8916-019903d2e6a4/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A1239d3bf-06e8-4732-b1e2-f6eb145e5894&unique=prints",
    "collector_number": "80d",
    "digital": false,
    "rarity": "common",
    "flavor_text": "\"Scholars still debate whether the Thallids were truly sentient.\"\n—*Sarpadian Empires, vol. III*",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Mark Tedin",
    "artist_ids": [
      "9ee9a9cc-c09e-486f-918b-69f80cbc4188"
    ],
    "illustration_id": "0385f739-3e8c-40e2-9aa5-f2746cc83487",
    "border_color": "black",
    "frame": "1993",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 10463,
    "prices": {
      "usd": "0.14",
      "usd_foil": null,
      "eur": "0.15",
      "eur_foil": null,
      "tix": null
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=1936",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Thorn+Thallid&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Thorn+Thallid&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Thorn+Thallid",
      "mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Thorn+Thallid"
    },
    "purchase_uris": {
      "tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=18258&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Thorn+Thallid&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Thorn+Thallid&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },

  {
    "object": "card",
    "id": "ecdff8b7-f111-460a-97c7-903225392cd9",
    "oracle_id": "e6e38bd4-e6dc-400b-8e08-956726842dc4",
    "multiverse_ids": [
      389552
    ],
    "mtgo_id": 54699,
    "mtgo_foil_id": 54700,
    "tcgplayer_id": 94366,
    "cardmarket_id": 270663,
    "name": "Immaculate Magistrate",
    "lang": "en",
    "released_at": "2014-11-07",
    "uri": "https://api.scryfall.com/cards/ecdff8b7-f111-460a-97c7-903225392cd9",
    "scryfall_uri": "https://scryfall.com/card/c14/201/immaculate-magistrate?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/e/c/ecdff8b7-f111-460a-97c7-903225392cd9.jpg?1561963757",
      "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/e/c/ecdff8b7-f111-460a-97c7-903225392cd9.jpg?1561963757",
      "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/e/c/ecdff8b7-f111-460a-97c7-903225392cd9.jpg?1561963757",
      "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/e/c/ecdff8b7-f111-460a-97c7-903225392cd9.png?1561963757",
      "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/e/c/ecdff8b7-f111-460a-97c7-903225392cd9.jpg?1561963757",
      "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/e/c/ecdff8b7-f111-460a-97c7-903225392cd9.jpg?1561963757"
    },
    "mana_cost": "{3}{G}",
    "cmc": 4.0,
    "type_line": "Creature — Elf Shaman",
    "oracle_text": "{T}: Put a +1/+1 counter on target creature for each Elf you control.",
    "power": "2",
    "toughness": "2",
    "colors": [
      "G"
    ],
    "color_identity": [
      "G"
    ],
    "keywords": [
  
    ],
    "legalities": {
      "standard": "not_legal",
      "future": "not_legal",
      "historic": "not_legal",
      "gladiator": "not_legal",
      "pioneer": "not_legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "not_legal",
      "vintage": "legal",
      "penny": "legal",
      "commander": "legal",
      "brawl": "not_legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal"
    },
    "games": [
      "paper",
      "mtgo"
    ],
    "reserved": false,
    "foil": false,
    "nonfoil": true,
    "oversized": false,
    "promo": false,
    "reprint": true,
    "variation": false,
    "set": "c14",
    "set_name": "Commander 2014",
    "set_type": "commander",
    "set_uri": "https://api.scryfall.com/sets/0980a6e2-eb78-4ad2-8396-cef08fce365e",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Ac14&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/c14?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/ecdff8b7-f111-460a-97c7-903225392cd9/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Ae6e38bd4-e6dc-400b-8e08-956726842dc4&unique=prints",
    "collector_number": "201",
    "digital": false,
    "rarity": "rare",
    "flavor_text": "Elves of the immaculate class weave flora into living creatures—sometimes to endorse an elite warrior, sometimes to create a breathing work of art.",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Jim Nelson",
    "artist_ids": [
      "aa9f64d1-29e1-4c82-877e-44c18183f40b"
    ],
    "illustration_id": "adda2d85-8215-44d5-933b-dc82ebe2ce1a",
    "border_color": "black",
    "frame": "2015",
    "full_art": false,
    "textless": false,
    "booster": false,
    "story_spotlight": false,
    "edhrec_rank": 2081,
    "prices": {
      "usd": "1.16",
      "usd_foil": null,
      "eur": "0.49",
      "eur_foil": null,
      "tix": "0.14"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=389552",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Immaculate+Magistrate&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Immaculate+Magistrate&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Immaculate+Magistrate",
      "mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Immaculate+Magistrate"
    },
    "purchase_uris": {
      "tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=94366&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Immaculate+Magistrate&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/54699?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },

  {
    "object": "card",
    "id": "3718761f-feb1-46c4-aaa3-7e07a3fa72fa",
    "oracle_id": "df4b5f7b-9d83-49b1-bd5e-77d0652eb34c",
    "multiverse_ids": [
      443108
    ],
    "mtgo_id": 67905,
    "arena_id": 67544,
    "tcgplayer_id": 162257,
    "cardmarket_id": 319904,
    "name": "Jhoira's Familiar",
    "lang": "en",
    "released_at": "2018-04-27",
    "uri": "https://api.scryfall.com/cards/3718761f-feb1-46c4-aaa3-7e07a3fa72fa",
    "scryfall_uri": "https://scryfall.com/card/dom/220/jhoiras-familiar?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/3/7/3718761f-feb1-46c4-aaa3-7e07a3fa72fa.jpg?1562734027",
      "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/3/7/3718761f-feb1-46c4-aaa3-7e07a3fa72fa.jpg?1562734027",
      "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/3/7/3718761f-feb1-46c4-aaa3-7e07a3fa72fa.jpg?1562734027",
      "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/3/7/3718761f-feb1-46c4-aaa3-7e07a3fa72fa.png?1562734027",
      "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/3/7/3718761f-feb1-46c4-aaa3-7e07a3fa72fa.jpg?1562734027",
      "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/3/7/3718761f-feb1-46c4-aaa3-7e07a3fa72fa.jpg?1562734027"
    },
    "mana_cost": "{4}",
    "cmc": 4.0,
    "type_line": "Artifact Creature — Bird",
    "oracle_text": "Flying\nHistoric spells you cast cost {1} less to cast. (Artifacts, legendaries, and Sagas are historic.)",
    "power": "2",
    "toughness": "2",
    "colors": [
  
    ],
    "color_identity": [
  
    ],
    "keywords": [
      "Flying"
    ],
    "legalities": {
      "standard": "not_legal",
      "future": "not_legal",
      "historic": "legal",
      "gladiator": "legal",
      "pioneer": "legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "not_legal",
      "vintage": "legal",
      "penny": "legal",
      "commander": "legal",
      "brawl": "not_legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal"
    },
    "games": [
      "arena",
      "paper",
      "mtgo"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "oversized": false,
    "promo": false,
    "reprint": false,
    "variation": false,
    "set": "dom",
    "set_name": "Dominaria",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/be1daba3-51c9-4e7e-9212-36e68addc26c",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Adom&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/dom?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/3718761f-feb1-46c4-aaa3-7e07a3fa72fa/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Adf4b5f7b-9d83-49b1-bd5e-77d0652eb34c&unique=prints",
    "collector_number": "220",
    "digital": false,
    "rarity": "uncommon",
    "flavor_text": "\"You could say it was my pet project.\"\n—Jhoira",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Kev Walker",
    "artist_ids": [
      "f366a0ee-a0cd-466d-ba6a-90058c7a31a6"
    ],
    "illustration_id": "726a2bb6-11d8-40b4-bbad-16703961c902",
    "border_color": "black",
    "frame": "2015",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 663,
    "prices": {
      "usd": "0.43",
      "usd_foil": "2.42",
      "eur": "0.10",
      "eur_foil": "0.98",
      "tix": "0.03"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=443108",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Jhoira%27s+Familiar&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Jhoira%27s+Familiar&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Jhoira%27s+Familiar",
      "mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Jhoira%27s+Familiar"
    },
    "purchase_uris": {
      "tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=162257&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Jhoira%27s+Familiar&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/67905?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  }

];

db.Card.remove({})
  .then(() => db.Card.collection.insertMany(gameCardSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Card.remove({})
  .then(() => db.Card.collection.insertMany(gameCardSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });