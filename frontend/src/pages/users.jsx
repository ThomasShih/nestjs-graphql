import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "@apollo/client";

import "./styles/page.css";

import NavBar from "../components/navBar";
import DataTable from "../components/dataTable";
import OrderItem from "../components/OrderItem";
import NewUser from "../components/newUser";
import AddProductToUser from "../components/addProductToUser";
import { GET_USERS } from "../gql";


const Users = () => {
	const { loading, error, data, refetch } = useQuery(GET_USERS);
	useEffect(() => { window.scrollTo(0, 0) }, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error! {error.message}</div>;

	const columns = [
		{
			label: "Name",
			renderCell: (row) => row.name
		},
		{
			label: "Email",
			renderCell: (row) => row.email
		},
		{
			label: "Age",
			renderCell: (row) => row.age
		},
		{
			label: "Orders",
			renderCell: (row) => row.order.map((order) => <OrderItem key={order.id} product={order} />)
		},
		{
			label: "Add Product",
			renderCell: (row) => <AddProductToUser userId={row.id} />
		}
	];

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Users`}</title>
			</Helmet>
			<NavBar active="users" />
			<div className="page-content">
				<div className="content-wrapper">
					<div className="projects-container">
						<div className="title projects-title">
							Users
						</div>
						<NewUser refresh={refetch} />
						<DataTable columns={columns} rows={data.getUsers} />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Users;