import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import axios from "axios";
import ReportDisplay from "./ReportDisplay";
import ChatBot from "./ChatBot";
import { FaRobot } from "react-icons/fa";

const Home = () => {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Function to analyze the uploaded image
  const analyzeImage = async (uploadedImageUrl) => {
    setLoading(true);
    console.log("Analyzing image");
    // Uncomment when backend is ready
    // try {
    //   const response = await axios.post(
    //     "http://localhost:3000/api/v1/analyze",
    //     { imageUrl: uploadedImageUrl }
    //   );
    //   setReport(response.data);
    // } catch (error) {
    //   console.error("Analysis failed", error);
    // } finally {
    setLoading(false);
    // }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 lg:p-8">
      <div className="w-full lg:w-3/4 xl:w-2/3 bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Brand Color Validator
        </h1>

        <ImageUpload onUploadSuccess={analyzeImage} setReport={setReport} />

        {/* Loading Spinner */}
        {loading && (
          <div className="flex flex-col items-center justify-center my-8">
            <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            <p className="text-gray-600 mt-4">Analyzing image...</p>
          </div>
        )}

        {/* Show Report */}
        {report && <ReportDisplay report={report} />}
      </div>

      {/* ChatBot Icon */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          <FaRobot size={24} />
        </button>
      </div>

      {/* ChatBot Panel */}
      {isChatOpen && (
        <div className="fixed bottom-16 right-4 w-80 max-h-[80vh] bg-white border-2 border-gray-200 shadow-lg rounded-lg p-4 overflow-y-auto">
          <ChatBot />
        </div>
      )}
    </div>
  );
};

export default Home;
