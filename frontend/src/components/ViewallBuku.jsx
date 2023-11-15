import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewallBuku = () => {
  const [listBuku, setListBuku] = useState([]);

  useEffect(() => {
    getAllBuku();
  }, []);

  const getAllBuku = async () => {
    const response = await axios.get("http://localhost:5000/buku");
    setListBuku(response.data);
  };

  const deleteBuku = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/buku/${id}`);
      getAllBuku();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns m-2">
        <div className="text-center pt-5">
          <h2>Daftar Buku</h2>
        </div>
        <div className="text-center m-3">
          <Link to={`add`} className="btn btn-md btn-primary m-2">
            Tambah Buku
          </Link>
          <Link to={`/`} className="btn btn-md btn-primary">
            Home
          </Link>
        </div>
        <div>
          <table className="table table-striped table-bordered" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>No</th>
                <th>Judul</th>
                <th>Nama Penulis</th>
                <th>Nama Penerbit</th>
                <th>Harga</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {listBuku.map((buku, index) => (
                <tr key={buku.id}>
                  <td>{index + 1}</td>
                  <td className="mx-5">{buku.judul}</td>
                  <td>{buku.penulis}</td>
                  <td>{buku.penerbit}</td>
                  <td>Rp{buku.harga}</td>
                  <td>
                    <Link
                      to={`detail/${buku.id}`}
                      className="btn btn-sm btn-primary m-1"
                    >
                      Detail
                    </Link>
                    <Link
                      to={`update/${buku.id}`}
                      className="btn btn-sm btn-warning m-1"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => deleteBuku(buku.id)}
                      className="btn btn-sm btn-danger m-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default ViewallBuku;