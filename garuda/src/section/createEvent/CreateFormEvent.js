import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './CreateFormEvent.css'
import Navbar from "../NavBar/NavBar";
import { useState } from "react";

const CreateFormEvent = () => {
    const eventCategories = ["Dm-Lights", "Maharaj-Events", "Chintamani-Wall-arts"];
    const [selectedCategory, setSelectedCategory] = useState("Dm-Lights");

    const CheckOrder = () => {
        if (selectedCategory === "Dm-Lights") {
            return (
                <div className="container d-flex justify-content-center align-items-center mt-5">
                    <div className="card p-4 shadow-lg event-form">
                        <h2 className="text-center mb-4"> Create Order</h2>

                        <form>
                            <div className="mb-3">
                                <label className="form-label">Order Title</label>
                                <select
                                    className="form-select"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    {eventCategories.map((category, index) => (
                                        <option key={index} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Order Venue</label>
                                <input type="text" className="form-control" placeholder="Enter venue" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Customer Email</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Customer Name</label>
                                <input type="text" className="form-control" placeholder="Enter name" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Customer Number</label>
                                <input type="number" className="form-control" placeholder="Enter number" />
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Start Time</label>
                                    <input type="time" className="form-control" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">End Time</label>
                                    <input type="time" className="form-control" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Start Date</label>
                                    <input type="date" className="form-control" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">End Date</label>
                                    <input type="date" className="form-control" />
                                </div>
                            </div>

                            <h4 className="text-center mt-4">📝 Order Description</h4>

                            <div className="mb-3">
                                <label className="form-label">Order Image</label>
                                <input type="file" className="form-control file-input" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea className="form-control" rows="3" placeholder="Type here..."></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-100 custom-btn">
                                🚀 Create Order
                            </button>
                        </form>
                    </div>
                </div>
            );
        } else if (selectedCategory === "Maharaj-Events") {
            return (
                <div className="container d-flex justify-content-center align-items-center mt-5">
                    <div className="card p-4 shadow-lg event-form">
                        <h2 className="text-center mb-4"> Create Order</h2>

                        <form>
                            <div className="mb-3">
                                <label className="form-label">Order Title</label>
                                <select
                                    className="form-select"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    {eventCategories.map((category, index) => (
                                        <option key={index} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Order Venue</label>
                                <input type="text" className="form-control" placeholder="Enter venue" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Customer Email</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Customer Name</label>
                                <input type="text" className="form-control" placeholder="Enter name" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Customer Number</label>
                                <input type="number" className="form-control" placeholder="Enter number" />
                            </div>

                            {/* <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Start Time</label>
                                    <input type="time" className="form-control" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">End Time</label>
                                    <input type="time" className="form-control" />
                                </div>
                            </div> */}

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Start Date</label>
                                    <input type="date" className="form-control" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">End Date</label>
                                    <input type="date" className="form-control" />
                                </div>
                            </div>

                            <h4 className="text-center mt-4">📝 Order Description</h4>

                            <div className="mb-3">
                                <label className="form-label">Order Image</label>
                                <input type="file" className="form-control file-input" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea className="form-control" rows="3" placeholder="Type here..."></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-100 custom-btn">
                                🚀 Create Order
                            </button>
                        </form>
                    </div>
                </div>
            );
        } else if (selectedCategory === "Chintamani-Wall-arts") {
            return (
                <div className="container d-flex justify-content-center align-items-center mt-5">
                    <div className="card p-4 shadow-lg event-form">
                        <h2 className="text-center mb-4"> Create Order</h2>

                        <form>
                            <div className="mb-3">
                                <label className="form-label">Order Title</label>
                                <select
                                    className="form-select"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    {eventCategories.map((category, index) => (
                                        <option key={index} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Order Venue</label>
                                <input type="text" className="form-control" placeholder="Enter venue" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Customer Email</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Customer Name</label>
                                <input type="text" className="form-control" placeholder="Enter name" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Customer Number</label>
                                <input type="number" className="form-control" placeholder="Enter number" />
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Start Time</label>
                                    <input type="time" className="form-control" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">End Time</label>
                                    <input type="time" className="form-control" />
                                </div>
                            </div>

                            {/* <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Start Date</label>
                                    <input type="date" className="form-control" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">End Date</label>
                                    <input type="date" className="form-control" />
                                </div>
                            </div> */}

                            <h4 className="text-center mt-4">📝 Order Description</h4>

                            <div className="mb-3">
                                <label className="form-label">Order Image</label>
                                <input type="file" className="form-control file-input" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea className="form-control" rows="3" placeholder="Type here..."></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-100 custom-btn">
                                🚀 Create Order
                            </button>
                        </form>
                    </div>
                </div>
            );
        }
    }
    return (
        <>
            <Navbar />
            {CheckOrder()}
        </>

    );
};

export default CreateFormEvent;
