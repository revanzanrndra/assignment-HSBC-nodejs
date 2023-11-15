import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AddBuku = () => {
    const [judul, setJudul] = useState("");
    const [tahunTerbit, setTahunTerbit] = useState("");
    const [harga, setHarga] = useState("");
    const [penerbit, setPenerbit] = useState("");
    const [penulis, setPenulis] = useState("");
    const navigate = useNavigate();

    const saveBuku = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post("http://localhost:5000/buku", {
            judul,
            tahunTerbit,
            harga,
            penerbit,
            penulis
        });

        navigate(`success`, { state: { operation: 'create', judul: judul} });
        } catch (error) {
        console.log(error);
        }
    };

    return (
        <div className="container">
            <div className="card m-4 p-4">
                <div className="card-body d-flex justify-content-center">
                    <div className="card-content">
                        <h2>Tambah Buku</h2>
                        <br/>
                        <form onSubmit={saveBuku}>
                            <div className="field">
                                <label className="label">Judul</label>
                                <div className="control">
                                <input
                                    type="text"
                                    className="input"
                                    value={judul}
                                    onChange={(e) => setJudul(e.target.value)}
                                    placeholder="Judul"
                                />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Tahun Terbit</label>
                                <div className="control">
                                <input
                                    type="text"
                                    className="input"
                                    value={tahunTerbit}
                                    onChange={(e) => setTahunTerbit(e.target.value)}
                                    placeholder="Tahun"
                                />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Harga</label>
                                <div className="control">
                                <input
                                    type="number"
                                    className="input"
                                    value={harga}
                                    onChange={(e) => setHarga(e.target.value)}
                                    placeholder="Harga"
                                />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Penerbit</label>
                                <div className="control">
                                <input
                                    type="text"
                                    className="input"
                                    value={penerbit}
                                    onChange={(e) => setPenerbit(e.target.value)}
                                    placeholder="Penerbit"
                                />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Penulis</label>
                                <div className="control">
                                <input
                                    type="text"
                                    className="input"
                                    value={penulis}
                                    onChange={(e) => setPenulis(e.target.value)}
                                    placeholder="Penulis"
                                />
                                </div>
                            </div>
                            <div className="field mt-3">
                                <button type="submit" className="btn btn-primary m-2">
                                    Submit
                                </button>
                                <Link to={`/`} className="btn btn-md btn-primary">
                                    Home
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBuku;