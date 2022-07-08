import { useEffect, useState } from "react";
import NumberOneData from "../data/numberOne";

const NumberOne = () => {
  const [datas, setDatas] = useState(null);
  const [caution, setCaution] = useState(false);

  // sorting data menjawab soal no 1
  const afterSort = () =>
    NumberOneData.sort(function (a, b) {
      if (a.harga !== b.harga) return a.harga < b.harga ? -1 : 1;
      if (a.rating !== b.rating) return a.rating > b.rating ? -1 : 1;
      return a.likes > b.likes ? -1 : 1;
    });

  const handleClickSort = () => {
    console.log("sebelum sort", datas);
    setCaution(true);
    setDatas(afterSort());
    console.log("sesudah sort", datas);
  };

  const handleClickReload = () => {
    window.location.reload();
  };

  useEffect(() => {
    setDatas(NumberOneData);
  }, []);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Rating </th>
              <th>Likes </th>
            </tr>
          </thead>
          <tbody>
            {datas != null ? (
              datas.map((data, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{data.nama}</td>
                  <td>{data.harga}</td>
                  <td>{data.rating}</td>
                  <td>{data.likes}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>Data ksong</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {caution === true && (
        <div class="alert alert-warning shadow-lg my-5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>Silahkan cek console</span>
          </div>
        </div>
      )}

      <button className="btn btn-info my-5" onClick={handleClickSort}>
        Urutkan
      </button>
      <button className="btn btn-warning my-5 ml-5" onClick={handleClickReload}>
        Reload
      </button>
    </div>
  );
};

export default NumberOne;
