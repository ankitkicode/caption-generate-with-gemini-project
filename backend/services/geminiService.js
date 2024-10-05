// Import the Google Generative AI SDK
require('dotenv').config();
const apiKey = process.env.GEMINI_API_KEY || "Your_Default_API_Key"; 

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateGeminiCaption = async (promptUser,platform)=>{
    try {
       
                 
    let prompt = `${promptUser}. Please generate a caption of 50-100 words and include hashtags.`;

     // Add platform-specific logic
     switch (platform.toLowerCase()) {
        case 'instagram':
         prompt += " Make it engaging for Instagram, with fun and trending hashtags like #InstaDaily, #PhotoOfTheDay.";
          break;
        case 'facebook':
         prompt += " Make it suitable for Facebook, with a personal tone and popular hashtags like #LifeUpdate, #FeelingGood.";
          break;
        case 'linkedin':
         prompt += " Make it professional for LinkedIn, with a focus on achievements and networking, and include hashtags like #CareerGrowth, #Networking.";
          break;
        case 'youtube':
         prompt += " Make it tailored for YouTube descriptions, with a call to action and trending tags like #Vlog, #Subscribe.";
          break;
        case 'twitter':
         prompt += " Make it concise and suitable for Twitter, with a maximum of 280 characters and relevant hashtags like #NowTrending, #BreakingNews.";
          break;
        default:
         prompt += " Please generate a general caption with relevant hashtags.";
      }

      // console.log("prompt from services --- ",prompt)


        const result = await model.generateContent(prompt);

        return result.response.text();
    
    } catch (error) {
        console.log(error)
    }
}

module.exports = generateGeminiCaption;
