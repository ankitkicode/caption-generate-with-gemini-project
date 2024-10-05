import { useContext } from 'react';
import Form from "../components/Form";
import CaptionContext from "../context/CaptionContext"; // Import CaptionContext
import { FaRegCopy, FaRedo } from 'react-icons/fa'; // Import icons from react-icons

const Caption = () => {
  const { caption, setCaption } = useContext(CaptionContext); // Access the caption and setCaption from context

  const handleRegenerate = () => {
    setCaption('');
  };

  // Function to copy caption to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(caption)
      .then(() => {
        alert('Caption copied to clipboard!'); // Feedback message to the user
      })
      .catch((err) => {
        console.error('Could not copy text: ', err);
      });
  };

  return (
    <div className="text-white px-6 w-full md:w-[55%] mt-6 md:mt-2 m-auto">
      {!caption ? ( // Check if the caption is not generated
        <Form />
      ) : ( // If caption exists, display it
        <div className="md:mt-2 ">
          <h3 className="text-2xl font-semibold mb-4 text-center">Your Generated Caption:</h3>
          <p className="text-lg text-zinc-100 min-h-[55vh] bg-zinc-900 p-3 rounded-lg border-[1px] border-zinc-500">
            {caption} {/* Display the generated caption here */}
          </p>
          <div className="flex justify-center mt-4 gap-6">
            <button
              className=" px-8 py-3 bg-[#0A62F0] text-white font-semibold rounded-md hover:bg-blue-600 transition"
              onClick={handleRegenerate} // Call handleRegenerate on click
            >
              <FaRedo className="text-xl" /> {/* Regenerate icon */}
            </button>
            <button
              className=" px-8 py-3 text-center bg-[#0A62F0] text-white font-semibold rounded-md hover:bg-blue-600 transition"
              onClick={copyToClipboard} // Call copyToClipboard on click
            >
              <FaRegCopy className="text-xl" /> {/* Copy icon */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Caption;
