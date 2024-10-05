import { useContext, useState } from 'react';
import CaptionContext from '../context/CaptionContext';

const Form = () => {
  const { loading, generateCaption } = useContext(CaptionContext);

  // State to hold form inputs
  const [prompt, setPrompt] = useState('');
  const [platform, setPlatform] = useState('Instagram');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare form data
    const formData = {
      prompt,
      platform,
    };
    // console.log(formData);
    generateCaption(formData);
    setPrompt(''); // Clear the prompt after submission
  };

  return (
    <div className="text-white">
      <div>
        <h2 className="md:text-3xl text-2xl font-semibold mb-4 text-start md:text-center">
          Generate Your <span className='text-[#5595fb]'>Captions</span>
        </h2>

        {/* Show loading spinner if loading is true */}
        {loading ? (
          <div className="flex items-center justify-center h-64 mt-32">
            <div className="loader"></div> {/* Loader styling should be added */}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 border-[1px] py-4 px-5 rounded-lg bg-zinc-900 border-zinc-800">
            <div>
              <label className="block mb-3 text-lg font-medium">Enter your caption prompt:</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Type your prompt here..."
                className="w-full p-3 rounded-lg text-zinc-100 border-[1px] border-zinc-400 focus:outline-none bg-zinc-800 overflow-hidden"
                rows="4"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-lg font-medium">Select platform:</label>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full p-3 rounded-md text-zinc-100 focus:outline-none bg-zinc-800 font-semibold"
                required
              >
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="Twitter">Twitter</option>
                <option value="LinkedIn">LinkedIn</option>
              </select>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#0A62F0] text-[#0d0d0d] font-semibold rounded-md hover:bg-gray-100 transition-all"
                disabled={loading} // Disable button when loading
              >
                {loading ? "Generating..." : "Generate Caption"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Form;
