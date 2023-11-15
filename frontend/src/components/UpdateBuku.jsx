import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const UpdateBuku = () => {
    const [judul, setJudul] = useState("");
    const [tahunTerbit, setTahunTerbit] = useState("");
    const [harga, setHarga] = useState("");
    const [penerbit, setPenerbit] = useState("");
    const [penulis, setPenulis] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getBukuById();
    }, []);

    const editBuku = async (e) => {
        e.preventDefault();
        try {
        await axios.patch(`http://localhost:5000/buku/${id}`, {
            judul,
            tahunTerbit,
            harga,
            penerbit,
            penulis
        });
        navigate(`success`, { state: { operation: 'edit'} });
        } catch (error) {
        console.log(error);
        }
    };

    const getBukuById = async () => {
        const response = await axios.get(`http://localhost:5000/buku/${id}`);
        setJudul(response.data.judul);
        setTahunTerbit(response.data.tahunTerbit);
        setHarga(response.data.harga);
        setPenerbit(response.data.penerbit);
        setPenulis(response.data.penulis);
    };

    return (
        <div className="container">
            <div className="card m-4 p-4">
                <div className="card-body d-flex justify-content-center">
                    <div className="card-content">
                        <h2>Ubah Buku</h2>
                        <br/>
                        <form onSubmit={editBuku}>
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
                                    placeholder="Contoh: 2023"
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

export default UpdateBuku;