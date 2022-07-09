import { useEffect } from "react";
import { useState } from "react";
import NumberTwoData from "../data/numberTwo";
import ProductDetail from "./component/ProductDetail";

const NumberTwo = () => {
  const [datas, setDatas] = useState();

  useEffect(() => {
    setDatas(NumberTwoData);
  });
  return (
    <div>
      <h1 className="my-5 text-3xl">Daftar produk</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {datas != null ? (
              datas.map((data, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{data.nama}</td>
                  <td>{data.harga}</td>
                  <td>
                    <label for="my-modal" className="btn modal-button">
                      open modal
                    </label>

                    <input
                      type="checkbox"
                      id="my-modal"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Detail Produk</h3>
                        <ProductDetail />
                        <div className="modal-action">
                          <label for="my-modal" className="btn">
                            Keluar
                          </label>
                        </div>
                      </div>
                    </div>

                    <button className="btn btn-info ml-2">Edit</button>
                    <button className="btn btn-error  ml-2">Hapus</button>
                  </td>
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
    </div>
  );
};
export default NumberTwo;
