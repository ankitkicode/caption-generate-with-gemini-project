const generateGeminiCaption = require('../services/geminiService');

const generateCaption = async (req, res) => {
  const { prompt, platform } = req.body;
  // console.log({
  //   prompt,
  //   platform
  // });

  try {
    const caption = await generateGeminiCaption(prompt,platform);
    res.status(200).json({ caption });
  } catch (error) {
    res.status(500).json({ message: 'Error generating caption', error });
  }
};

module.exports = { generateCaption };
