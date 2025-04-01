import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreateFormEvent.css";
import Navbar from "../NavBar/NavBar";

const CreateFormEvent = () => {
    const eventCategories = ["Dm-Lights", "Maharaj-Events", "Chintamani-Wall-arts"];
    const lightCategories = ["Road-Show", "Live-Show"];

    const [formData, setFormData] = useState({
        category: "Dm-Lights",
        venue: "",
        email: "",
        name: "",
        number: "",
        showType: "Road-Show",
        startTime: "",
        endTime: "",
        startDate: "",
        endDate: "",
        description: "",
        orderImage: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            orderImage: e.target.files[0]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Order Data:", formData);
    };

    return (
        <>
            <Navbar />
            <div className="container d-flex justify-content-center align-items-center mt-5">
                <div className="card p-4 shadow-lg event-form">
                    <h2 className="text-center mb-4">Create Order</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Order Title</label>
                            <select
                                className="form-select"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
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
                            <input
                                type="text"
                                className="form-control"
                                name="venue"
                                value={formData.venue}
                                onChange={handleChange}
                                placeholder="Enter venue"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Customer Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Customer Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter name"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Customer Number</label>
                            <input
                                type="number"
                                className="form-control"
                                name="number"
                                value={formData.number}
                                onChange={handleChange}
                                placeholder="Enter number"
                            />
                        </div>

                        {formData.category === "Dm-Lights" && (
                            <>
                                <div className="mb-3">
                                    <label className="form-label">Show Type</label>
                                    <select
                                        className="form-select"
                                        name="showType"
                                        value={formData.showType}
                                        onChange={handleChange}
                                    >
                                        {lightCategories.map((category, index) => (
                                            <option key={index} value={category}>
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="row g-3 justify-content-center">
                                    {formData.showType === "Road-Show" ? (
                                        <>
                                            <button className="btn btn-outline-primary col-md-3 col-6">Sharpy</button>
                                            <button className="btn btn-outline-primary col-md-3 col-6">Laser</button>
                                            <button className="btn btn-outline-primary col-md-3 col-6">Blender</button>
                                            <button className="btn btn-outline-primary col-md-3 col-6">LED Bottom</button>
                                            <button className="btn btn-outline-primary col-md-3 col-6">Smoker</button>
                                            <button className="btn btn-outline-primary col-md-3 col-6">Truss</button>
                                        </>
                                    ) : (
                                        <>
                                            <button className="btn btn-outline-primary col-md-3 col-6">Sharpy</button>
                                            <button className="btn btn-outline-primary col-md-3 col-6">Blender</button>
                                            <button className="btn btn-outline-primary col-md-3 col-6">LED</button>
                                            <button className="btn btn-outline-primary col-md-3 col-6">Smoker</button>
                                        </>
                                    )}
                                </div>
                            </>
                        )}

                        {(formData.category === "Dm-Lights" || formData.category === "Chintamani-Wall-arts") && (
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Start Time</label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        name="startTime"
                                        value={formData.startTime}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">End Time</label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        name="endTime"
                                        value={formData.endTime}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        )}

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Start Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">End Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="endDate"
                                    value={formData.endDate}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <h4 className="text-center mt-4">📝 Order Description</h4>

                        <div className="mb-3">
                            <label className="form-label">Order Image</label>
                            <input type="file" className="form-control file-input" onChange={handleFileChange} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Type here..."
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 custom-btn">
                            🚀 Create Order
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateFormEvent;
