import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ViewBuku = () => {
    const [buku, setBuku] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getBukuById();
    }, []);

    const getBukuById = async () => {
    const response = await axios.get(`http://localhost:5000/buku/${id}`);
    setBuku(response.data);
    };

    return (
        <div className="container">
        <div className="text-center pt-5">
            <h2 clasa="">Informasi Buku</h2>
        </div>
        <div className="row justify-content-center">
            <div className="card" style={{ width: "30rem" }}>
            <div className="card-body">
                <div className="row text-center mb-2">
                <h4 className="card-title">{buku.judul}</h4>
                </div>
                <div>
                <p className="card-text m-0">
                    <b>ID Buku</b>
                </p>
                <p className="card-text">{buku.id}</p>
                <p className="card-text m-0">
                    <b>Tahun Terbit</b>
                </p>
                <p className="card-text">{buku.tahunTerbit}</p>
                <p className="card-text m-0">
                    <b>Harga Buku</b>
                </p>
                <p className="card-text">Rp{buku.harga}</p>
                <p className="card-text m-0">
                    <b>Penerbit Buku</b>
                </p>
                <p className="card-text">{buku.penerbit}</p>
                <p className="card-text m-0">
                    <b>Penulis Buku</b>
                </p>
                <p className="card-text">{buku.penulis}</p>
                </div>
            </div>
            </div>
        </div>
        <div className="text-center m-3">
            <Link
                to={"/buku"}
                className="btn btn-md btn-primary"
            >
                Kembali
            </Link>
        </div>
        </div>
    )
}

export default ViewBuku