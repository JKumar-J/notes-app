import React, { useState } from "react";
import noteImage from "./assets/garaz-notepad-2154581_1920.png";
const App = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);

  const submitHandler = (e) => {
    console.log("Form submitted");
    e.preventDefault();
    const copyNotes = [...notes];
    copyNotes.push({ title, content });
    setNotes(copyNotes);
  };

  return (
    <>
      <div className="h-screen w-screen lg:flex">
        <form
          onSubmit={(e) => {
            submitHandler(e);
            console.log(title, content);
          }}
          className="flex border font-medium px-10 flex-col gap-2 py-7 lg:w-1/2 "
        >
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="px-5 bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 p-5 border rounded-md "
            placeholder="Enter your note Title"
          />
          <textarea
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            className="px-5 bg-gray-800  h-30 text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 p-5 border rounded-md"
            placeholder="Enter your note..."
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Add Note
          </button>
        </form>
        <div className="lg:w-1/2 p-10 gap-5">
          <h1 className="text-black text-2xl font-bold mb-5 w-full">
            Your Notes
          </h1>
          <div className="flex flex-wrap content-start justify-between gap-5 overflow-y-auto h-[80vh] bg-gray-100 p-5 rounded-md">
            {notes.map((note, index) => (
              <div
                key={index}
                className="relative w-40 h-40 rounded-md shadow-md mb-5 bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url(${noteImage})` }}
              >
                <button
                  type="button"
                  className="absolute top-2 right-2 z-10 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white hover:bg-red-700 cursor-pointer"
                  onClick={() => {
                    const copyNotes = [...notes];
                    copyNotes.splice(index, 1);
                    setNotes(copyNotes);
                  }}
                >
                  X
                </button>

                {/* Content area */}
                <div className="absolute top-10 left-5 right-2 bottom-2 overflow-y-auto">
                  <h3 className="text-lg font-bold mb-2 text-black break-words">
                    {note.title}
                  </h3>

                  <p className="text-black break-words">{note.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
