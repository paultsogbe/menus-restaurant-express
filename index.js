const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  return res.json({
    restaurant: {
      path: "Le Pain Quotidien",
      name: "Le Pain Quotidien - Montorgueil",
      categories: ["Petit Déjeuner", "Salade", "Brunch", "Boulangerie", "plats de resistance"],
      price: "€€",
      phone: "+33144780895",
      percentage: 87,
      ratings: "50+",
      address: "8 Rue de Bretagne, 75003 Paris",
      delay: "10 - 20 Mins (Au plus tôt)",
      description:
        "Profitez de chaque plaisir de la vie quotidienne. Le Pain Quotidien propose des ingrédients simples et sains, du bon pain, des fruits et des légumes frais et de saison issus de l’agriculture biologique.",
      picture: "https://f.roocdn.com/images/menus/17697/header-image.jpg",
      client_address: {
        coordinates: [2.36051359999999, 48.8737157],
        locality: "Paris",
        country: "FR",
        formatted_address: "25 Passage Dubail, 75010 Paris, France",
        post_code: "75010",
        route: "Passage Dubail",
        street_number: "25",
        city: "Paris"
      }
    },
    categories: [
      {
        name: "Brunchs",
        meals: [
            {
                id: "1519055545-80",
                title: "Salade de pâques en famille",
                description: "SALADE DE LÉGUMES FLEURS, VINAIGRETTE ÉMULSIONNÉE À LA MOUTARDE ET À L’ESTRAGON, OIGNONS MARINÉS ET QUINOA SOUFFLÉ",
                picture: "https://m1.quebecormedia.com/emp/emp/2H4A3601bab6ca2a-1a95-484d-af78-af745ee482d3_ORIGINAL.jpg?impolicy=crop-resize&x=0&y=0&w=2000&h=1125&width=1500",
                price: '47,05',
                popular: true,
    
              },
            {
                id: "1519055545-81",
                title: "Tourte",
                description: "TOURTE À LA FRICASSÉE DE JAMBON TOUPIE, CHAMPIGNONS ET POIREAU, BÉCHAMEL ET PERSIL",
                picture: "https://m1.quebecormedia.com/emp/emp/2H4A3607_22bc699fc-92c2-419e-bda4-ea9227ad1ebd_ORIGINAL.jpg?impolicy=crop-resize&x=0&y=0&w=2000&h=1125&width=1500",
                price: '15,07',
                popular: true,
    
              },
            {
                id: "1519055545-82",
                title: "Oeuf",
                description: "OEUF MIROIR ORNÉ DE CHAIR À SAUCISSE ET SERVI SUR UN PAIN DORÉ CROUSTILLANT MOJÖ D’HERBES",
                price: '12',
                picture: "https://m1.quebecormedia.com/emp/emp/2H4A358793a8c26e-2b94-47db-bd09-9bdb98bee9d0_ORIGINAL.jpg?impolicy=crop-resize&x=0&y=0&w=2000&h=1125&width=1500",
                popular: true,
    
              },
            {
                id: "1519055545-83",
                title: "Endives braisées",
                description: "ENDIVES BRAISÉES AU JUS DE POMME ET À L’ÉRABLE, NOIX CARAMÉLISÉES ET ÉPICÉES",
                price: '50',
                picture: "https://m1.quebecormedia.com/emp/emp/2H4A3652b91b1c97-4481-4169-bcb8-6b172ee2c330_ORIGINAL.jpg?impolicy=crop-resize&x=0&y=0&w=2000&h=1125&width=1500",
                popular: true,
    
              },
              {
                id: "1519055545-84",
                title: "Gaspacho vert",
                description: "Gaspacho vert et chips de magret fumé",
                price: '9,00',
                picture: "https://img-3.journaldesfemmes.fr/Mut9f9pdznIi5oXgTZIUjKofLts=/750x500/04523aea501d43fc9b5e68dea1ed71d5/ccmcms-jdf/39682802.jpg",
                popular: true,
    
              },
              {
                id: "1519055545-85",
                title: "Planche-repas",
                description: "Mélange de fruits, viandes et croissants",
                price: '45,17',
                picture: "https://media.eggs.ca/assets/RecipeThumbs/_resampled/FillWyIxMjgwIiwiNzIwIl0/EasterSTILL.jpg",
                popular: true,
    
              },
              {
                id: "1519055545-86",
                title: "Brunch Gourmand",
                description: "Un moment gourmand à partagé",
                price: '29,00',
                picture: "https://www.federationdesdiabetiques.org/public/styles/article/public/content/1/img/istock-83793993-large.jpg?itok=ZOkgdfhI",
                popular: true,
    
              },
              {
                id: "1519055545-87",
                title: "Salade de champignons",
                description: "Assiette de salades, champinons, du pain et avocat",
                price: '17',
                picture: "https://parisatoutprix.fr/wp-content/uploads/2023/01/dessertissime_brunch_plat.jpg",
                popular: true,
    
              },
          {
            id: "1519055545-88",
            title: "Brunch authentic 1 personne",
            description:
              "Assiette de jambon cuit, jambon fumeì, terrine, comté bio & camembert bio, salade jeunes pousses, oeuf poché bio, pain bio & confiture, 1 viennoiserie bio au choix, granola parfait bio, jus de fruits 33cl au choix",
            price: "25.00",
            picture:
              "https://f.roocdn.com/images/menu_items/1583350/item-image.jpg",
            popular: true
          },

          

          {
            id: "1519055545-89",
            title: "Brunch vegan",
            description:
              "Falafels bio, houmous bio, avocat aux super graines bio, lentilles au paprika, herbes fraîches, houmous de carotte et légumes de saison, soupe du jour bio, pain bio & confiture, crunola parfait aux fruits de saison, flûte aux raisins et noisettes, jus de fruits 33cl au choix",
            price: "25.00",
            picture:
              "https://f.roocdn.com/images/menu_items/3905693/item-image.jpg"
          }
        ]
      },
      {
        name: "Petit déjeuner",
        meals: [
          {
            id: "1519055545-90",
            title: "Petit-déjeuner 1 personne",
            description:
              "Assortiment de pains bio, beurre & confitures bio + 1 viennoiserie bio au choix + 1 boisson fraîche au choix",
            price: "10.40"
          },

          {
            id: "1519055545-91",
            title: "Fromage blanc bio au miel",
            description: "",
            price: "10.40",
            picture: "https://www.shutterstock.com/image-photo/cheese-panorama-many-different-types-260nw-1709862316.jpg",
            Popular: true,
          },

          {
            id: "1519055545-92",
            title: "Granola parfait bio",
            description: "Yaourt, granola, et fruits frais de saison",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/1323271/item-image.jpg",
            popular: true
          },

          {
            id: "1519055545-93",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Crunola parfait bio (100% végétalien)",
            description:
              "100% végétalien - granola cru, banane, lait de coco et beurre de noix de cajou",
            price: "6.60",
            picture:"https://img.freepik.com/photos-gratuite/delicieuses-tranches-cereales-banane-angle-eleve_23-2148877642.jpg?w=1060&t=st=1712927635~exp=1712928235~hmac=a99e4df2655aa24b6ddc0972612e18a888ce310c15001bb499304138fbb2bba1",
          },
          {
            id: "1519055545-137",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Salade de fruits bio de saison",
            description: "Pomme, ananas, kiwi, orange, grenade, myrtilles",
            price: "6.90",
            picture:
              "https://f.roocdn.com/images/menu_items/2549378/item-image.jpg"
          },
          {
            id: "1519055545-95",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Omelette au four de saison",
            description:
              "Courge butternut, chèvre & thym, avec une salade de jeunes pousses",
            price: "6.60",
            picture: "https://m1.zeste.ca/serdy-m-dia-inc/image/upload/f_auto/fl_lossy/q_auto:eco/x_0,y_578,w_5663,h_3186,c_crop/w_1200,h_630,c_fill/v1711132021/foodlavie/prod/articles/top-omelettes-faciles-a-realiser-au-four-ou-a-la-poele-b9a83ee8",
          },
          {
            id: "1519055545-96",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Chia bowl",
            description:
              "Graines de chia bio, myrtilles, grenades, crunola bio",
            price: "6.60",
            picture: "https://www.shutterstock.com/shutterstock/photos/386396512/display_1500/stock-photo-breakfast-kiwi-smoothie-bowl-topped-with-oat-flakes-and-berries-isolated-on-white-background-top-386396512.jpg",
            popular: true
          },
          {
            id: "1519055545-97",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Bircher Muesli",
            description:
              "Muesli maison bio, boisson à l’amande bio, fruits de saison et super graines bio (VEGAN)",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/5250391/item-image.jpg"
          },

        ]
      },
      {
        name: "Viennoiseries et pains",
        meals: [

        
          {
            id: "1519055545-98",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Croissant bio",
            description: "",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/1323282/item-image.jpg"
          },
          {
            id: "1519055545-99",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Pain au chocolat bio",
            description: "",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/1323287/item-image.jpg",
            popular: true
          },
          {
            id: "1519055545-100",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Pain au raisins bio",
            description: "",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/3637782/item-image.jpg"
          },

          {
            id: "1519055545-101",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Baguette à l'ancienne bio",
            description: "300g",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/1583350/item-image.jpg"
          },
          {
            id: "1519055545-102",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Grande brioche",
            description: "",
            picture: "https://cuisinedesanges.files.wordpress.com/2009/11/brioche-1.jpg",
            price: "6.60",
          },
          {
            id: "1519055545-103",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Muffin bio myrtilles (100% végétalien)",
            description: "Vegan",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/2020235/item-image.jpg",
            popular: true
          },
          {
            id: "1519055545-104",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Muffin bio pomme cannelle",
            description: "",
            price: "6.60",
            picture: "https://www.votregateau.fr/media/catalog/product/cache/bed4194fd62a4702d6ef91796c27bc2c/a/p/apfel-zimt.jpg",
          },
          {
            id: "1519055545-105",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Muffin banane chocolat bio",
            description: "",
            picture: "https://liliebakery.fr/wp-content/uploads/2022/02/Muffins-banane-chocolat-Lilie-Bakery-500x500.jpg",
            price: "6.60",
          },
          {
            id: "1519055545-106",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Pain multi-céréales sans gluten",
            description: "350g",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/1323275/item-image.jpg"
          },
          {
            id: "1519055545-107",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Pain multi-céréales raisins bio",
            description: "700g",
            picture: "https://panholdimages.blob.core.windows.net/panhold-images/205665_pain-multicereales_px_0000_2021_md.jpg",
            price: "6.60",
          },
          {
            id: "1519055545-108",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Flûte raisins et noisettes bio",
            description: "",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/2549462/item-image.jpg"
          },
          {
            id: "1519055545-109",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Baguette Graines de Potiron & Tournesol",
            description: "300g",
            picture: "https://previews.123rf.com/images/fedorovacz/fedorovacz1706/fedorovacz170600179/80946719-baguette-fra%C3%AEche-avec-tournesol-et-graines-de-citrouille-sur-le-dessus-de-la-table-en-bois-vue-de.jpg",
            price: "6.60",
          }
        ]
      },
      {
        name: "Salades",
        meals: [
          {
            id: "1519055545-110",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "César BLT",
            description:
              "Poulet, parmesan, avocat, croûtons, bacon, chips de légumes, jeunes pousses, kale et tomates cerises",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/2018213/item-image.jpg",
            popular: true
          },
          {
            id: "1519055545-111",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Buddha bowl",
            description:
              "Saumon fumé, avocat, super graines bio, lentilles au parika, chou rouge, concombre, jeunes pousses",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/1323292/item-image.jpg"
          },
          {
            id: "1519055545-112",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Veggie Bowl",
            description:
              "Sarrasin bio, quinoa bio, houmous de carottes, lentilles au paprika, courge butternut, grenade, avocat, caviar d'algues, chips de légumes bio",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/2549941/item-image.jpg"
          },
          {
            id: "1519055545-113",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Falafel Bowl",
            description:
              "Quinoa bio, houmous bio, carottes, chou rouge, pousses d’épinard, sauce tahini et pain de saison (VEGAN)",
            price: "6.60",
            picture:
              "https://f.roocdn.com/images/menu_items/5250423/item-image.jpg",
            popular: true
          },
          {
            id: "1519055545-114",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Bol lentilles ou quinoa (100% végétalien)",
            description: "",
            picture: "https://c8.alamy.com/compfr/r4hjhx/le-quinoa-les-lentilles-et-les-pois-chiches-legumes-vegetarien-bol-bouddha-sur-table-en-bois-blanc-vue-d-en-haut-l-alimentation-saine-r4hjhx.jpg",
            price: "3.90",
          },
          {
            id: "1519055545-125",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Quiche Lorraine",
            description: "Servie avec une salade de jeunes pousses bio",
            picture: "https://jemangefrancais.com/img/cms/Photos%20Blog/quiche%20lorraine_1.jpg",
            price: "6.90",
          },
          {
            id: "1519055545-116",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Mini salade lentilles (100% végétarien)",
            description: "Lentilles au paprika, carottes bio et oeuf poché bio",
            picture: 'https://www.regal.fr/sites/art-de-vivre/files/quiche-lorraine_istock.jpg',
            price: "3.90",
          },
          {
            id: "1519055545-116",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Mini salade lentilles (100% végétarien)",
            description: "Lentilles au paprika, carottes bio et oeuf poché bio",
            picture: "https://menu-vegetarien.com/storage/2023/05/recette-vegetarienne-salade-lentilles-legumes-ete.jpg",
            price: "5.90",
          },
        ]
      },

      {

        name: "Tartines froides",
        meals: [
          {
            id: "1519055545-117",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Toast avocat bio (100% végétalien)",
            description: "Purée d'avocat bio et gomasio bio",
            picture:
              "https://f.roocdn.com/images/menu_items/1323299/item-image.jpg",
              price: "6.90",
          },
          {
            id: "1519055545-118",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Tartine poulet fumé & avocat",
            description: "Concombre bio et cébettes",
            picture: "https://static.750g.com/images/1200-630/8a74c79b67513047a00278f867afe7ff/tartine-a-lavocat-poulet-grille-et-tomates-sechees.jpg",
            price: "6.90",
          },
          {
            id: "1519055545-119",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Jambon fumé & mozzarella di bufala bio tomates séchées",
            description: "Mozzarella di bufala bio",
            picture: "https://menuonline.fr/pizza-roma-linne/images/photo_oNavIA.jpg",
            price: "6.90",
            popular: true
          },
          {
            id: "1519055545-120",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Tartine Jambon Blanc & Comté Bio",
            description: "",
            picture:
              "https://f.roocdn.com/images/menu_items/4607227/item-image.jpg",
              price: "6.90",
          },
          {
            id: "1519055545-121",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Tartine Houmous de Carotte & Féta",
            description:
              "Super graines bio, grenade, concombre et roquette (Végétarien)",
            picture:
              "https://f.roocdn.com/images/menu_items/5250426/item-image.jpg",
              price: "6.90",
          },
          {
            id: "1519055545-122",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Tartine  & Féta",
            description:
              "Super graines bio, grenade, concombre et roquette (Végétarien)",
            picture:
              "https://c8.alamy.com/compfr/cenm86/pain-grille-et-de-la-confiture-sur-fond-blanc-cenm86.jpg",
              price: "5.90",
          }
          
        ]
      },


      {


        name: "Soupe & plats chauds",
        meals: [
          {
            id: "1519055545-123",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Le déjeuner du boulanger",
            description:
              "Demi-tartine du jour & soupe du jour aux légumes bio, servi avec du pain bio et une salade de jeunes pousses bio",
              picture:"https://media-cdn.tripadvisor.com/media/photo-s/09/b6/e9/d2/dejeuner-du-boulanger.jpg",
            price: "6.90",
          },
          {
            id: "1519055545-124",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Soupe du jour aux légumes bio (100% végétalien)",
            description: "",
            picture:'https://www.papillesetpupilles.fr/wp-content/uploads/2020/10/Soupe-de-le%CC%81gumes.jpg',
            price: "6.90"
          },
          {
            id: "1519055545-125",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Pot-au-feu de légumes bio, curry bio et poulet grillé",
            description: "",
            picture:
            "https://f.roocdn.com/images/menu_items/1493250/item-image.jpg",
            price: "6.90",
           
          },
          {
            id: "1519055545-126",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title:
              "Pot-au-feu de légumes bio, quinoa bio & harissa bio (100% végétalien)",
            description: "",
            picture: "https://cdn.shopify.com/s/files/1/0549/3030/9375/files/prosain-plat-du-jour-sarrasin-legumes-360g.png?v=1692006177&width=533",
            price: "6.90",
            popular: true
          },
          {
            id: "1519055545-127",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Chili sin carne (vegan)",
            description:
              "3 haricots, purée avocat, spécialité au soja bio & cebettes",
               picture:
              "https://f.roocdn.com/images/menu_items/4607228/item-image.jpg",
            price: "6.90",
           
          },
          {
            id: "1519055545-128",
            "web-scraper-start-url":
              "https://deliveroo.fr/fr/menu/paris/3eme-temple/le-pain-quotidien-bretagne",
            title: "Curry de Coco aux Légumes",
            description:
              "Servi avec sarrasin bio et chutney de cassis au gingembre (VEGAN)",
            picture:
              "https://f.roocdn.com/images/menu_items/5250429/item-image.jpg",
              price: "6.90",
            popular: true
          }
        ]
    },

    {
        name: " plats de resistance",
        meals: [
          {
            id: "1519055545-129",
            "web-scraper-start-url":
              "",
            title: "Blanquette d'agneau au vin blanc",
            description:
              "Blanquette d'agneau au vin blanc",
              picture: "https://c8.alamy.com/compfr/bb50t0/plat-principal-boeuf-bb50t0.jpg",

            price: "20.90",
          },
          {
            id: "1519055545-130",
            "web-scraper-start-url":
              "https://www.cuisineaz.com/diaporamas/plats-de-bistrot-706/interne/1.aspx",
            title: "Blanquette de veau au vin blanc",
            description: "Blanquette de veau au vin blanc",
            picture: 'https://www.la-viande.fr/sites/default/files/inline-images/Blanquette-de-Veau-01.jpg',
            price: "23.90",
            
            
          },
          
          {
            id: "1519055545-131",
            "web-scraper-start-url":
              "https://chefsimon.com/recettes/tag/plat%20principal",
            title: "Riz",
            description: " plat du riz avec légumes et viandes",
            price: "9.90",
            picture:
              "https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_387,q_auto,w_650/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/tag_photos/original/2426/plat_principal_flickr_2304576748_f79c906b85_b.jpg"
          },
          {
            id: "1519055545-132",
            "web-scraper-start-url":
              "",
            title:
              "plats de resistance gourmand",
            description: "plats de resistance gourmand avec pomme de terre",
            picture: "https://c7.alamy.com/compfr/pkdeyf/dimanche-dejeuner-plat-principal-roti-de-boeuf-sauce-yorkshire-pudding-et-legumes-dans-une-ferme-cafa-pkdeyf.jpg",
            price: "6.90",
            popular: true
          },
          {
            id: "1519055545-133",
            "web-scraper-start-url":
              "https://www.kayak.fr/news/plats-traditionnels-francais/",
            title: "Bourguignon",
            description:
              "",
            picture:
              "https://www.kayak.fr/news/wp-content/uploads/sites/7/2022/02/theme_food_france-beef-bourguignon_getty_156391901_universal_within-usage-period_81984.jpg",
              price: "15.90",
          },
          
          {
            id: "1519055545-134",
            "web-scraper-start-url":
              "https://www.kayak.fr/news/plats-traditionnels-francais/",
            title: "ratatouille-ragout",
            description:
              "",
            picture:
              "https://www.kayak.fr/news/wp-content/uploads/sites/7/2022/02/theme_food_ratatouille-ragout_getty_1255691142_universal_within-usage-period_81981.jpg",
              price: "12.90",
            popular: true,
          },
          {
            id: "1519055545-135",
            "web-scraper-start-url":
              "",
            title:
              "plats de resistance gourmand avec viande et frites",
            description: "plats de resistance gourmand avec pomme de terre",
            picture: "https://media-cdn.tripadvisor.com/media/photo-s/19/f4/6a/fd/exemple-de-plats-de-resistance.jpg",
            price: "11.90",
            popular: true,
          },
          {
            id: "1519055545-136",
            "web-scraper-start-url":
              "",
            title:
              "plats de resistance gourmand avec viande et frites",
            description: "plats de resistance gourmand avec pomme de terre",
            picture: "https://www.photoculinaire.fr/wp-content/uploads/2017/10/dos-de-grenadier-au-lait-de-coco-et-curry.jpg",
            price: "12.90",
            popular: true,
          },
          
          
        ]
      
      },



      { name: "Sandwichs baguette", meals: [] },
      { name: "Desserts", meals: [] },
      { name: "Boissons fraîches", meals: [] },
      { name: "Epicerie bio", meals: [] },
      { name: "Repas corporate", meals: [] },
      { name: "Couverts", meals: [] }
    ]
  });
});

// Heroku va nous fournir une variable process.env.PORT
// if (process.env.PORT) {
//   app.listen(process.env.PORT, () => {
//     console.log("Server started");
//   });
// } else {
//   app.listen(3200, () => {
//     console.log("Server started");
//   });
// }


app.listen(process.env.PORT || 3200, () => {
  console.log("Server started");
});

//  Run !$npm install -g npm@10.5.1     to update!