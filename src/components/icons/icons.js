import React from 'react';
import amex from './images/AMEX.png'
import arrow from './images/corner-down-right.svg'
import emailPhone from './images/EmailPhone.svg'
import invoice from './images/Invoice.svg'
import norway from './images/Norska.svg'
import paypal from './images/Paypal.png'
import qliro from './images/Qliro.svg'
import shipping from './images/Shipping.svg'
import sweden from './images/Svenska.svg'
import trustly from './images/Trustly.svg'
import uk from './images/uk.svg'
import upsell from './images/Upsell.svg'
import visa from './images/VISA.png'

const icons = {
    amex,
    arrow,
    emailPhone,
    invoice,
    norway,
    paypal,
    qliro,
    shipping,
    sweden,
    trustly,
    uk,
    upsell,
    visa
};

const Icon = (props) => (
    props.paymentProvider ? <img className="icon paymentProvider" src={icons[props.icon]} alt="missing img"></img>
    : <img className="icon" src={icons[props.icon]} alt="missing img"></img>
)

export default Icon;