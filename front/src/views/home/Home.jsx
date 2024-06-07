// Home.jsx
import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import Card from '../../components/card/Card';
import Appointment from '../appointment/Appointment';
import CardAppointment from '../../components/cardApointment/CardAppoinitment';

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            
            <Navbar />
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
}
