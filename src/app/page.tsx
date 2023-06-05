"use client";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  //dfine state
  const [todos, setTodos] = useState([
    { movie: "Kabir Sing", id: 1 },
    { movie: "Taj Mahal", id: 2 },
  ]);

  const [inputValue, setInput] = useState("");
  const [id, setId] = useState(0);

  // function

  const addItem = () => {
    let obj: any = todos.find((item) => item.id == id);
    if (obj) {
      let newArray = todos.filter((item) => item.id !== obj.id);

      setTodos([...newArray, { movie: inputValue, id: id }]);
      setInput("");
      setId(0);
      return;
    }
    setTodos([...todos, { movie: inputValue, id: id }]);
    setInput("");
    setId(0);
  };

  const editItem = (id: any) => {
    let obj: any = todos.find((item) => item.id == id);
    setInput(obj.movie);
    setId(obj.id);
  };

  const deleteItem = (id: any) => {
    let newArray = todos.filter((item) => item.id !== id);

    setTodos([...newArray]);
  };

  return (
    <div className="max-w-4xl bg-green-500 m-5 mx-auto p-5">
      <h1 className="text-center text-2xl underline underline-offset-8 font-bold text-amber-950">
        Todo App
      </h1>
      <div className="flex justify-between mt-8">
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Write a text"
          className="w-[40%] p-2 rounded-b focus:outline-none"
        />
        <input
          type="number"
          value={id}
          onChange={(event: any) => setId(event.target.value)}
          placeholder="Write an ID"
          className="w-[20%] p-2 rounded-b focus:outline-none"
        />
        <button
          onClick={addItem}
          className="bg-blue-600 p-2 text-white rounded-md w-[20%]"
        >
          Add Movie
        </button>
      </div>
      {/* movie list */}
      <div className="mt-5">
        <h1 className="text-center text-2xl underline underline-offset-8 font-bold text-amber-950">
          Movie List
        </h1>
        <div className="grid grid-cols-2 gap-10 mt-5">
          {/* grid item */}

          {todos.map((item: any, i: any) => {
            return (
              <div className="bg-blue-500 text-white p-3 rounded-md" key={i}>
                <div className="flex justify-between">
                  <span className="shadow rounded-full h-7 w-7 my-auto text-center bg-red-950">
                    {i + 1}
                  </span>
                  <span
                    onClick={() => deleteItem(item.id)}
                    className="shadow rounded-full bg-black h-7 w-7 text-center cursor-pointer"
                  >
                    x
                  </span>
                </div>
                {/* data div */} 
                <div className="mt-5 text-xl">{item.movie}</div>
                <div
                  onClick={() => editItem(item.id)}
                  className="text-end cursor-pointer"
                >
                  Edit
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
