import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "@apollo/client";

import "./styles/page.css";
import NavBar from "../components/navBar";
import NewProduct from "../components/newProduct";
import DataTable from "../components/dataTable";
import { GET_PRODUCTS } from "../gql";

const Products = () => {
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    useEffect(() => { window.scrollTo(0, 0) }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error! {error.message}</div>;

    const columns = [
        {
            label: "Name",
            renderCell: (row) => row.name
        },
        {
            label: "Price",
            renderCell: (row) => row.price
        },
    ];

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Products`}</title>
            </Helmet>
            <NavBar active="products" />
            <div className="page-content">
                <div className="content-wrapper">
                    <div className="projects-container">
                        <div className="title projects-title">
                            Products
                        </div>
                        <NewProduct />
                        <DataTable rows={data.getProducts} columns={columns} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Products;