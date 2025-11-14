# 🍲 FoodVision - Nigerian Food Recognition App

An AI-powered web application that identifies Nigerian dishes from images and provides detailed nutritional information and cultural history.

## ✨ Features

- 📸 **Image Upload/Capture**: Upload or capture photos of Nigerian dishes
- 🤖 **AI Recognition**: Identify Nigerian foods with high accuracy
- 📊 **Nutritional Info**: Get detailed nutritional breakdown (calories, protein, carbs, fat, fiber)
- 📚 **Cultural History**: Learn about the origins and traditions behind each dish
- 📱 **Mobile-First Design**: Optimized for mobile devices with responsive layouts
- 🎨 **Modern UI**: Clean white and yellow color scheme

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel/Netlify

## 📦 Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔧 API Integration

The app is currently running with **mock data**. To integrate with your actual API:

1. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_API_ENDPOINT=your_api_endpoint_here
```

2. Update the `transformApiResponse` function in `lib/api.ts` to match your API's response format

3. The API service in `lib/api.ts` expects a POST request with FormData containing the image file

### Expected API Response Format

```json
{
  "food_name": "Jollof Rice",
  "confidence": 0.95,
  "nutrition": {
    "calories": 350,
    "protein": "8g",
    "carbs": "65g",
    "fat": "12g",
    "fiber": "3g"
  },
  "ingredients": ["Rice", "Tomatoes", "Peppers", "Onions"],
  "history": "Cultural and historical information about the dish..."
}
```

## 🗂️ Project Structure

```
foodvision/
├── app/
│   ├── page.tsx              # Homepage
│   ├── scan/page.tsx         # Image upload/scan page
│   ├── results/page.tsx      # Results display page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Button.tsx            # Reusable button component
│   ├── Card.tsx              # Card components
│   ├── ImageUpload.tsx       # Image upload component
│   └── Loading.tsx           # Loading states
├── lib/
│   ├── api.ts                # API service layer
│   ├── mock-data.ts          # Mock Nigerian food data
│   └── utils.ts              # Utility functions
└── public/                   # Static assets
```

## 🎨 Customization

### Colors

Edit `app/globals.css` to customize the color scheme:

```css
:root {
  --primary: #ffffff;       /* White */
  --secondary: #fbbf24;     /* Yellow */
  --secondary-dark: #f59e0b; /* Darker yellow */
  --accent: #10b981;        /* Green for success states */
}
```

### Mock Food Data

Currently includes mock data for:
- Jollof Rice
- Egusi Soup
- Suya
- Pounded Yam
- Akara (Bean Cakes)

Add more in `lib/mock-data.ts` for testing.

## 🛠️ Development Scripts

- **Dev Server**: `pnpm dev`
- **Build**: `pnpm build`
- **Start**: `pnpm start`
- **Lint**: `pnpm lint`

## 🚀 Deploy on Vercel

1. Push to GitHub
2. Import project to Vercel
3. Add environment variables (API endpoint)
4. Deploy!

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📝 Roadmap

- [ ] Integrate real API endpoint
- [ ] Add recipe fetching feature
- [ ] Implement user history/favorites
- [ ] Add share functionality
- [ ] Multi-language support
- [ ] Offline mode with PWA

## 🙏 Acknowledgments

- Model: [Nigerian Food Classification](https://huggingface.co/spaces/cicerothoma/nigerian_food_classification)
- Icons: [Lucide Icons](https://lucide.dev/)
- Framework: [Next.js](https://nextjs.org/)

---

Built with ❤️ for Nigerian cuisine
