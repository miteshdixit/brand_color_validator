import React from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

const brandColors = {
  Primary: [
    { name: "Red", rgb: [255, 0, 0] },
    { name: "Deep Navy", rgb: [0, 61, 165] },
  ],
  Secondary: [
    { name: "Light Blue", rgb: [114, 181, 232] },
    { name: "Gray", rgb: [84, 88, 90] },
  ],
  Accent: [
    { name: "Yellow", rgb: [255, 182, 18] },
    { name: "Green", rgb: [21, 139, 69] },
  ],
};

// Color Swatch Component
const ColorSwatch = ({ color, label, isMatch }) => (
  <div className="text-center">
    <div
      className="w-24 h-24 rounded-lg mx-auto border-2"
      style={{ backgroundColor: color, borderColor: "#ddd" }}
    />
    <p className="mt-2 text-sm font-medium flex items-center justify-center gap-1">
      {label}{" "}
      {isMatch ? (
        <FaCheckCircle size={16} className="text-green-500" />
      ) : (
        <FaTimesCircle size={16} className="text-red-500" />
      )}
    </p>
    <p className="text-xs text-gray-500">{color}</p>
  </div>
);

// Main Report Component
const ReportDisplay = ({ report }) => {
  if (!report) {
    return (
      <div className="text-center text-gray-600">No report data available.</div>
    );
  }

  console.log(report);
  const { extractedColors, colorMatching, accessibilityIssues } = report.report;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Analysis Report</h2>
      <div className="flex justify-center self-center align-center">
        <div className=" border border-gray-200 rounded-xl overflow-hidden h-60 w-60 display-cover ">
          <img src={report.fileUrl} alt="Uploaded Image" />
        </div>
      </div>

      {/* Color Compliance Section */}
      <h3 className="text-xl font-semibold mt-4">Color Matching</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        {/* Closest Brand Color */}
        <div>
          {/* <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Closest Brand Color
          </h4> */}
          <h3 className="text-2xl font-bold mb-4 text-center">
            Closest Brand Color
          </h3>
          <ColorSwatch
            color={`rgb(${colorMatching.closestBrandColor.R}, ${colorMatching.closestBrandColor.G}, ${colorMatching.closestBrandColor.B})`}
            label="Closest Match"
            isMatch={colorMatching.isMatch}
          />
        </div>

        {/* Extracted Colors */}
        <div>
          {/* <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Extracted Colors
          </h4> */}
          <h3 className="text-2xl font-bold mb-4 text-center">
            🎨 Extracted Colors
          </h3>
          {/* {extractedColors.map((color, index) => (
            <ColorSwatch
              key={index}
              color={color}
              label={`Color ${index + 1}`}
              isMatch={false}
            />
          ))} */}
          {Object.entries(report.palette).map(([key, color], index) => (
            <div
              key={index}
              className="flex items-center gap-4 mb-4 justify-between"
            >
              <span className="w-32 font-semibold">{key}</span>
              <div
                className="w-12 h-12 rounded-lg shadow-md"
                style={{
                  backgroundColor: `rgb(${color.rgb[0]}, ${color.rgb[1]}, ${color.rgb[2]})`,
                }}
              />
              {/* <span className="text-gray-600 ">
                Population: {color.population}
              </span> */}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex md:flex-row justify-center items-center gap-10 p-6">
        {/* Brand Colors Section */}
        <div className="flex border rounded-2xl p-4 shadow-lg bg-white w-full items-center ">
          <h3 className="text-2xl font-bold mb-4 text-center">Brand Colors</h3>
          {Object.entries(brandColors).map(([category, colors], index) => (
            <div key={index} className="mb-4 items-center flex flex-col">
              <h4 className="text-lg font-semibold mb-2">{category} Colors</h4>
              <div className="flex flex-wrap gap-4">
                {colors.map((color, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-lg shadow-md flex items-center justify-center"
                    style={{
                      backgroundColor: `rgb(${color.rgb[0]}, ${color.rgb[1]}, ${color.rgb[2]})`,
                    }}
                  >
                    <span className="text-xs text-white font-bold">
                      {color.name[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-6 border-t border-gray-300" />

      {/* Accessibility Issues */}
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Accessibility Issues
      </h3>
      {accessibilityIssues.length > 0 ? (
        <div className="space-y-4">
          {accessibilityIssues.map((issue, index) => (
            <div
              key={index}
              className="p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg shadow-sm flex gap-4"
            >
              <FaExclamationTriangle size={24} className="text-yellow-500" />
              <div className="flex-1">
                <p className="text-gray-700 font-medium">{issue.message}</p>
                <p className="text-sm text-gray-600">
                  Contrast Ratio: {issue.contrastRatio} (Minimum required: 4.5)
                </p>
                <div className="flex mt-2 gap-2">
                  {issue.colors.map((color, idx) => (
                    <span
                      key={idx}
                      className="inline-block w-8 h-8 rounded-lg shadow-md"
                      style={{
                        backgroundColor: color,
                        boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
                      }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-green-600 font-medium">
          ✅ No accessibility issues detected.
        </p>
      )}
    </div>
  );
};

export default ReportDisplay;
