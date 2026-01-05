# 🍲 FoodVision - Nigerian Food Recognition App

An AI-powered web application that identifies Nigerian dishes from images and provides detailed nutritional information and cultural history.

## ✨ Features

- 📸 **Image Upload/Capture**: Upload or capture photos of Nigerian dishes
- 🤖 **AI Recognition**: Identify Nigerian foods with high accuracy
- 📊 **Nutritional Info**: Get detailed nutritional breakdown (calories, protein, carbs, fat, fiber)
- 📚 **Cultural History**: Learn about the origins and traditions behind each dish
- 📱 **Progressive Web App**: Install on Android & iOS - works like a native app!
- 🔄 **Offline Support**: Access cached content without internet
- 🎨 **Modern UI**: Clean white and yellow color scheme
- ⚡ **Fast Loading**: Optimized with service worker caching

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **PWA**: next-pwa with service workers
- **Deployment**: Ready for Vercel/Netlify (HTTPS required for PWA)

## 📦 Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Generate PWA Icons

Visit `http://localhost:3000/generate-icons.html` to generate all required app icons, then download and save them to the `/public/` directory.

## 🔧 API Integration

✅ **LIVE AND INTEGRATED!** The app is connected to the Nigerian Food Classification API.

- **API Endpoint**: `https://naija-food-classifier-server.onrender.com/predict`
- **Model**: EfficientNetB4 (~72.2% validation accuracy)
- **Classes**: 18 Nigerian food dishes
- **Server**: Flask + PyTorch on Render

### How It Works

1. Upload image → Sent to API via FormData
2. Server processes with EfficientNetB4 model
3. Returns top predictions with confidence scores
4. App enriches with nutritional info & cultural history
5. Display comprehensive results to user

### Actual API Response Format

```json
{
  "success": true,
  "predictions": [
    { "class": "Jollof Rice", "confidence": 0.89, "percentage": "89.00%" },
    { "class": "Ofada Rice", "confidence": 0.08, "percentage": "8.00%" },
    { "class": "Yam Porridge", "confidence": 0.03, "percentage": "3.00%" }
  ],
  "top_prediction": { "class": "Jollof Rice", "confidence": 0.89, ... }
}
```

See [API_INTEGRATION.md](./API_INTEGRATION.md) for detailed integration documentation.

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
  --primary: #ffffff; /* White */
  --secondary: #fbbf24; /* Yellow */
  --secondary-dark: #f59e0b; /* Darker yellow */
  --accent: #10b981; /* Green for success states */
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

## 📱 Progressive Web App

FoodVision is a full-featured PWA! Users can:

- **Install** the app on Android, iOS, and Desktop
- **Work offline** with cached content
- **Get updates** automatically in the background
- **Enjoy** a native app-like experience

See [PWA_GUIDE.md](./PWA_GUIDE.md) for detailed installation instructions and technical details.

## 📝 Roadmap

- [x] Integrate real API endpoint ✅
- [x] Offline mode with PWA ✅
- [x] Install to home screen (Android & iOS) ✅
- [ ] Add recipe fetching feature
- [ ] Implement user history/favorites
- [ ] Add share functionality
- [ ] Image optimization before upload
- [ ] Push notifications
- [ ] Background sync for failed uploads
- [ ] Multi-language support
- [ ] User feedback for predictions

## 🙏 Acknowledgments

- Model: [Nigerian Food Classification](https://huggingface.co/spaces/cicerothoma/nigerian_food_classification)
- Icons: [Lucide Icons](https://lucide.dev/)
- Framework: [Next.js](https://nextjs.org/)

---

Built with ❤️ for Nigerian cuisine
