import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ReportDisplay from "./ReportDisplay";
import { FaDownload, FaRobot, FaInfoCircle } from "react-icons/fa";

const DashBoard = () => {
  const [report, setReport] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-800 m-5 ">
        Brand Color Validator
      </h1>

      <div className="grid grid-cols-12 ">
        <div className="col-span-5 flex flex-col p-2 md:p-4 border-1  rounded-xl bg-white">
          <div className=" h-[70vh]  flex items-center justify-center">
            <ImageUpload setReport={setReport} />
          </div>

          <div className="col-span-5  h-[100px] p-4  rounded-lg shadow-lg text-white m-2">
            <div className="flex justify-center md:gap-15 mt-2 gap-4">
              <button
                className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
                title="Download"
              >
                <FaDownload className="text-gray-600 text-xl" />
              </button>

              <button
                className="p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-100 transition"
                title="AI Action"
              >
                <FaRobot className="text-gray-400 text-xl" />
              </button>

              <button
                className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
                title="More Details"
              >
                <FaInfoCircle className="text-gray-600 text-xl" />
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-7 p-4  row-span-4 bg-white">
          {
            // report &&
            <ReportDisplay report={report} />
          }
        </div>
      </div>

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
  );
};

export default DashBoard;
