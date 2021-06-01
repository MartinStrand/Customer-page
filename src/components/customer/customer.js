import React from 'react';
import Icon from '../icons/icons.js'


const Customer = () => {
    return (
        <div className="customerInfo">
            <div className="customerContact">
                <h6><Icon icon="emailPhone" /> Contact Anna</h6>
                <p>annaanne@qliro.com<br></br>+46721234567</p>
            </div>
            <div className="customerAdress">
                <h6><Icon icon="shipping" /> Shipping adess</h6>
                <p>Qlirovägen 123,<br></br>12365 Stockholm, Sweden</p>
            </div>
            <div className="customerInvoice">
                <h6><Icon icon="invoice" /> Invoice adess</h6>
                <p>Qlirovägen 123,<br></br>12365 Stockholm, Sweden</p>
            </div>
        </div>
    )
}
export default Customer