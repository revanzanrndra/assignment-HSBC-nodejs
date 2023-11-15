import React from 'react'
import { Link, useLocation, useParams } from "react-router-dom";

const SuccessPage = () => {
    const location = useLocation();
    const {operation, judul} = location.state;
    const { id } = useParams();

    let message;
    if (operation === 'create') {
        message = `Buku dengan judul ${judul} berhasil ditambahkan.`;
    } else if (operation === 'edit') {
        message = `Buku dengan ID ${id} berhasil diubah.`;
    }
    return (
        <div className="container">
            <div className="card m-4 p-4">
                <div className="card-body">
                    <div className="text-center">
                        <h2>{message}</h2>
                    </div>
                    <div className="text-center m-3">
                        <Link to={"/"} className="btn btn-md btn-primary m-2">
                            Home
                        </Link>
                        <Link to={"/buku"} className="btn btn-md btn-primary">
                            Lihat Semua Buku
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessPage