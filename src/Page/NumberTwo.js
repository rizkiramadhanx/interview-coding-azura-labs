import { useEffect } from "react";
import { useState } from "react";
import NumberTwoData from "../data/numberTwo";
import ProductAdd from "./component/ProductAdd";

const initialValue = {
  nama: "",
  harga: "",
  rating: "",
  likes: "",
};

const NumberTwo = () => {
  const [datas, setDatas] = useState();

  const [buttonAdd, setButtonAdd] = useState(false);
  const [detailDataInfo, setDetailDataInfo] = useState();

  const [isEdit, setIsEdit] = useState(false);

  const [formData, setFormData] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newDatas;

    newDatas = [formData, ...datas];
    if (isEdit) {
      newDatas.splice(1, 1);
      setDatas(newDatas);
      return;
    }

    setDatas(newDatas);
  };

  const editData = (e) => {
    const newDatas = datas.filter((items) => items.nama === e);
    setButtonAdd(true);
    setFormData(newDatas[0]);
    setIsEdit(true);
  };

  const deleteData = (e) => {
    const newDatas = datas.filter((items) => items.nama !== e);
    setDatas(newDatas);
    setDetailDataInfo(null);
    setButtonAdd(false);
    setDetailDataInfo(null);
  };

  const detailData = (e) => {
    const newDatas = datas.filter((items) => items.nama === e);
    setDetailDataInfo(newDatas[0]);
  };

  useEffect(() => {
    setDatas(NumberTwoData);
  }, []);
  return (
    <div>
      <h1 className="my-5 text-3xl">Daftar produk</h1>
      <div>
        <button
          className="btn btn-info my-3"
          onClick={() => {
            setButtonAdd(!buttonAdd);
            setIsEdit(false);
          }}
        >
          Tambah Data
        </button>
      </div>

      {buttonAdd && (
        <ProductAdd
          handleChange={handleChange}
          formData={formData}
          handleSubmit={handleSubmit}
          isEdit={isEdit}
        />
      )}

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
                    <button
                      className="btn btn-info ml-2"
                      onClick={() => detailData(data.nama)}
                    >
                      Info
                    </button>

                    <button
                      className="btn btn-info ml-2"
                      onClick={() => editData(data.nama)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-error  ml-2"
                      onClick={() => deleteData(data.nama)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>Data kosong</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {detailDataInfo && (
        <div className="w-full m-5">
          <h3 className="font-bold text-lg">Detail Produk</h3>
          <h2 className="font-light text-md">Nama : {detailDataInfo.nama}</h2>
          <h2 className="font-light text-md">
            Harga : Rp.{detailDataInfo.harga}
          </h2>
          <h2 className="font-light text-md">
            Rating : {detailDataInfo.rating}
          </h2>
          <h2 className="font-light text-md">Likes : {detailDataInfo.likes}</h2>
        </div>
      )}
    </div>
  );
};
export default NumberTwo;
