import { newItem} from "../controllers/menu_item_controller";

//logos
let burger_logo = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/hamburger_1f354.png"
let roll_logo = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/hot-dog_1f32d.png"
let chicken_logo = "https://www.emoji.com/wp-content/uploads/filebase/thumbnails/icons/emoji-icons-glossy-icons-food-drink-icons-food-drink-prepared-food-roasted%20chicken-72dpi-forPersonalUseOnly.png"
let chips_logo = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/314/french-fries_1f35f.png"
let fish_logo = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/softbank/145/fish_1f41f.png"
let child_logo = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/child_1f9d2.png"
let meal_deal_logo = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/softbank/145/money-bag_1f4b0.png"
let hot_box_logo = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/openmoji/292/oden_1f362.png"


//seed for db
export const seed=()=>{
    //burgers
    newItem({title: "Hamburger", price: "7.50", food_type:"burger", ingredients:"BEEF PATTY, ONION, TOMATO, LETTUCE, BEETROOT, CHEESE & SAUCE", img_source: burger_logo, available: true})
    newItem({title:"Hamburger W/ The Lot", price:"9.00", food_type:"burger", ingredients:"BEEF PATTY, BACON, EGG, PINEAPPLE, CHEESE, ONION, TOMATO, LETTUCE, BEETROOT & SAUCE", img_source: burger_logo, available: true})
    newItem({title:"Chicken Burger", price:"7.50", food_type:"burger", ingredients:"CHICKEN BREAST FILLET, TOMATO, LETUCE, BEETROOT, CHEESE & AIOLI ", img_source: burger_logo, available: true})
    newItem({title:"Steak Burger", price:"9.00", food_type:"burger", ingredients:"STEAK, ONION, TOMATO, BEETROOT, LETTUCE, CHEESE & SAUCE",img_source: burger_logo, available: true})
    newItem({title:"Steak Burger W/ The Lott", price:"10.50", food_type:"burger", ingredients:"STEAK, BACON, EGG, ONION, PINEAPPLE, TOMATO, LETTUCE, BEETROOT, CHEESE & SAUCE", img_source: burger_logo, available: true})
    newItem({title:"Bacon & Egg Burger", price:"5.50", food_type:"burger", ingredients:"BACON, EGG, CHEESE, ONION & SAUCE", img_source: burger_logo, available: true})
    newItem({title:"Bacon & Egg Burger W/ Salad", price:"7.50", food_type:"burger", ingredients:"BACON, EGG, ONION, LETTUCE, TOMATO, BEETROOT, CHEESE & SAUCE",img_source: burger_logo, available: true})
    newItem({title:"Fish Burger", price:"7.50", food_type:"burger", ingredients:" FILLET CRUMBED FISH, LETTUCE, TOMATO, SALAD ONION, CHEESE & MAYO",img_source: burger_logo, available: true})

    //rolls
    newItem({title:"Hot Dog", price:"4.00", food_type:"roll", ingredients:"HOT DOG SAUSAGE w/ TOMATO SAUCE & MUSTARD", img_source: roll_logo, available: true})
    newItem({title: "Hot Dog W/ The Lot", price:"5.50", food_type:"roll", ingredients:"HOT DOG SAUSAGE, BACON, ONION, CHEESE, TOMATO SAUCE & MUSTARD",img_source: roll_logo, available: true})
    newItem({title:"Pork Riblet", price:"6.00", food_type:"roll", ingredients:"PORK RIBLET, CHEESE, HASH BROWN W/SMOKEY BBQ SAUCE", img_source: roll_logo, available: true})
    newItem({title:"Smokey Chicken & Bacon", price:"6.00", food_type:"roll", ingredients:"CHICKEN BREAST TENDERS, BACON, CHEESE & SMOKEY BBQ SAUCE",img_source: roll_logo, available: true})
    newItem({title: "Chicken & Gravy ",price: "5.50", food_type:"roll",ingredients: "CHICKEN & CHICKEN GRAVY",img_source: roll_logo, available: true})
    newItem({title:"Chicken, Mayo & Aioli ", price:"5.50", food_type:"roll", ingredients: "CHICKEN, MAYONNAISE & AILOI", img_source: roll_logo, available: true})
    newItem({title:"Savoury Mince", price:"6.00", food_type:"roll", ingredients:"SAVOURY MINCE & CHEESE", img_source: roll_logo, available: true})

    //chicken
    newItem({title:"Whole Chicken", price:"12.50", food_type:"chicken", ingredients:"ONE WHOLE ROTISSERIE CHICKEN", img_source: chicken_logo, available: true})
    newItem({title:"1/2 Chicken", price:"6.50", food_type:"chicken", ingredients:"ONE HALF CHICKEN", img_source: chicken_logo, available: true})
    newItem({title:"1/4 Chicken & Chips", price:"6.50", food_type:"chicken", ingredients:"ONE QUARTER ROTISSERIE CHICKEN WITH CHIPS", img_source: chicken_logo, available: true})
    newItem({title:"1/2 Chicken & Chips", price:"9.50", food_type:"chicken", ingredients:"ONE HALF CHICKEN WITH CHIPS", img_source: chicken_logo, available: true})     

    //chips
    newItem({title:"$3 Chips", price:"3.00", food_type:"chips", ingredients: null, img_source: chips_logo, available: true})
    newItem({title:"$5 Chips", price:"5.00", food_type:"chips",ingredients: null,img_source: chips_logo, available: true})
    newItem({title:"$7 Chips", price:"7.00", food_type:"chips", ingredients: null, img_source: chips_logo, available: true})
    newItem({title:"$10 Chips", price:"10.00", food_type:"chips", ingredients: null, img_source: chips_logo, available: true})

    //fish
    newItem({title:"1 x Cod Fillet", price:"6.00", food_type:"fish", ingredients:"ONE COD FILLET (CRUMBED OR BATTERED)",img_source: fish_logo, available: true})
    newItem({title:"4 Piece Pack", price:"30.00", food_type:"fish", ingredients:"4 PIECE CRUMBED COD & FAMILY CHIPS",img_source: fish_logo, available: true})

    //kids meals
    newItem({title:"Pluto Pup & Chips", price:"6.00", food_type:"kids_meal", ingredients: null, img_source: child_logo, available: true})
    newItem({title:"3 Chicken Nuggets & Chips", price:"5.50", food_type:"kids_meal", ingredients:null, img_source: child_logo, available: true})
    newItem({title:"Fish & Chips", price:"6.00", food_type:"kids_meal", ingredients: null, img_source: child_logo, available: true})

    //meal deals
    newItem({title:"WHOLE CHICKEN, FAMILY CHIPS, LG GRAVY, 1.25LT SOFTDRINK", price:"23.00", food_type:"meal_deal", ingredients: null,img_source: meal_deal_logo, available: true})
    newItem({title:"4 HAMBURGERS, FAMILY CHIPS, 1.25LT SOFTDRINK", price:"36.00", food_type:"meal_deal", ingredients: null,img_source: meal_deal_logo, available: true})

    //hotbox
    newItem({title:"GARLIC CHICKEN BALL", price:"1.50", food_type:"hot_box",ingredients: null, img_source: hot_box_logo, available: true})
    newItem({title:"battered sav", price:"3.50", food_type:"hot_box", ingredients: null,img_source: hot_box_logo, available: true})
    newItem({title:"pluto pup", price:"3.50", food_type:"hot_box",ingredients: null, img_source: hot_box_logo, available: true})
    newItem({title:"beef croquette", price:"1.70", food_type:"hot_box", ingredients: null, img_source: hot_box_logo, available: true})
    newItem({title:"chiko", price:"3.00", food_type:"hot_box", ingredients: null, img_source: hot_box_logo, available: true})
    newItem({title:"cheese kransky", price:"3.50", food_type:"hot_box", ingredients: null, img_source: hot_box_logo, available: true})
    newItem({title:"topper", price: "3.50", food_type: "hot_box", ingredients: null, img_source: hot_box_logo, available: true})
    newItem({title:"crumbed drumstick", price:"3.00", food_type:"hot_box",ingredients: null, img_source: hot_box_logo, available: true})
    newItem({title: "4 x chicken tenders", price:"5.00", food_type:"hot_box", ingredients: null, img_source: hot_box_logo, available: true})
    newItem({title:"kabana", price:"3.00", food_type:"hot_box", ingredients: null, img_source: hot_box_logo, available: true})
    newItem({title:"10 X CHICken CHEESEBURGER BITES", price:"5.00", food_type:"hot_box", ingredients: null, img_source: hot_box_logo, available: true})
    newItem({title:"chicken kebab", price:"4.50", food_type:"hot_box",ingredients: null, img_source: hot_box_logo, available: true})
    newItem({title:"chicken chippies", price:"5.00", food_type:"hot_box", ingredients: null, img_source: hot_box_logo, available: true})
    newItem({title:"potato scallop", price:"1.50", food_type:"hot_box", ingredients: null, img_source: hot_box_logo, available: true})
    newItem({title:"calamari ring", price:"1.00", food_type:"hot_box", ingredients: null, img_source: hot_box_logo, available: true})
    newItem({title: "onion ring", price:"1.00", food_type:"hot_box",ingredients: null, img_source: hot_box_logo, available: true})
    newItem({title:"pie", price:"4.80", food_type: "hot_box",ingredients: null,img_source: hot_box_logo, available: true})
    newItem({title:"sausage roll", price:"3.70", food_type:"hot_box",ingredients: null,img_source: hot_box_logo, available: true})
    newItem({title:"mega sausage roll", price:"4.50", food_type:"hot_box",ingredients: null,img_source: hot_box_logo, available: true})


}

