// src/components/TripInspiration.js
import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Card, Typography, Box, CircularProgress, Grid, IconButton } from "@mui/material";
import { MdImage, MdEmojiObjects, MdClear } from "react-icons/md"; // Added MdClear for image removal

const TripInspiration = () => {
  const [moodQuery, setMoodQuery] = useState("");
  const [generatedImageUrl, setGeneratedImageUrl] = useState("");
  const [aiSuggestions, setAiSuggestions] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerateInspiration = async () => {
    if (!moodQuery.trim()) {
      setError("Please enter a mood or description.");
      return;
    }
    setIsLoading(true);
    setGeneratedImageUrl("");
    setAiSuggestions("");
    setError("");

    try {
      // 1. Call backend for AI Image Generation (NEW BACKEND ENDPOINT NEEDED)
      // This endpoint would internally use an AI image generation model (e.g., DALL-E, Stable Diffusion, or a Gemini Pro Vision setup if you pass description)
      // For Google Generative AI, you'd need 'gemini-pro-vision' and provide a prompt for it to generate images if it supports direct image generation from text.
      // If not, you'd integrate with a dedicated image generation API.
      const imageResponse = await axios.post("https://tour-travel-uuoe.onrender.com/ai/generate-image", { // NEW BACKEND ROUTE
        prompt: `A vibrant, high-quality image representing a travel destination with a "${moodQuery}" mood. Include elements like beautiful landscapes, local culture, and inviting atmosphere.`,
      });
      if (imageResponse.data.success && imageResponse.data.imageUrl) {
        setGeneratedImageUrl(imageResponse.data.imageUrl);
      } else {
        setError("Could not generate image. Please try a different query.");
      }

      // 2. Call backend for AI Suggestions (using existing Gemini model)
      const suggestionsResponse = await axios.post("https://tour-travel-uuoe.onrender.com/ai/mood-suggestions", { // NEW BACKEND ROUTE
        mood: moodQuery,
      });
      if (suggestionsResponse.data.success && suggestionsResponse.data.suggestions) {
        setAiSuggestions(suggestionsResponse.data.suggestions);
      } else {
        setError("Could not generate trip suggestions.");
      }

    } catch (err) {
      console.error("Error generating inspiration:", err);
      setError("An error occurred while generating inspiration. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gray-100">
      <Card className="p-6 rounded-lg shadow-xl w-full max-w-2xl bg-white">
        <Typography variant="h4" className="text-center text-black font-bold mb-6">
          Find Your Next Trip Inspiration!
        </Typography>
        <Typography variant="body1" className="text-center text-gray-600 mb-4">
          Describe your dream trip's mood, and our AI will suggest ideas and visuals.
        </Typography>
        <Box className="space-y-4">
          <TextField
            label="Describe your travel mood (e.g., 'adventurous mountain retreat', 'relaxing beach getaway', 'historic city exploration')"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            value={moodQuery}
            onChange={(e) => setMoodQuery(e.target.value)}
            helperText="Be descriptive for better results!"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleGenerateInspiration}
            disabled={isLoading}
            startIcon={<MdEmojiObjects />}
            className="bg-indigo-700 hover:bg-indigo-800 text-white"
          >
            {isLoading ? <CircularProgress size={24} color="inherit" /> : "Generate Inspiration"}
          </Button>

          {error && (
            <Typography color="error" className="text-center mt-4">
              {error}
            </Typography>
          )}

          {(generatedImageUrl || aiSuggestions) && (
            <Box className="mt-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <Typography variant="h5" className="text-indigo-700 font-semibold mb-3">
                Your Inspiration:
              </Typography>
              {generatedImageUrl && (
                <Box className="relative mb-4">
                  <Typography variant="body2" className="text-gray-600 mb-2">
                    AI-Generated Image:
                  </Typography>
                  <img src={generatedImageUrl} alt="AI Generated Travel Inspiration" className="w-full h-auto max-h-96 object-cover rounded-md shadow-md" />
                  <IconButton
                    className="absolute top-2 right-2 bg-white bg-opacity-75 rounded-full p-1"
                    onClick={() => setGeneratedImageUrl("")}
                  >
                    <MdClear className="text-gray-700" />
                  </IconButton>
                </Box>
              )}
              {aiSuggestions && (
                <Box>
                  <Typography variant="body2" className="text-gray-600 mb-2">
                    AI Suggestions:
                  </Typography>
                  <Typography component="div" className="text-gray-800 leading-relaxed">
                    <div dangerouslySetInnerHTML={{ __html: aiSuggestions.replace(/\n/g, '<br />') }} />
                  </Typography>
                </Box>
              )}
            </Box>
          )}
        </Box>
      </Card>
    </div>
  );
};

export default TripInspiration;