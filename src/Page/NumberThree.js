import { useState } from "react";
import { useEffect } from "react";

const NumberThree = () => {
  const [error, setError] = useState(null);
  const [result, setResult] = useState("");
  const [print, setPrint] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPrint(kalkulator(result));
  };

  const kalkulator = (string) => {
    const arrayNumber = string.split(" ");
    try {
      let angka1 = parseInt(arrayNumber[0]);
      let angka2 = parseInt(arrayNumber[2]);

      if (angka1 > 1000000 || angka2 > 1000000) {
        setError("angka tidak boleh dari 1 juta");
        return;
      }

      return eval(string);
    } catch (error) {
      setError("Format anda salah");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Input calculator"
          className="input input-bordered input-primary w-full max-w-xs"
          onChange={(e) => setResult(e.target.value)}
          value={result}
        />
        <button className="ml-5 btn btn-info my-5" type="submit">
          Hitung
        </button>
      </form>
      <div className="text-4xl">
        <div>{error ? <span>{error} </span> : <span> {print}</span>}</div>
      </div>
    </div>
  );
};

export default NumberThree;
