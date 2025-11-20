import { FoodResult } from "./mock-data";

// Configuration
const API_CONFIG = {
  // Replace this with your actual API endpoint when ready
  endpoint: process.env.NEXT_PUBLIC_API_ENDPOINT || "YOUR_API_ENDPOINT_HERE",
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
    formData.append("file", imageFile);

    // Make API request
    const response = await fetch(API_CONFIG.endpoint, {
      method: "POST",
      body: formData,
      headers: {
        // Add any required headers here
        // 'Authorization': `Bearer ${API_KEY}`,
      },
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
 * Adjust this function based on your actual API response structure
 */
function transformApiResponse(apiData: any): FoodResult {
  // Example transformation - modify based on your API's actual response format
  return {
    name: apiData.food_name || apiData.name || "Unknown Food",
    confidence: apiData.confidence || 0,
    nutritionalInfo: {
      calories: apiData.nutrition?.calories || 0,
      protein: apiData.nutrition?.protein || "0g",
      carbs:
        apiData.nutrition?.carbs || apiData.nutrition?.carbohydrates || "0g",
      fat: apiData.nutrition?.fat || "0g",
      fiber: apiData.nutrition?.fiber || "0g",
    },
    history: apiData.history || apiData.description || "No history available.",
    ingredients: apiData.ingredients || [],
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
