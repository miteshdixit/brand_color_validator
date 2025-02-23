import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import axios from "axios";
import ReportDisplay from "./ReportDisplay";
import ChatBot from "./ChatBot";
import { FaRobot } from "react-icons/fa";

const Home = () => {
  const [report, setReport] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Function to analyze the uploaded image

  return (
    <div>
      <div className=" flex  p-4 w-full ">
        <div className="w-full bg-white rounded-lg shadow-xl p-6 mt-15">
          <ImageUpload setReport={setReport} />

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
          <div className="fixed bottom-20 right-10 w-85 max-h-[80vh] bg-white border-1 overflow-hidden border-gray-200 shadow-2xl rounded-lg overflow-y-auto">
            <ChatBot />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
