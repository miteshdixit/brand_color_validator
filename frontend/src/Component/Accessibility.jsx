import React from "react";
import { Pie } from "react-chartjs-2";
import { FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const AccessibilityReport = ({ accessibilityIssues }) => {
  // Extract colors and their contrast differences
  const colorData = accessibilityIssues
    .map((issue) => {
      const contrastDiff = Math.abs(issue.contrastRatio - 4.5);
      return issue.colors.map((color) => ({
        color,
        contrastRatio: issue.contrastRatio,
        contrastDiff: contrastDiff.toFixed(2),
      }));
    })
    .flat();

  // Pie Chart Data (Colors & Contrast)
  const pieData = {
    labels: colorData.map(
      (data) => `${data.color} (Diff: ${data.contrastDiff})`
    ),
    datasets: [
      {
        data: colorData.map((data) => data.contrastDiff),
        backgroundColor: colorData.map((data) => data.color),
        hoverBackgroundColor: colorData.map((data) => data.color),
      },
    ],
  };

  const hasIssues = accessibilityIssues.length > 0;

  return (
    <div className="flex flex-col justify-center item-center space-y-6">
      {/* Accessibility Issues */}
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Accessibility Contrast Analysis with Colors
      </h3>

      {/* Conditionally render Pie Chart or Success Message */}
      {hasIssues ? (
        <div className="w-1/2 mx-auto  rounded-2xl p-4 bg-white">
          <Pie
            data={pieData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              layout: {
                padding: 1,
              },
              plugins: {
                legend: {
                  position: "bottom",
                  labels: {
                    boxWidth: 20,
                    padding: 15,
                    color: "#333", // Legend text color
                    font: {
                      size: 14,
                      weight: "bold",
                    },
                  },
                },
                tooltip: {
                  backgroundColor: "rgba(0, 0, 0, 0.8)", // Tooltip background
                  titleFont: { size: 16 },
                  bodyFont: { size: 14 },
                  callbacks: {
                    label: (context) => {
                      const { label, raw } = context;
                      return `${label} - Contrast Diff: ${raw}`;
                    },
                  },
                },
              },
              elements: {
                arc: {
                  borderWidth: 3,
                  borderColor: "#fff",
                },
              },
            }}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-6 bg-green-100 rounded-lg shadow-lg">
          <FaCheckCircle size={50} className="text-green-600 mb-2" />
          <p className="text-lg text-green-700 font-semibold">
            Great ! All colors meet the contrast requirements.
          </p>
        </div>
      )}

      {/* List of Issues */}
      {hasIssues ? (
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
                <p className="text-sm text-gray-500">
                  Contrast Difference:{" "}
                  {Math.abs(issue.contrastRatio - 4.5).toFixed(2)}
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
      ) : null}
    </div>
  );
};

export default AccessibilityReport;
