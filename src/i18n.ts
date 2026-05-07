export type Language = 'en' | 'fi' | 'sv';

export const tData = {
  en: {
    nav: { menu: 'Menu', story: 'Our Story', location: 'Location', order: 'Order Now' },
    hero: { subtitle: 'Premium Street Food', title1: 'Fuel Your', title2: 'Hunger', title3: 'In Seconds.', desc: 'High-octane flavors crafted for those on the move. Fresh ingredients, lightning-fast service, and bold urban taste.', viewMenu: 'View Menu' },
    values: [
      { title: "Pole Position Speed", desc: "Fastest service in town. In and out before you know it." },
      { title: "Street Flavor", desc: "Bold, authentic taste engineered for maximum impact." },
      { title: "Premium Fuel", desc: "High-quality, locally sourced ingredients prepared fresh." },
      { title: "Fair Pricing", desc: "Top-tier quality that won't empty your tank." }
    ],
    menu: { title: 'The Menu', viewFull: 'View Full Menu', addToOrder: 'Add to Order', mealAddon: 'Meal (drink 0.33L & french fries) + 5€', categories: { wok: 'WOK', burgers: 'Burgers', chickenBurgers: 'Chicken Burgers', vegeBurgers: 'Vege Burgers', wraps: 'Wraps', sides: 'Sides' }, wokAddons: { veg: 'Vegetables 50g', sauce: 'WOK sauce', protein: 'Protein 100g', toppings: 'Toppings + 0.50€' } },
    sig: { tag: 'Pitstop Special', title: 'The WOK Base', desc: "Conquer your cravings with our ultimate combination. Build your own WOK base with fresh vegetables, egg, noodles or rice, and your choice of our signature sauces.", btn: 'Claim Yours Now' },
    story: { title: 'Born on the Streets', desc: "Pitstop started with a single cart, a hot grill, and a need for speed. We believe that fast food shouldn't mean compromising on bold, explosive flavors. We engineer every bite to deliver maximum satisfaction in record time." },
    reviews: [
      { text: "Hands down the best smash burger I've ever had. Fast, hot, and insanely flavorful.", author: "Mike R." },
      { text: "The vibe is electric and the food matches it perfectly. Burnout fries are mandatory.", author: "Sarah T." },
      { text: "Finally, street food that actually tastes like it was made with passion. 10/10.", author: "James L." }
    ],
    location: { title: 'Ready to Refuel?', hq: 'Pit Lane Headquarters', hqDesc: '1024 Fast Lane Blvd\nMotor City, MC 90210', hours: 'Operating Hours', hoursDesc: 'Mon - Thu: 11:00 AM - 10:00 PM\nFri - Sun: 11:00 AM - Midnight', call: 'Call Ahead', start: 'Start Order', getDir: 'Get Directions' },
    footer: { rights: 'Pitstop Street Food. No Speed Limits.', privacy: 'Privacy Policy', terms: 'Terms of Service' }
  },
  fi: {
    nav: { menu: 'Ruokalista', story: 'Tarinamme', location: 'Sijainti', order: 'Tilaa Nyt' },
    hero: { subtitle: 'Ensiluokkaista katuruokaa', title1: 'Sammuta', title2: 'Nälkäsi', title3: 'Sekunneissa.', desc: 'Huippuunsa viritettyjä makuja liikkeellä oleville. Tuoreet raaka-aineet, salamannopea palvelu ja rohkea urbaani maku.', viewMenu: 'Katso Menu' },
    values: [
      { title: "Paalupaikan Nopeus", desc: "Kaupungin nopein palvelu. Sisään ja ulos hetkessä." },
      { title: "Katumaku", desc: "Rohkea, aito maku joka tekee maksimaalisen vaikutuksen." },
      { title: "Ensiluokkainen Polttoaine", desc: "Laadukkaat, paikalliset ja tuoreesti valmistetut raaka-aineet." },
      { title: "Reilu Hinnoittelu", desc: "Huippulaatua, joka ei tyhjennä tankkiasi." }
    ],
    menu: { title: 'Ruokalista', viewFull: 'Koko Menu', addToOrder: 'Lisää Tilaukseen', mealAddon: 'Ateria (juoma 0.33L ja ranskalaiset) + 5€', categories: { wok: 'WOK', burgers: 'Hampurilaiset', chickenBurgers: 'Kana Hampurilaiset', vegeBurgers: 'Kasvis hampurilaiset', wraps: 'Wrapot', sides: 'Lisukkeet' }, wokAddons: { veg: 'Kasvikset 50g', sauce: 'WOK kastike', protein: 'Proteiinit 100g', toppings: 'Lisukkeet+ 0,50€' } },
    sig: { tag: 'Pitstop Erikoisuus', title: 'The WOK Base', desc: "Päihitä mielitekosi äärimmäisellä yhdistelmällämme. Kokoa oma WOK-perusannoksesi tuoreista kasviksista, kananmunasta, nuudeleista tai riisistä ja valitsemastasi kastikkeesta.", btn: 'Hae Omasi' },
    story: { title: 'Syntynyt Kaduilla', desc: "Pitstop alkoi yhdestä kojusta, kuumasta grillistä ja nopeuden tarpeesta. Uskomme, että pikaruoan ei pitäisi tarkoittaa tinkiä rohkeista, räjähtävistä mauista. Rakennamme jokaisen suupalan maksimaalista tyydytystä varten ennätysajassa." },
    reviews: [
      { text: "Ehdottomasti paras smash-burger jota olen syönyt. Nopea, kuuma ja älyttömän maukas.", author: "Mika R." },
      { text: "Fiilis on sähköinen ja ruoka sopii siihen täydellisesti. Ranskalaiset ovat pakolliset.", author: "Sari T." },
      { text: "Vihdoinkin katuruokaa, joka todella maistuu intohimolla tehdyltä. 10/10.", author: "Jari L." }
    ],
    location: { title: 'Valmiina Tankkaamaan?', hq: 'Pit Lane Päämaja', hqDesc: '1024 Fast Lane Blvd\nMotor City, MC 90210', hours: 'Aukioloajat', hoursDesc: 'Ma - To: 11.00 - 22.00\nPe - Su: 11.00 - 24.00', call: 'Soita Ennakkoon', start: 'Aloita Tilaus', getDir: 'Hae Reittiohjeet' },
    footer: { rights: 'Pitstop Street Food. Ei Nopeusrajoituksia.', privacy: 'Tietosuojaseloste', terms: 'Käyttöehdot' }
  },
  sv: {
    nav: { menu: 'Meny', story: 'Vår Berättelse', location: 'Plats', order: 'Beställ Nu' },
    hero: { subtitle: 'Premium Street Food', title1: 'Stilla Din', title2: 'Hunger', title3: 'På Sekunder.', desc: 'Högoktaniga smaker skapade för de i farten. Färska ingredienser, blixtsnabb service och djärv urban smak.', viewMenu: 'Se Meny' },
    values: [
      { title: "Pole Position Hastighet", desc: "Stadens snabbaste service. In och ut innan du vet ordet av." },
      { title: "Gatusmak", desc: "Djärv, autentisk smak konstruerad för maximal effekt." },
      { title: "Premium Bränsle", desc: "Högkvalitativa, lokala ingredienser tillagade färskt." },
      { title: "Rättvisa Priser", desc: "Toppkvalitet som inte tömmer din tank." }
    ],
    menu: { title: 'Meny', viewFull: 'Visa Hela Menyn', addToOrder: 'Lägg Till', mealAddon: 'Måltid (dryck 0.33L och pommes frites) + 5€', categories: { wok: 'WOK', burgers: 'Hamburgare', chickenBurgers: 'Kycklingburgare', vegeBurgers: 'Vegoburgare', wraps: 'Wraps', sides: 'Tillbehör' }, wokAddons: { veg: 'Grönsaker 50g', sauce: 'WOK sås', protein: 'Protein 100g', toppings: 'Toppings + 0,50€' } },
    sig: { tag: 'Pitstop Special', title: 'The WOK Base', desc: "Övervinna ditt sug med vår ultimata kombination. Bygg din egen WOK-bas med färska grönsaker, ägg, nudlar eller ris och valfri sås.", btn: 'Hämta Din' },
    story: { title: 'Född På Gatorna', desc: "Pitstop började med en enda vagn, en het grill och ett behov av hastighet. Vi anser att snabbmat inte bör innebära att kompromissa med djärva, explosiva smaker. Vi utformar varje munsbit för maximal tillfredsställelse på rekordtid." },
    reviews: [
      { text: "Hands down den bästa smash-burgaren jag någonsin har haft. Snabb, varm och otroligt smakrik.", author: "Mikael R." },
      { text: "Stämningen är elektrisk och maten matchar det perfekt. Burnout pommes är obligatoriska.", author: "Sara T." },
      { text: "Äntligen gatumats som faktiskt smakar som att det gjordes med passion. 10/10.", author: "Jakob L." }
    ],
    location: { title: 'Redo Att Tanka?', hq: 'Pit Lane Huvudkontor', hqDesc: '1024 Fast Lane Blvd\nMotor City, MC 90210', hours: 'Öppettider', hoursDesc: 'Mån - Tor: 11.00 - 22.00\nFre - Sön: 11.00 - 00.00', call: 'Ring i Förväg', start: 'Börja Beställning', getDir: 'Få Vägbeskrivning' },
    footer: { rights: 'Pitstop Street Food. Inga Hastighetsgränser.', privacy: 'Integritetspolicy', terms: 'Användarvillkor' }
  }
};
