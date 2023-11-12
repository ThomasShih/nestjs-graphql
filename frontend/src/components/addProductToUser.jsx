import React, { useState } from 'react';
import { ReactDialogBox } from 'react-js-dialog-box';
import { useMutation, useQuery } from "@apollo/client";
import { toast, ToastContainer } from 'react-toastify';

import 'react-js-dialog-box/dist/index.css';
import "react-toastify/dist/ReactToastify.css";

import { ADD_PRODUCT_TO_ORDER, GET_PRODUCTS, GET_USERS } from "../gql";

function AddProductToUser({ userId }) {
    const { error, loading, data } = useQuery(GET_PRODUCTS);
    const [addProduct] = useMutation(ADD_PRODUCT_TO_ORDER, { refetchQueries: [{ query: GET_USERS }] });
    const [productId, setProductId] = useState("");
    const [showForm, setShowForm] = useState(false);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error! {error.message}</div>;

    const handleSubmit = (event) => {
        event.preventDefault();
        const variables = {
            userId,
            productId,
        };
        addProduct({ variables });
        setShowForm(false);
        toast(`Product added to user order!`);
    }

    return (
        <div>
            <button onClick={() => setShowForm(true)}>Add Product to User Order</button>
            <ToastContainer />
            {showForm && (
                <ReactDialogBox
                    closeBox={() => { setShowForm(false); setProductId(""); }}
                    modalWidth='60%'
                    headerBackgroundColor='red'
                    headerTextColor='white'
                    headerHeight='65'
                    closeButtonColor='white'
                    bodyBackgroundColor='white'
                    bodyTextColor='black'
                    headerText='Add Product to User Order'
                >
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>
                                Products:
                                <select value={productId} onChange={(event) => setProductId(event.target.value)} required>
                                    <option value="">Select a Product</option>
                                    {data.getProducts.map((product) => (
                                        <option key={product.id} value={product.id}>{product.name}</option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </ReactDialogBox>
            )
            }
        </div >
    );
}

export default AddProductToUser;
