import React from 'react'
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div className="container text-center">
            <div className="row pt-5 pb-2">
                <h1>
                <i className="bi bi-journal-code" />
                Selamat Datang di BacaBaca!
                <i className="bi bi-journal-code" />
                </h1>
            </div>
            <div className="row">
                <div className="col">
                    <Link to={`buku/add`} className="btn btn-md btn-primary">
                        Tambah Buku
                    </Link>
                    <Link to={`buku`} className="btn btn-md btn-primary m-1">
                        Lihat Semua Buku
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Homepage