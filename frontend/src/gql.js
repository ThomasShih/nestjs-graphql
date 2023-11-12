import { gql } from '@apollo/client';

export const ADD_PRODUCT = gql`
    mutation createProduct($name: String!, $price: Float!) {
        createProduct(productInput: {
            name: $name,
            price: $price,
        }) {
            id,
            name,
            price
        }
    }
`;

export const ADD_USER = gql`
    mutation createUser($name: String!, $email: String!, $age: Int!, $order: [String!]!) {
        createUser(userInput: {
            name: $name,
            email: $email,
            age: $age,
            order: $order,
        }) {
            id,
            name,
            email,
            age,
            order {
                name,
                id,
                price,
            }
        }
    }
`;

export const ADD_PRODUCT_TO_ORDER = gql`
    mutation addProductToOrder($userId: String!, $productId: String!) {
        addProductToOrder(userId: $userId, productId: $productId) {
            name,
            email,
            age,
            order {
                name,
                id,
            }
        }
    } 
`;

export const GET_USERS = gql`
	query {
		getUsers {
			id,
			name,
			email,
			age,
			order {
				name,
				id,
				price,
			}
		}
	}
`;

export const GET_PRODUCTS = gql`
    query {
        getProducts {
            id,
            name,
            price,
        }
    }
`;