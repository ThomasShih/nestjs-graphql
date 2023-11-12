import React, { useState } from 'react';
import { useMutation, useQuery } from "@apollo/client";
import { toast, ToastContainer } from 'react-toastify';
import { ReactDialogBox } from 'react-js-dialog-box';

import 'react-js-dialog-box/dist/index.css';
import "react-toastify/dist/ReactToastify.css";

import { ADD_USER, GET_PRODUCTS, GET_USERS } from "../gql";

function NewUser() {
    const { error, loading, data } = useQuery(GET_PRODUCTS);
    const [createUser] = useMutation(ADD_USER, { refetchQueries: [{ query: GET_USERS }] });

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error! {error.message}</div>;

    const handleSubmit = (event) => {
        event.preventDefault();
        const variables = {
            name,
            email,
            age: parseInt(age),
            order: selectedProducts,
        };
        createUser({ variables });
        setShowForm(false);
        toast(`User ${name} added!`);
    }

    const handleProductSelection = (productId) => {
        if (selectedProducts.includes(productId)) {
            setSelectedProducts(selectedProducts.filter((id) => id !== productId));
        } else {
            setSelectedProducts([...selectedProducts, productId]);
        }
    }

    return (
        <div>
            <button onClick={() => setShowForm(true)}>Add New User</button>
            <ToastContainer />
            {showForm && (
                <ReactDialogBox
                    closeBox={() => { setShowForm(false); setName(''); setEmail(''); setAge(0); setSelectedProducts([]) }}
                    modalWidth='60%'
                    headerBackgroundColor='red'
                    headerTextColor='white'
                    headerHeight='65'
                    closeButtonColor='white'
                    bodyBackgroundColor='white'
                    bodyTextColor='black'
                    headerText='New User'
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
                                Email:
                                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                            </label>
                        </div>
                        <div>
                            <label>
                                Age:
                                <input type="number" value={age} step={1} min={0} onChange={(event) => setAge(event.target.value)} required />
                            </label>
                        </div>
                        <div>
                            Products:
                            {data.getProducts.map((product) => (
                                <div key={product.id} style={{ border: "1px solid black", margin: "5px" }}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value={product.id}
                                            checked={selectedProducts.includes(product.id)}
                                            onChange={() => handleProductSelection(product.id)}
                                        />
                                        {`${product.name}: $${product.price}`}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </ReactDialogBox>
            )
            }
        </div >
    );
}

export default NewUser;
