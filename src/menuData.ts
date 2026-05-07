export const menuData = {
  wok: {
    base: {
      price: '7.90€',
      en: 'vegetables (carrot, cabbage, onions & bean sprouts), egg, noodles/rice + sauce of choice',
      fi: 'vihannekset (porkkana, kaali, sipuli, pavunidut), kananmuna, nuudelit/riisi + kastike',
      sv: 'grönsaker (morot, kål, lök, böngroddar), ägg, nudlar/ris + valfri sås',
      nameEn: 'Base',
      nameFi: 'Perusannos',
      nameSv: 'Bas'
    },
    vegetables: [
      { name: { en: 'Shitake mushroom', fi: 'Siitakesieni', sv: 'Shiitakesvamp' }, price: '+ 2.50€' },
      { name: { en: 'Button mushroom', fi: 'Herkkusieni', sv: 'Champinjon' }, price: '+ 2€' },
      { name: { en: 'Bok choy', fi: 'Paksoi', sv: 'Bok choy' }, price: '+ 2€' },
      { name: { en: 'Cashew', fi: 'Cashew pähkinä', sv: 'Cashewnötter' }, price: '+ 2€' },
      { name: { en: 'Paprika mix', fi: 'Paprikasekoitus', sv: 'Paprikamix' }, price: '+ 2€' },
      { name: { en: 'Beans', fi: 'Pavut', sv: 'Bönor' }, price: '+ 2€' },
      { name: { en: 'Red onion', fi: 'Punasipuli', sv: 'Rödlök' }, price: '+ 1€' },
      { name: { en: 'Bamboo shoot', fi: 'Bambunverso', sv: 'Bambuskott' }, price: '+ 1€' },
      { name: { en: 'Sweet corn', fi: 'Maissi', sv: 'Majs' }, price: '+ 1€' },
      { name: { en: 'Green peas', fi: 'Herne', sv: 'Gröna ärtor' }, price: '+ 1€' }
    ],
    sauces: [
      { name: { en: 'Beijing sauce (Teriyaki)', fi: 'Beijing sauce (Teriyaki)', sv: 'Beijing sauce (Teriyaki)' } },
      { name: { en: 'Bangkok sauce (Hot sauce)', fi: 'Bangkok sauce (Tulinen kastike)', sv: 'Bangkok sauce (Stark sås)' } },
      { name: { en: 'Osaka sauce (Yakisoba/peanut sauce)', fi: 'Osaka sauce (Yakisoba/maapähkinä kastike)', sv: 'Osaka sauce (Yakisoba/jordnötssås)' } },
      { name: { en: 'Hanoi sauce (Sweet and sour)', fi: 'Hanoi sauce (Hapanimelä kastike)', sv: 'Hanoi sauce (Sötsur sås)' } },
      { name: { en: 'Colombo sauce (Curry and coconut)', fi: 'Colombo sauce (Curry ja kookos)', sv: 'Colombo sauce (Curry & kokos)' } },
      { name: { en: 'Mumbai sauce (Tikka masala)', fi: 'Mumbai sauce (Tikka masala)', sv: 'Mumbai sauce (Tikka masala)' } }
    ],
    protein: [
      { name: { en: 'Beef', fi: 'Naudanliha', sv: 'Nötkött' }, price: '+ 3.50€' },
      { name: { en: 'Chicken', fi: 'Kana', sv: 'Kyckling' }, price: '+ 3.00€' },
      { name: { en: 'Prawn', fi: 'Katkarapu', sv: 'Räkor' }, price: '+ 3.50€' },
      { name: { en: 'Tofu', fi: 'Tofu', sv: 'Tofu' }, price: '+ 2.50€' }
    ],
    toppings: [
      { name: { en: 'Fried garlic', fi: 'Paistettu valkosipuli', sv: 'Stekt vitlök' } },
      { name: { en: 'Coriander', fi: 'Korianteri', sv: 'Koriander' } },
      { name: { en: 'Peanut', fi: 'Maapähkinä', sv: 'Jordnötter' } },
      { name: { en: 'Fried onion', fi: 'Paistettu sipuli', sv: 'Rostad lök' } }
    ]
  },
  burgers: [
    { name: 'OG Smash', price: '9.90€', desc: { en: 'beef patty, classic sauce, 2pcs cheddar cheese, red onion, lettuce & tomato', fi: 'naudanpihvi, klassinen kastike, 2kpl cheddar juusto, punasipuli, salaatti, tomaatti', sv: 'nötfärsbiff, klassisk sås, 2st cheddarost, rödlök, sallad & tomat' } },
    { name: 'BBQ Steakhouse', price: '10.90€', desc: { en: 'beef patty, 2pcs cheddar, pickles, fried onions, lettuce & bbq sauce', fi: 'naudanpihvi, 2kpl cheddar juusto, suolakurkku, paahdettu sipuli, salaatti, BBQ-kastike', sv: 'nötfärsbiff, 2st cheddar, saltgurka, rostad lök, sallad, BBQ-sås' } },
    { name: 'PitStop Chipotle', price: '10.90€', desc: { en: 'beef patty, 2pcs cheddar cheese, red onion, tomatoes, lettuce, pickles & chipotle mayo', fi: 'naudanpihvi, 2kpl cheddar juusto, punasipuli, tomaatti, salaatti, suolakurkku, chipotle-majoneesi', sv: 'nötfärsbiff, 2st cheddar, rödlök, tomat, sallad, saltgurka, chipotlemajonnäs' } },
    { name: 'Masala Smash', price: '12.90€', desc: { en: '2pcs beef patty, Indian spices, 2pcs cheddar cheese, red onions, coriander, lettuce & tomatoes', fi: '2kpl naudanpihvi, intialaiset mausteet, 2kpl cheddar juusto, punasipuli, korianteri, salaatti, tomaatti', sv: '2st nötfärsbiffar, indiska kryddor, 2st cheddarost, rödlök, koriander, sallad & tomater' } },
    { name: 'Blaze Siracha', price: '10.90€', desc: { en: 'beef patty, 2pcs cheddar cheese, red onion, lettuce, jalapeno & siracha mayo', fi: 'naudanpihvi, 2kpl cheddar juusto, punasipuli, salaatti, jalapeño, sriracha-majoneesi', sv: 'nötfärsbiff, 2st cheddarost, rödlök, sallad, jalapeño & srirachamajonnäs' } },
  ],
  chickenBurgers: [
    { name: 'Holy Chick', price: '9.90€', desc: { en: 'crispy fried chicken, bbq sauce, mayonaise, lettuce, cheddar cheese, red onion & pickles', fi: 'paistettu kana, BBQ, majoneesi, salaatti, cheddar, punasipuli, suolakurkku', sv: 'krispig friterad kyckling, BBQ-sås, majonnäs, sallad, cheddarost, rödlök & saltgurka' } },
    { name: 'Fried Chicken', price: '9.90€', desc: { en: 'crispy fried chicken, classic sauce, 2pcs cheddar cheese, red onion, lettuce & tomato', fi: 'paistettu kana, klassinen kastike, 2kpl cheddar, punasipuli, salaatti, tomaatti', sv: 'krispig friterad kyckling, klassisk sås, 2st cheddarost, rödlök, sallad & tomat' } },
    { name: 'PitStop Chipotle Chicken', price: '9.90€', desc: { en: 'crispy fried chicken, 2pcs cheddar cheese, red onion, tomatoes, lettuce, pickles & chipotle mayo', fi: 'paistettu kana, 2kpl cheddar, punasipuli, tomaatti, salaatti, suolakurkku, chipotle-majoneesi', sv: 'krispig friterad kyckling, 2st cheddarost, rödlök, tomater, sallad, saltgurka & chipotlemajonnäs' } },
    { name: 'Blaze Siracha Chicken', price: '9.90€', desc: { en: 'crispy fried chicken, 2pcs cheddar cheese, red onion, lettuce, jalapeno & siracha mayo', fi: 'paistettu kana, 2kpl cheddar, punasipuli, salaatti, jalapeño, sriracha-majoneesi', sv: 'krispig friterad kyckling, 2st cheddarost, rödlök, sallad, jalapeño & srirachamajonnäs' } },
  ],
  vegeBurgers: [
    { name: 'Earth Bite', price: '9.90€', desc: { en: 'veggie patty, classic sauce, 2 pcs cheddar cheese, red onion, lettuce & tomato', fi: 'kasvispihvi, klassinen kastike, 2kpl cheddar juusto, punasipuli, salaatti, tomaatti', sv: 'veggiebiff, klassisk sås, 2st cheddarost, rödlök, sallad & tomat' } },
    { name: 'PitStop Chipotle Halloumi', price: '9.90€', desc: { en: 'halloumi, 2pcs cheddar cheese, red onion, tomatoes, lettuce, pickles & chipotle mayo', fi: 'halloumi, 2kpl cheddar juusto, punasipuli, tomatti, salaatti, suolakurkku & chipotle-majoneesi', sv: 'halloumi, 2st cheddarost, rödlök, tomater, sallad, saltgurka & chipotlemajonnäs' } },
    { name: 'Blaze Siracha Veggie', price: '9.90€', desc: { en: 'veggie patty, 2pcs cheddar cheese, red onion, lettuce, jalapeno & siracha mayo', fi: 'kasvispihvi, 2kpl cheddar juusto, punasipuli, salaatti, jalapeño & sriracha-majoneesi', sv: 'veggiebiff, 2st cheddarost, rödlök, sallad, jalapeño & srirachamajonnäs' } },
  ],
  wraps: [
    { name: 'Wrap', price: '9.50€', desc: { en: 'crispy chicken/halloumi, lettuce, red onion, tomato & paprika', fi: 'crispy chicken tai halloumi, salaatti, punasipuli, tomaatti, paprika', sv: 'krispig kyckling el. halloumi, sallad, rödlök, tomat & paprika' } }
  ],
  sides: [
    { name: 'Loaded Fries', price: '6.50€', desc: { en: 'fries, cheddar cheese, classic sauce/siracha mayo/BBQ sauce/Chipotle mayonaise, pickles, fried onion', fi: 'ranskalaiset, cheddar juusto, klassinen kastike/siracha-/BBQ-/Chipotle-majoneesi, pickles, paahdettu sipuli', sv: 'pommes, cheddarost, klassisk sås/sriracha-/BBQ-/Chipotlemajonnäs, saltgurka, rostad lök' } },
    { name: { en: 'Loaded Fries Large', fi: 'Loaded Fries Iso', sv: 'Loaded Fries Stor' }, price: '8.50€', desc: { en: 'fries, cheddar cheese, classic sauce/siracha/BBQ sauce/Chipotle mayonaise, pickles, fried onion', fi: 'ranskalaiset, cheddar juusto, klassinen kastike/siracha-/BBQ-/Chipotle-majoneesi, pickles, paahdettu sipuli', sv: 'pommes, cheddarost, klassisk sås/sriracha-/BBQ-/Chipotlemajonnäs, saltgurka, rostad lök' } }
  ]
};
