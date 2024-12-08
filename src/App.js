import React, { useState } from "react";

function App() {
  const [day, setDay] = useState("");
  const [problemName, setProblemName] = useState("");
  const [platform, setPlatform] = useState("");
  const [problemLink, setProblemLink] = useState("");
  const [generatedPost, setGeneratedPost] = useState("");

  const generatePost = () => {
    const template = `
  🚀 Day ${day}/30 of #DrGViswanathan Challenge ✅
  
  Proud to share my progress as I take on the #DrGViswanathan Challenge! 🎯
  
  🧩 Problem Solved:
  🔹 Problem Name: ${problemName}
  🔹 Platform: ${platform}
  🔹 Link to Problem: ${problemLink}
  
  🔥 Current Streak: ${day}/30  
  💻 Challenges Completed: ${day} Problems
  
  ✨ *Reflection*: Every problem solved brings me closer to my goal, not just in coding but in discipline and perseverance. This challenge is as much about mental strength as it is about coding!
  
  🌱 *Milestone*: I've just completed ${day} days — and every single day feels like a win!
  
  Let’s keep raising the bar and inspiring others to join the challenge. 💪
  
  💬 Who else is taking on the #DrGViswanathanChallenge with me? Let's grow together as a community!
  
  #DrGViswanathanChallenge #VIT #VITBhopal #VITBhopalLions #DSA #OpenLearning #CodingJourney #100DaysOfCode #TechCommunity #ProblemSolvingJourney #LearningEveryDay
    `;
    setGeneratedPost(template);
  };
  

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPost).then(
      () => alert("Copied to clipboard!"),
      (err) => alert("Failed to copy text: " + err)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">
          🚀 Dr. G. Viswanathan Challenge Post Generator
        </h1>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Day:</label>
          <input
            type="number"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            placeholder="Enter day (e.g., 3)"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Problem Name:</label>
          <input
            type="text"
            value={problemName}
            onChange={(e) => setProblemName(e.target.value)}
            placeholder="Enter problem name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Platform:</label>
          <input
            type="text"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            placeholder="Enter platform (e.g., LeetCode)"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Problem Link:</label>
          <input
            type="url"
            value={problemLink}
            onChange={(e) => setProblemLink(e.target.value)}
            placeholder="Enter problem link"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <button
          onClick={generatePost}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Generate Post
        </button>

        {generatedPost && (
          <>
            <h2 className="mt-6 text-xl font-bold text-gray-800">Generated Post:</h2>
            <textarea
              value={generatedPost}
              readOnly
              className="w-full mt-2 p-4 border rounded-md bg-gray-50 focus:outline-none"
              rows="10"
            ></textarea>
            <button
              onClick={copyToClipboard}
              className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
            >
              📋 Copy to Clipboard
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
