import React, { useState, useEffect } from 'react';
import Icon from '../icons/icons.js';
import { createServer } from "miragejs"

const Order = () => {

    const [orders, setOrders] = useState([]);

    createServer({
        routes() {
            this.get("/orders", () => [
                { id: "1234567890", date: "05 maj, 12:33", country: "uk", store: "Butik X", paymentmethod: "Invoice", paymentImage: "qliro", status: "Paid", amount: "2160 kr", type: "Online" },
                { id: "1234567891", date: "16 maj, 12:33", country: "sweden", store: "Butik X", paymentmethod: "Card, ****1234", paymentImage: "visa", status: "In progress", amount: "3890 kr", type: "Instore" },
                { id: "1234567892", date: "20 maj, 12:33", country: "norway", store: "Butik X", paymentmethod: "Card, ****1234", paymentImage: "amex", status: "Failed", amount: "1134 kr", type: "Manual" },
                { id: "1234567893", date: "24 maj, 12:33", country: "sweden", store: "Butik X", paymentmethod: "Paypal", paymentImage: "paypal", status: "In progress", amount: "567 kr", type: "Online" },
                { id: "1234567894", date: "30 maj, 12:33", country: "norway", store: "Butik X", paymentmethod: "Trustly", paymentImage: "trustly", status: "Paid", amount: "8970 kr", type: "Instore" },
            ])
        },
    });

    useEffect(() => {
        fetch("/orders")
            .then((response) => response.json())
            .then((json) => setOrders(json))
    }, [])

    return (
        <div className="orderWrapper">
            <div className="customerOrders">
                <div className="orderTitles">
                    <p>Order number</p>
                    <p>Created</p>
                    <p>Store</p>
                    <p>Payment method</p>
                    <p>Payment status</p>
                    <p>Amount</p>
                </div>
            </div>

            {orders.map(order => (
                <div className="orderContainer" key={order.id}>
                    <div className={`storeType ${order.type}`}>
                        <p className="tile">{order.type}</p>
                    </div>
                    <div className="orderNumber">
                        <p>{order.id}<Icon icon="arrow" /></p>
                    </div>
                    <div className="orderDate">
                        <p>{order.date}</p>
                    </div>
                    <div className="store">
                        <Icon icon={order.country} /><p>{order.store}</p>
                    </div>
                    <div className="paymentMethod">
                        <Icon icon={order.paymentImage} paymentProvider={true} /><p>{order.paymentmethod}</p>
                    </div>
                    <div className="paymentStatus">
                        <p><span className={`status ${(order?.status.replace(/\s/g, ''))}`}></span>{order.status}</p>
                    </div>
                    <div className="amount">
                        <p>{order.amount} </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Order;