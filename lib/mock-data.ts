export interface FoodResult {
  name: string;
  confidence: number;
  nutritionalInfo: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
    fiber: string;
  };
  history: string;
  ingredients: string[];
  allPredictions?: Array<{ 
    class: string; 
    confidence: number; 
    percentage: string;
  }>;
}

export const mockFoodData: Record<string, FoodResult> = {
  "jollof-rice": {
    name: "Jollof Rice",
    confidence: 0.95,
    nutritionalInfo: {
      calories: 350,
      protein: "8g",
      carbs: "65g",
      fat: "12g",
      fiber: "3g",
    },
    history:
      "Jollof rice is a beloved West African dish with origins dating back to the 14th century Wolof Empire. The Nigerian version is known for its smoky flavor and vibrant red color, achieved through a careful balance of tomatoes, peppers, and spices. It's a staple at celebrations and has sparked friendly competition between West African nations over who makes it best.",
    ingredients: [
      "Rice",
      "Tomatoes",
      "Peppers",
      "Onions",
      "Tomato paste",
      "Curry powder",
      "Thyme",
      "Bay leaves",
    ],
  },
  "egusi-soup": {
    name: "Egusi Soup",
    confidence: 0.92,
    nutritionalInfo: {
      calories: 420,
      protein: "18g",
      carbs: "15g",
      fat: "32g",
      fiber: "5g",
    },
    history:
      "Egusi soup is a traditional Nigerian soup made from melon seeds (egusi). Rich in protein and healthy fats, this dish has been prepared for centuries across Nigeria. The ground melon seeds create a thick, hearty soup that's typically enjoyed with pounded yam, fufu, or eba. Each region has its own variation, making it one of Nigeria's most versatile dishes.",
    ingredients: [
      "Melon seeds (Egusi)",
      "Palm oil",
      "Spinach",
      "Meat",
      "Stockfish",
      "Crayfish",
      "Peppers",
      "Onions",
    ],
  },
  suya: {
    name: "Suya",
    confidence: 0.89,
    nutritionalInfo: {
      calories: 280,
      protein: "25g",
      carbs: "8g",
      fat: "18g",
      fiber: "2g",
    },
    history:
      "Suya is a popular Nigerian street food with roots in the Hausa people of Northern Nigeria. These spicy grilled meat skewers are coated in yaji (a blend of ground peanuts and spices), creating a unique flavor profile. Originally sold by Hausa traders, suya has become a nationwide favorite and a symbol of Nigerian street food culture.",
    ingredients: [
      "Beef",
      "Groundnut (peanut)",
      "Cayenne pepper",
      "Ginger",
      "Garlic powder",
      "Onion powder",
      "Seasoning cube",
    ],
  },
  "pounded-yam": {
    name: "Pounded Yam",
    confidence: 0.88,
    nutritionalInfo: {
      calories: 320,
      protein: "4g",
      carbs: "76g",
      fat: "1g",
      fiber: "4g",
    },
    history:
      "Pounded yam is a staple Nigerian swallow made from yam tubers. Traditionally prepared by pounding boiled yam in a mortar with a pestle, this labor-intensive process creates a smooth, stretchy consistency. It's considered a delicacy and is often served at special occasions with rich Nigerian soups.",
    ingredients: ["Yam tubers", "Water"],
  },
  akara: {
    name: "Akara",
    confidence: 0.91,
    nutritionalInfo: {
      calories: 165,
      protein: "9g",
      carbs: "18g",
      fat: "6g",
      fiber: "4g",
    },
    history:
      "Akara, also known as bean cakes or kosai, is a popular Nigerian breakfast food made from peeled black-eyed peas. With origins tracing back to West Africa, this fried snack has variations across the African diaspora. Crispy on the outside and soft inside, akara is often enjoyed with pap (ogi) or bread.",
    ingredients: [
      "Black-eyed peas",
      "Onions",
      "Peppers",
      "Salt",
      "Vegetable oil",
    ],
  },
  "moi-moi": {
    name: "Moi Moi",
    confidence: 0.88,
    nutritionalInfo: {
      calories: 185,
      protein: "12g",
      carbs: "22g",
      fat: "7g",
      fiber: "5g",
    },
    history:
      "Moi Moi is a steamed bean pudding made from peeled black-eyed peas. This protein-rich dish is a staple in Nigerian cuisine, often served as a side dish or main course. Traditionally steamed in banana leaves, modern preparations use containers or molds. It's a popular party food and breakfast item.",
    ingredients: [
      "Black-eyed peas",
      "Peppers",
      "Onions",
      "Eggs",
      "Vegetable oil",
      "Seasoning",
      "Fish or meat (optional)",
    ],
  },
  "efo-riro": {
    name: "Efo Riro",
    confidence: 0.86,
    nutritionalInfo: {
      calories: 320,
      protein: "15g",
      carbs: "12g",
      fat: "24g",
      fiber: "6g",
    },
    history:
      "Efo Riro is a rich Yoruba vegetable soup featuring spinach or African spinach. The name literally means 'stirred leafy vegetable.' This nutritious soup is packed with vegetables, protein, and palm oil, creating a flavorful dish typically enjoyed with pounded yam, eba, or rice.",
    ingredients: [
      "Spinach/Efo shoko",
      "Palm oil",
      "Assorted meat",
      "Stockfish",
      "Peppers",
      "Tomatoes",
      "Onions",
      "Locust beans",
    ],
  },
  "okra-soup": {
    name: "Okra Soup",
    confidence: 0.84,
    nutritionalInfo: {
      calories: 290,
      protein: "16g",
      carbs: "18g",
      fat: "20g",
      fiber: "4g",
    },
    history:
      "Okra soup is a popular Nigerian soup known for its distinctive slimy texture from fresh okra. The mucilaginous nature of okra makes it a natural thickener. This soup is enjoyed across Nigeria with regional variations, often paired with fufu, eba, or pounded yam.",
    ingredients: [
      "Fresh okra",
      "Palm oil",
      "Assorted meat",
      "Fish",
      "Crayfish",
      "Peppers",
      "Uziza leaves",
      "Seasoning",
    ],
  },
  "ofada-rice": {
    name: "Ofada Rice",
    confidence: 0.87,
    nutritionalInfo: {
      calories: 340,
      protein: "7g",
      carbs: "70g",
      fat: "4g",
      fiber: "3g",
    },
    history:
      "Ofada rice is an unpolished, locally grown rice with a unique aroma and taste. Named after Ofada town in Ogun State, this brown rice is often served with a spicy green pepper sauce called Ayamase or Ofada sauce. It's a celebration food that showcases indigenous Nigerian ingredients.",
    ingredients: [
      "Ofada rice",
      "Green peppers",
      "Scotch bonnet",
      "Locust beans",
      "Palm oil",
      "Assorted meat",
    ],
  },
  "banga-soup": {
    name: "Banga Soup",
    confidence: 0.82,
    nutritionalInfo: {
      calories: 380,
      protein: "14g",
      carbs: "16g",
      fat: "30g",
      fiber: "4g",
    },
    history:
      "Banga soup, also known as Ofe Akwu, is a traditional Niger Delta soup made from palm fruit extract. This rich, oily soup is a delicacy in Southern Nigeria, particularly among the Urhobo, Isoko, and Itsekiri people. It's known for its distinctive reddish-orange color and rich flavor.",
    ingredients: [
      "Palm fruit extract",
      "Fresh fish",
      "Dried fish",
      "Banga spice",
      "Scent leaves",
      "Onions",
      "Peppers",
    ],
  },
  "pepper-soup": {
    name: "Pepper Soup",
    confidence: 0.90,
    nutritionalInfo: {
      calories: 220,
      protein: "28g",
      carbs: "8g",
      fat: "10g",
      fiber: "2g",
    },
    history:
      "Pepper soup is a light, spicy broth made with various meats or fish. This medicinal soup is believed to have healing properties and is often served to nursing mothers. The aromatic spices create a warming, peppery broth that's enjoyed as an appetizer or light meal across Nigeria.",
    ingredients: [
      "Meat or fish",
      "Pepper soup spice",
      "Uziza seeds",
      "Ehuru seeds",
      "Scent leaves",
      "Peppers",
      "Onions",
    ],
  },
  nkwobi: {
    name: "Nkwobi",
    confidence: 0.85,
    nutritionalInfo: {
      calories: 340,
      protein: "32g",
      carbs: "6g",
      fat: "22g",
      fiber: "1g",
    },
    history:
      "Nkwobi is an Igbo delicacy made from cow foot (or sometimes goat meat) cooked in a spicy palm oil sauce. This rich dish originated from Eastern Nigeria and has become popular across the country. It's typically served as a special occasion meal or appetizer.",
    ingredients: [
      "Cow foot",
      "Palm oil",
      "Utazi leaves",
      "Ehuru (calabash nutmeg)",
      "Potash",
      "Onions",
      "Peppers",
      "Seasoning",
    ],
  },
  amala: {
    name: "Amala",
    confidence: 0.86,
    nutritionalInfo: {
      calories: 330,
      protein: "3g",
      carbs: "78g",
      fat: "0.5g",
      fiber: "5g",
    },
    history:
      "Amala is a Yoruba staple food made from yam flour or cassava flour. The dark brown color comes from dried yam that's been roasted. This smooth, stretchy swallow is a favorite in Western Nigeria, typically paired with ewedu, gbegiri, or efo riro soup.",
    ingredients: ["Yam flour (Elubo)", "Hot water"],
  },
  "ewedu-soup": {
    name: "Ewedu Soup",
    confidence: 0.88,
    nutritionalInfo: {
      calories: 85,
      protein: "4g",
      carbs: "12g",
      fat: "3g",
      fiber: "3g",
    },
    history:
      "Ewedu is a slimy soup made from jute leaves, popular among the Yoruba people. The leaves are cooked and blended to create a smooth, viscous texture. Often served with gbegiri (bean soup) and paired with amala, this nutritious soup is a staple in Western Nigerian cuisine.",
    ingredients: [
      "Jute leaves (Ewedu)",
      "Potash",
      "Locust beans",
      "Peppers",
      "Seasoning",
    ],
  },
  "ogbono-soup": {
    name: "Ogbono Soup",
    confidence: 0.83,
    nutritionalInfo: {
      calories: 350,
      protein: "14g",
      carbs: "20g",
      fat: "26g",
      fiber: "6g",
    },
    history:
      "Ogbono soup, also called draw soup, is made from ground African mango seeds (ogbono). The seeds create a characteristic slimy, viscous texture that makes the soup 'draw' when pulled. This popular Nigerian soup is enjoyed nationwide and pairs perfectly with any swallow.",
    ingredients: [
      "Ground ogbono seeds",
      "Palm oil",
      "Assorted meat",
      "Stockfish",
      "Bitter leaf",
      "Crayfish",
      "Peppers",
      "Uziza leaves",
    ],
  },
  "yam-porridge": {
    name: "Yam Porridge",
    confidence: 0.87,
    nutritionalInfo: {
      calories: 310,
      protein: "8g",
      carbs: "58g",
      fat: "12g",
      fiber: "6g",
    },
    history:
      "Yam porridge (Asaro) is a delicious one-pot meal made with yam, tomatoes, and peppers. This comfort food is popular across Nigeria, with each region adding its unique touch. It's a satisfying meal that showcases the versatility of yam, Nigeria's most important tuber crop.",
    ingredients: [
      "Yam",
      "Palm oil",
      "Tomatoes",
      "Peppers",
      "Onions",
      "Crayfish",
      "Dried fish",
      "Seasoning",
    ],
  },
  "puff-puff": {
    name: "Puff Puff",
    confidence: 0.92,
    nutritionalInfo: {
      calories: 180,
      protein: "4g",
      carbs: "28g",
      fat: "8g",
      fiber: "1g",
    },
    history:
      "Puff puff is a beloved Nigerian snack, similar to doughnuts but without the hole. These deep-fried dough balls are slightly sweet and fluffy inside with a golden exterior. They're a popular street food and party snack, enjoyed by all age groups across Nigeria.",
    ingredients: [
      "Flour",
      "Sugar",
      "Yeast",
      "Water",
      "Salt",
      "Nutmeg (optional)",
      "Vegetable oil",
    ],
  },
  "chin-chin": {
    name: "Chin Chin",
    confidence: 0.90,
    nutritionalInfo: {
      calories: 195,
      protein: "3g",
      carbs: "32g",
      fat: "9g",
      fiber: "1g",
    },
    history:
      "Chin chin is a crunchy, slightly sweet fried snack that's a staple at Nigerian celebrations. These bite-sized treats have a cookie-like texture and can be flavored with nutmeg or coconut. They're a must-have at parties, holidays, and are perfect for snacking anytime.",
    ingredients: [
      "Flour",
      "Sugar",
      "Butter",
      "Eggs",
      "Milk",
      "Nutmeg",
      "Baking powder",
      "Vegetable oil",
    ],
  },
};

// Normalize function to match API responses
const normalizeName = (name: string): string => {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "-");
};

export function getMockFoodResult(query?: string): FoodResult {
  const foods = Object.values(mockFoodData);
  return foods[Math.floor(Math.random() * foods.length)];
}

export function getFoodDataByName(name: string): Omit<FoodResult, "confidence"> {
  const normalized = normalizeName(name);
  const foodData = mockFoodData[normalized];
  
  if (foodData) {
    return {
      name: foodData.name,
      nutritionalInfo: foodData.nutritionalInfo,
      history: foodData.history,
      ingredients: foodData.ingredients,
    };
  }
  
  // Return default data if food not found
  return {
    name: name,
    nutritionalInfo: {
      calories: 300,
      protein: "10g",
      carbs: "40g",
      fat: "12g",
      fiber: "4g",
    },
    history: "A delicious Nigerian dish with rich cultural heritage.",
    ingredients: ["Traditional Nigerian ingredients"],
  };
}
