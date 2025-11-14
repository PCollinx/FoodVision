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
    history: "Jollof rice is a beloved West African dish with origins dating back to the 14th century Wolof Empire. The Nigerian version is known for its smoky flavor and vibrant red color, achieved through a careful balance of tomatoes, peppers, and spices. It's a staple at celebrations and has sparked friendly competition between West African nations over who makes it best.",
    ingredients: ["Rice", "Tomatoes", "Peppers", "Onions", "Tomato paste", "Curry powder", "Thyme", "Bay leaves"],
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
    history: "Egusi soup is a traditional Nigerian soup made from melon seeds (egusi). Rich in protein and healthy fats, this dish has been prepared for centuries across Nigeria. The ground melon seeds create a thick, hearty soup that's typically enjoyed with pounded yam, fufu, or eba. Each region has its own variation, making it one of Nigeria's most versatile dishes.",
    ingredients: ["Melon seeds (Egusi)", "Palm oil", "Spinach", "Meat", "Stockfish", "Crayfish", "Peppers", "Onions"],
  },
  "suya": {
    name: "Suya",
    confidence: 0.89,
    nutritionalInfo: {
      calories: 280,
      protein: "25g",
      carbs: "8g",
      fat: "18g",
      fiber: "2g",
    },
    history: "Suya is a popular Nigerian street food with roots in the Hausa people of Northern Nigeria. These spicy grilled meat skewers are coated in yaji (a blend of ground peanuts and spices), creating a unique flavor profile. Originally sold by Hausa traders, suya has become a nationwide favorite and a symbol of Nigerian street food culture.",
    ingredients: ["Beef", "Groundnut (peanut)", "Cayenne pepper", "Ginger", "Garlic powder", "Onion powder", "Seasoning cube"],
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
    history: "Pounded yam is a staple Nigerian swallow made from yam tubers. Traditionally prepared by pounding boiled yam in a mortar with a pestle, this labor-intensive process creates a smooth, stretchy consistency. It's considered a delicacy and is often served at special occasions with rich Nigerian soups.",
    ingredients: ["Yam tubers", "Water"],
  },
  "akara": {
    name: "Akara (Bean Cakes)",
    confidence: 0.91,
    nutritionalInfo: {
      calories: 165,
      protein: "9g",
      carbs: "18g",
      fat: "6g",
      fiber: "4g",
    },
    history: "Akara, also known as bean cakes or kosai, is a popular Nigerian breakfast food made from peeled black-eyed peas. With origins tracing back to West Africa, this fried snack has variations across the African diaspora. Crispy on the outside and soft inside, akara is often enjoyed with pap (ogi) or bread.",
    ingredients: ["Black-eyed peas", "Onions", "Peppers", "Salt", "Vegetable oil"],
  },
};

export function getMockFoodResult(query?: string): FoodResult {
  const foods = Object.values(mockFoodData);
  return foods[Math.floor(Math.random() * foods.length)];
}
