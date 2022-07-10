const ProductAdd = ({ formData, handleSubmit, handleChange, isEdit }) => {
  return (
    <div>
      <h3 className="text-2xl">
        {isEdit ? (
          <span>Halaman Edit Data</span>
        ) : (
          <span>Halaman Tambah Data</span>
        )}
      </h3>
      <div className="sm:w-1/2">
        <form className="rounded  mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="nama">
              Nama
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="nama"
              value={formData.nama}
              type="text"
              placeholder="nama"
              onChange={handleChange}
              name="nama"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="harga">
              Harga
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="harga"
              value={formData.harga}
              type="text"
              placeholder="Username"
              onChange={handleChange}
              name="harga"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="rating">
              rating
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="rating"
              type="text"
              value={formData.rating}
              placeholder="rating"
              onChange={handleChange}
              name="rating"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="likes">
              likes
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="likes"
              type="text"
              value={formData.likes}
              placeholder="likes"
              onChange={handleChange}
              name="likes"
            />
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-100 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductAdd;
