import React, { useState } from "react";

const PostGenerator = () => {
  const [day, setDay] = useState("");
  const [problemName, setProblemName] = useState("");
  const [platform, setPlatform] = useState("");
  const [problemLink, setProblemLink] = useState("");
  const [error, setError] = useState("");
  const [generatedPost, setGeneratedPost] = useState("");

  const validateDay = (value) => {
    const dayValue = parseInt(value, 10);
    if (!value || isNaN(dayValue) || dayValue < 1 || dayValue > 30) {
      setError("Day must be a positive integer between 1 and 30.");
      return false;
    }
    setError(""); // Clear the error if valid
    return true;
  };

  const handleGeneratePost = () => {
    if (!validateDay(day)) {
      return;
    }
    const template = `
🚀 Day ${day}/30 of #DrGViswanathan Challenge ✅

Proud to share my progress as I take on the #DrGViswanathan Challenge! 🎯

🧩 Problem Solved:
🔹 Problem Name: ${problemName}
🔹 Platform: ${platform}
🔹 Link to Problem: ${problemLink}

🔥 Current Streak: ${day}/30  
💻 Challenges Completed: ${day} Problems

✨ Every problem solved brings me closer to my goal. Let's keep pushing forward! 💪
🌱 Milestone: I've just completed ${day} days — and every single day feels like a win!
 
 Let's keep raising the bar and inspiring others to join the challenge. 💪
 
 💬 Who else is taking on the #DrGViswanathanChallenge with me? Let's grow together as a community!
 
 #DrGViswanathanChallenge 
 #VIT #VITBhopal #VITBhopalLions #DSA #OpenLearning #CodingJourney  #TechCommunity #ProblemSolvingJourney #LearningEveryDay
🧩  Tip: If you are participating in this Challange , you can use : https://react-post-generator.vercel.app/
    `;
    setGeneratedPost(template);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">LinkedIn Post Generator</h1>
        <label className="block mb-2">
          Day (1-30):
          <input
            type="text"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            onBlur={(e) => validateDay(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter Day"
          />
        </label>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <label className="block mb-2">
          Problem Name:
          <input
            type="text"
            value={problemName}
            onChange={(e) => setProblemName(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter Problem Name"
          />
        </label>
        <label className="block mb-2">
          Platform:
          <input
            type="text"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter Platform"
          />
        </label>
        <label className="block mb-2">
          Problem Link:
          <input
            type="text"
            value={problemLink}
            onChange={(e) => setProblemLink(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter Problem Link"
          />
        </label>
        <button
          onClick={handleGeneratePost}
          disabled={!!error || !day || !problemName || !platform || !problemLink}
          className={`w-full p-2 rounded text-white ${
            !!error || !day || !problemName || !platform || !problemLink
              ? "bg-gray-400"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Generate Post
        </button>
        {generatedPost && (
          <div className="mt-4 bg-gray-50 p-4 rounded border">
            <h2 className="font-bold">Generated Post:</h2>
            <pre className="text-sm whitespace-pre-wrap">{generatedPost}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostGenerator;
