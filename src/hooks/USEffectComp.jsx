import { useEffect, useState } from "react"

const USEffectComp = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClear = () => setName("");
  return (
    <div>
      <p>this is a use effect hook</p>
      <h1>Your Name {name}</h1>
      <input
        type="text"
        value={name}
        className="border p-2  ml-2"
        onChange={handleChange}
        placeholder="enter your name"
      />
      <button onClick={handleClear} className="border p-2 bg-gray-200" >Clear</button>
    </div>
  );
};

export default USEffectComp;
