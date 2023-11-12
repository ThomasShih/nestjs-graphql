import React, { useState } from 'react';
import { ReactDialogBox } from 'react-js-dialog-box';
import { useMutation } from "@apollo/client";
import { toast, ToastContainer } from 'react-toastify';

import 'react-js-dialog-box/dist/index.css';
import "react-toastify/dist/ReactToastify.css";

import { ADD_PRODUCT, GET_PRODUCTS } from "../gql";

function NewProduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const [createProduct] = useMutation(ADD_PRODUCT, { refetchQueries: [{ query: GET_PRODUCTS }] });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const variables = {
            name,
            price: parseFloat(price)
        };
        createProduct({ variables });
        setShowForm(false);
        toast(`Product ${name} added!`);
    };

    return (
        <div>
            <button onClick={() => setShowForm(true)}>Add New Product</button>
            <ToastContainer />
            {showForm && (
                <ReactDialogBox
                    closeBox={() => { setShowForm(false); setName(''); setPrice(0); }}
                    modalWidth='60%'
                    headerBackgroundColor='red'
                    headerTextColor='white'
                    headerHeight='65'
                    closeButtonColor='white'
                    bodyBackgroundColor='white'
                    bodyTextColor='black'
                    bodyHeight='200px'
                    headerText='New Product'
                >
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>
                                Name:
                                <input type="text" value={name} onChange={(event) => setName(event.target.value)} required />
                            </label>
                        </div>
                        <div>
                            <label>
                                Price:
                                <input type="number" value={price} step={.01} min={0} onChange={(event) => setPrice(event.target.value)} required />
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

export default NewProduct;
