import './App.css';
import { React, useState } from "react";

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: true,
        math: false,
        physics: false
    });
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState("");
    const [selectedOption, setSelectedOptions] = useState("");
    const [about, setAbout] = useState("");
    const [successMessage, setSuccessMessage] = useState(""); // New state for success message

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName, lastName, email, contact, gender, subjects, resume, url, selectedOption, about);
        setSuccessMessage("Form submitted successfully!"); // Set success message
    };

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({
            english: true,
            math: false,
            physics: false,
        });
        setResume("");
        setUrl("");
        setSelectedOptions("");
        setAbout("");
        setSuccessMessage(""); // Clear success message on reset
    };

    return (
        <div>
            <h1>Form in React</h1>
            <fieldset>
                <form action="#" method="get">
                    <label htmlFor="firstname">
                        First Name:
                    </label>
                    <input
                        name="firstname"
                        type="text"
                        id="firstname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter your first name"
                        required
                    />
                    <br />
                    <label htmlFor="lastname">
                        Last Name:
                    </label>
                    <input
                        name="lastname"
                        type="text"
                        id="lastname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter your last name"
                        required
                    />
                    <br />
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input
                        name="email"
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                    <br />
                    <label htmlFor="contact">
                        Contact:
                    </label>
                    <input
                        name="contact"
                        type="text"
                        id="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Enter your phone number"
                        required
                    />
                    <br />
                    <label htmlFor="gender">
                        Gender:
                    </label>
                    <input
                        name="gender"
                        type="radio"
                        id="male"
                        value="male"
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    Male
                    <input
                        name="gender"
                        type="radio"
                        id="female"
                        value="female"
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    Female
                    <br />
                    <label htmlFor="lang">
                        Your best subjects:
                    </label>
                    <input
                        type="checkbox"
                        id="english"
                        name="lang"
                        checked={subjects.english === true}
                        onChange={(e) => handleSubjectChange("english")}
                    />
                    English
                    <input
                        type="checkbox"
                        id="math"
                        name="lang"
                        checked={subjects.math === true}
                        onChange={(e) => handleSubjectChange("math")}
                    />
                    Math
                    <input
                        type="checkbox"
                        id="physics"
                        name="lang"
                        checked={subjects.physics === true}
                        onChange={(e) => handleSubjectChange("physics")}
                    />
                    Physics
                    <br />
                    <label htmlFor="file">
                        Upload a resume:
                    </label>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        onChange={(e) => setResume(e.target.files[0])}
                        required
                    />
                    <br />
                    <label htmlFor="url">
                        Url:
                    </label>
                    <input
                        name="url"
                        type="url"
                        id="url"
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter url"
                        required
                    />
                    <br />
                    <label>Select your choice</label>
                    <select
                        name="select"
                        id="select"
                        value={selectedOption}
                        onChange={(e) => setSelectedOptions(e.target.value)}
                    >
                        <optgroup label="Beginners">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">JavaScript</option>
                        </optgroup>
                        <optgroup label="Advanced">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">Express</option>
                            <option value="7">MongoDB</option>
                        </optgroup>
                    </select>
                    <br />
                    <label htmlFor="about">About:</label>
                    <textarea
                        name="about"
                        id="about"
                        cols={30}
                        rows={10}
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        placeholder="Tell us about yourself"
                        required
                    ></textarea>
                    <br />
                    <h4>Submit or Reset</h4>
                    <button
                        type="submit"
                        value="submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Submit
                    </button>
                    <button
                        type="reset"
                        value="reset"
                        onClick={() => handleReset()}
                    >
                        Reset
                    </button>
                </form>
                {/* Conditionally render the success message */}
                {successMessage && (
                    <p style={{ color: "green", marginTop: "10px" }}>
                        {successMessage}
                    </p>
                )}
            </fieldset>
        </div>
    );
}

export default App;
