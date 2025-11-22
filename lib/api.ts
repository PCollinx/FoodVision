import { FoodResult, getFoodDataByName } from "./mock-data";

// Configuration
const API_CONFIG = {
  endpoint: process.env.NEXT_PUBLIC_API_ENDPOINT || "https://naija-food-classifier-server.onrender.com/predict",
  timeout: 30000, // 30 seconds
};

/**
 * Analyzes a food image using the API
 * @param imageFile - The image file to analyze
 * @returns Promise with the food recognition result
 */
export async function analyzeFoodImage(imageFile: File): Promise<FoodResult> {
  try {
    // Create FormData to send the image
    const formData = new FormData();
    formData.append("image", imageFile); // Server expects 'image' field

    // Make API request
    const response = await fetch(API_CONFIG.endpoint, {
      method: "POST",
      body: formData,
      signal: AbortSignal.timeout(API_CONFIG.timeout),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    // Transform API response to match our FoodResult interface
    // Adjust this based on your actual API response format
    return transformApiResponse(data);
  } catch (error) {
    console.error("Error analyzing food image:", error);
    throw new Error("Failed to analyze image. Please try again.");
  }
}

/**
 * Transforms the API response to match our FoodResult interface
 * Server returns: { success: true, predictions: [...], top_prediction: {...} }
 */
function transformApiResponse(apiData: {
  success: boolean;
  predictions: Array<{ class: string; confidence: number; percentage: string }>;
  top_prediction: { class: string; confidence: number; percentage: string };
}): FoodResult {
  const topPrediction = apiData.top_prediction;
  const foodName = topPrediction.class;
  
  // Get additional data from our database
  const foodData = getFoodDataByName(foodName);
  
  return {
    name: foodName,
    confidence: topPrediction.confidence,
    nutritionalInfo: foodData.nutritionalInfo,
    history: foodData.history,
    ingredients: foodData.ingredients,
    allPredictions: apiData.predictions.slice(0, 3), // Include top 3 predictions
  };
}

/**
 * Validates if the API endpoint is configured
 */
export function isApiConfigured(): boolean {
  return (
    API_CONFIG.endpoint !== "YOUR_API_ENDPOINT_HERE" &&
    API_CONFIG.endpoint !== ""
  );
}
