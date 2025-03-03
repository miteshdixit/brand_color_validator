# ImagiDator

ImagiDator is a web application designed to analyze the contrast of an uploaded image and check if it matches the brand colors of the app. It provides a detailed contrast report, ensures accessibility compliance, and allows users to download the report. The app also includes a chatbot for user assistance.

## Features

### Frontend Features

- **Image Upload**: Users can upload images using drag-and-drop or by browsing files.
- **Image Analysis**: The frontend communicates with the backend to extract and display the color palette(can copy also) and Image.
- **Color Matching**: Identifies the closest brand color that matches the uploaded image.
- **Contrast Check**: Verifies if the image meets contrast standards for accessibility.
- **Report Display**: Shows extracted colors, closest brand color, and accessibility issues.
- **Download Report**: Users can download the analysis report as a PDF.
- **ChatBot**: Assists users with any questions related to the image contrast analysis.

### Backend Features

- **Image Processing**: Uses `multer` for storing images and `sharp` for processing.
- **Color Extraction**: Extracts dominant colors from the image using `node-vibrant`.
- **Contrast Analysis**: Evaluates contrast ratios using `wcag-contrast`.
- **Color Matching**: Uses `color-diff` to compare and find the closest brand color.
- **CORS Handling**: Enables secure communication between the frontend and backend.
- **API Endpoints**: Provides endpoints for uploading images and retrieving analysis data.

## Tech Stack

- **Frontend**: React.js, tailwind, Axios
- **Backend**: Node.js, Express.js, Multer, Sharp, Node-Vibrant, WCAG-Contrast, Color-Diff
- **Database**: Not required (stateless processing)

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/miteshdixit/brand_color_validator.git
   ```

2. Navigate to the frontend directory and install dependencies:

   ```sh
   cd imagidator/frontend
   npm install
   ```

3. Navigate to the backend directory and install dependencies:
   ```sh
   cd ../backend
   npm install
   ```

## Running the Application

### Start Backend Server

```sh
cd backend
npm start
```

Backend will run on `http://localhost:3000`

### Start Frontend Server

```sh
cd frontend
npm run dev
```

Frontend will run on `http://localhost:5173`

## Usage

1. **Upload an Image**: Drag and drop an image or browse to upload it.
2. **Analyze the Image**: The backend extracts the color palette and checks contrast from the image.
3. **View the Report**: Displays extracted colors, closest brand color, and accessibility issues.
4. **copy extracted color palette**: extracted color palette can be copied
5. **Download the Report**: Click to save the report as a PDF.
6. **ChatBot**: Use the chatbot for assistance.

## API Endpoints

- `POST /upload`: Uploads an image for analysis and Retrieves analysis data including extracted colors and contrast details.

## Backend Dependencies

```json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "Backend for ImagiDator",
  "license": "ISC",
  "author": "Mitesh Dixit",
  "type": "commonjs",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js"
  },
  "dependencies": {
    "color-diff": "^1.4.0",
    "cors": "^2.8.5",
    "express": "^4.21.2",
    "multer": "^1.4.5-lts.1",
    "node-vibrant": "^4.0.3",
    "nodemon": "^3.1.9",
    "sharp": "^0.33.5",
    "wcag-contrast": "^3.0.0"
  }
}
```

## License

This project is licensed under the MIT License.
