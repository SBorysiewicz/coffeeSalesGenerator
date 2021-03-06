/**
 * Data reference from
 * 
 * https://au.be.yahoo.com/food/recipes/a/28258407/best-100-coffee-shops-in-australia/
 */

const coffeeShopList = {
    "NSW": [{
            name: "Single Origin Roasters",
            suburb: "Surry Hills",
            incentive: true
        },
        {
            name: "Circa Espresso",
            suburb: "Parramatta",
            incentive: false
        },
        {
            name: "Social Brew",
            suburb: "Pyrmont",
            incentive: false
        },
        {
            name: "Brewtown Newtown",
            suburb: "Newtown",
            incentive: false
        },
        {
            name: "Black Star Pastry",
            suburb: "Newtown",
            incentive: false
        },
        {
            name: "The Steam Engine",
            suburb: "Chatswood",
            incentive: false
        },
        {
            name: "Workshop Espresso",
            suburb: "Sydney",
            incentive: true
        },
        {
            name: "Campos Coffee",
            suburb: "Newtown",
            incentive: false
        },
        {
            name: "The Fine Food Store & Café",
            suburb: "The Rocks",
            incentive: false
        },
        {
            name: "Wedge Espresso",
            suburb: "Glebe",
            incentive: false
        },
        {
            name: "Room 10",
            suburb: "Potts Point",
            incentive: false
        },
        {
            name: "BlueBird Coffee",
            suburb: "Sydney",
            incentive: false
        },
        {
            name: "Double Barrel Cafe",
            suburb: "Sydney",
            incentive: true
        },
        {
            name: "Hemingway's",
            suburb: "Manly",
            incentive: false
        },
        {
            name: "The Tuckshop",
            suburb: "Glenhaven",
            incentive: false
        },
        {
            name: "Mecca Espresso",
            suburb: "Ultimo",
            incentive: false
        },
        {
            name: "Gumption By Coffee Alchemy",
            suburb: "Sydney",
            incentive: false
        },
        {
            name: "The Little Marionette On The Dale",
            suburb: "Annandale",
            incentive: false
        },
        {
            name: "Kürtösh",
            suburb: "Surry Hills",
            incentive: false
        },
        {
            name: "Palomino Espresso",
            suburb: "Sydney",
            incentive: false
        }
    ],
    "VIC": [{
            name: "Patricia",
            suburb: "Melbourne",
            incentive: false
        },
        {
            name: "Brother Baba Budan",
            suburb: "Melbourne",
            incentive: true
        }, {
            name: "The League of Honest Coffee",
            suburb: "Melbourne",
            incentive: false
        }, {
            name: "Proud Mary",
            suburb: "Collingwood",
            incentive: false
        }, {
            name: "Monk Bodhi Dharma",
            suburb: "Balaclava",
            incentive: false
        }, {
            name: "The Kettle Black",
            suburb: "South Melbourne",
            incentive: true
        }, {
            name: "Seven Seeds",
            suburb: "Carlton",
            incentive: false
        }, {
            name: "Miss Jackson",
            suburb: "St Kilda",
            incentive: false
        }, {
            name: "Merchants Guild",
            suburb: "Bentleigh East",
            incentive: false
        }, {
            name: "Everyday Coffee",
            suburb: "Collingwood",
            incentive: true
        }, {
            name: "St Ali",
            suburb: "South Melbourne",
            incentive: false
        }, {
            name: "Dukes Coffee Roasters",
            suburb: "Melbourne",
            incentive: false
        }, {
            name: "Shortstop Coffee & Donuts",
            suburb: "Melbourne",
            incentive: false
        }, {
            name: "Market Lane Coffee",
            suburb: "Melbourne",
            incentive: false
        }, {
            name: "Top Paddock",
            suburb: "Richmond",
            incentive: false
        }, {
            name: "Three Bags Full",
            suburb: "Abbotsford",
            incentive: false
        }, {
            name: "Two Birds One Stone",
            suburb: "South Yarra",
            incentive: true
        }, {
            name: "The Premises",
            suburb: "Kensington",
            incentive: false
        }, {
            name: "Lemon Middle And Orange",
            suburb: "Collingwood",
            incentive: false
        }, {
            name: "Cup of Truth",
            suburb: "Melbourne",
            incentive: false
        }
    ],
    "QLD": [{
        name: "John Mills Himself",
        suburb: "Brisbane",
        incentive: true
    }, {
        name: "Scout",
        suburb: "Brisbane",
        incentive: false
    }, {
        name: "Caffiend",
        suburb: "Cairns",
        incentive: true
    }, {
        name: "Bunker",
        suburb: "Milton",
        incentive: false
    }, {
        name: "Shouk Cafe",
        suburb: "Brisbane",
        incentive: false
    }, {
        name: "Gramercy Coffee",
        suburb: "Brisbane",
        incentive: false
    }, {
        name: "Corner Store Cafe",
        suburb: "Toowong",
        incentive: false
    }, {
        name: "Slightly Twisted Espresso Lounge",
        suburb: "Nundah",
        incentive: false
    }, {
        name: "Ltd Espresso + Brew Bar",
        suburb: "Fortitude Valley",
        incentive: false
    }, {
        name: "Billy Kart Kitchen",
        suburb: "Annerley",
        incentive: false
    }, {
        name: "Elixir Coffee",
        suburb: "Stafford",
        incentive: false
    }, {
        name: "BREW",
        suburb: "Brisbane",
        incentive: false
    }, {
        name: "No Name Lane",
        suburb: "Broadbeach",
        incentive: true
    }, {
        name: "The Ponycat Cafe",
        suburb: "Brisbane",
        incentive: false
    }, {
        name: "Browndog Cafe",
        suburb: "Woolloongabba",
        incentive: false
    }, {
        name: "Bean",
        suburb: "Brisbane",
        incentive: false
    }, {
        name: "Delicatezza",
        suburb: "Mitchelton",
        incentive: false
    }, {
        name: "Campos Coffee",
        suburb: "Brisbane",
        incentive: true
    }, {
        name: "Dovetail On Overend",
        suburb: "Norman Park",
        incentive: false
    }, {
        name: "Bellissimo Coffee",
        suburb: "Fortitude Valley",
        incentive: false
    }],
    "SA": [{
        name: "E For Ethel",
        suburb: "Adelaide",
        incentive: false
    }, {
        name: "Coffee Branch",
        suburb: "Adelaide",
        incentive: false
    }, {
        name: "The Coffee Barun",
        suburb: "Sefton Park",
        incentive: false
    }, {
        name: "Exchange Specialty Coffee",
        suburb: "Adelaide",
        incentive: false
    }, {
        name: "The Pantry on Egmont",
        suburb: "Hawthorn",
        incentive: true
    }, {
        name: "Paddy's Lantern",
        suburb: "Adelaide",
        incentive: false
    }, {
        name: "Mister Sunshine's",
        suburb: "The Barton",
        incentive: false
    }, {
        name: "Devour Cafè & Patisserie",
        suburb: "Hilton",
        incentive: false
    }, {
        name: "Peel Street",
        suburb: "Adelaide",
        incentive: false
    }, {
        name: "The Stranded Store",
        suburb: "Colonel Light Gardens South",
        incentive: true
    }, {
        name: "Hey Jupiter",
        suburb: "Adelaide",
        incentive: false
    }, {
        name: "The Loose Caboose",
        suburb: "Hindmarsh",
        incentive: false
    }, {
        name: "BTS Cafe",
        suburb: "Adelaide",
        incentive: false
    }, {
        name: "Cafe Troppo",
        suburb: "Adelaide",
        incentive: false
    }, {
        name: "Bar 9",
        suburb: "Eastwood",
        incentive: false
    }, {
        name: "Red Door Bakery",
        suburb: "Goodwood",
        incentive: false
    }, {
        name: "Cafe Komodo",
        suburb: "Prospect",
        incentive: true
    }, {
        name: "PURE - Boutique Coffee Bar",
        suburb: "Glenelg",
        incentive: false
    }, {
        name: "Steven Ter Horst Chocolatier",
        suburb: "Adelaide",
        incentive: false
    }, {
        name: "The Annex",
        suburb: "Glenelg",
        incentive: false
    }],
    "WA": [{
        name: "Harvest Espresso",
        suburb: "Victoria Park",
        incentive: false
    }, {
        name: "Piccolo's Corner",
        suburb: "West Leederville",
        incentive: false
    }, {
        name: "La Veen Coffee & Kitchen",
        suburb: "Perth",
        incentive: false
    }, {
        name: "Lowdown",
        suburb: "Perth",
        incentive: false
    }, {
        name: "Moana Coffee",
        suburb: "Perth",
        incentive: false
    }, {
        name: "The Attic",
        suburb: "Fremantle",
        incentive: false
    }, {
        name: "Little Willy's",
        suburb: "Northbridge",
        incentive: true
    }, {
        name: "Chalky’s Espresso Bar",
        suburb: "Fremantle",
        incentive: false
    }, {
        name: "Sherbet",
        suburb: "Maylands",
        incentive: false
    }, {
        name: "Bossman Coffee",
        suburb: "Mount Lawley",
        incentive: false
    }, {
        name: "Yelo",
        suburb: "Trigg",
        incentive: false
    }, {
        name: "Typika Cafe",
        suburb: "Claremont",
        incentive: false
    }, {
        name: "Bench Espresso",
        suburb: "Perth",
        incentive: true
    }, {
        name: "Small Print",
        suburb: "Perth",
        incentive: false
    }, {
        name: "Engine Room Espresso",
        suburb: "North Perth",
        incentive: false
    }, {
        name: "Architects and Heroes",
        suburb: "Subiaco",
        incentive: true
    }, {
        name: "Yocal",
        suburb: "Fremantle",
        incentive: false
    }, {
        name: "The Daily Espresso Bar",
        suburb: "Swanbourne",
        incentive: false
    }, {
        name: "Roasting Warehouse",
        suburb: "South Fremantle",
        incentive: false
    }, {
        name: "Elixir Coffee Specialists",
        suburb: "Nedlands",
        incentive: true
    }]
};
export default coffeeShopList;