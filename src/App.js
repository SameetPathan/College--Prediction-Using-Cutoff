import "./App.css";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Navbarcomponent from "./components/Navbarcomponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  const [educationType, setEducationType] = useState("");
  const [diplomaMarks, setDiplomaMarks] = useState("");
  const [jeeMarks, setJeeMarks] = useState("");
  const [cetMarks, setCetMarks] = useState("");
  const [collegePrediction, setCollegePrediction] = useState("");

  const [btn, setbtn] = useState(false);

  const collegeData = {
    colleges: [
      {
        name: "COEP Technological University",
        cutoffs: {
          diploma: 85,
          jee: 120,
          cet: 90,
        },
      },
      {
        name: "Pune Institute of Computer Technology, Dhankavdi",
        cutoffs: {
          diploma: 80,
          jee: 110,
          cet: 95,
        },
      },
      {
        name: "Vishwakarma Institute of Technology, Bibwewadi",
        cutoffs: {
          diploma: 90,
          jee: 100,
          cet: 85,
        },
      },
      {
        name: "Pimpri Chinchwad College of Engineering, Pune",
        cutoffs: {
          diploma: 95,
          jee: 130,
          cet: 100,
        },
      },
      {
        name: "MIT Academy of Engineering,Alandi, Pune",
        cutoffs: {
          diploma: 75,
          jee: 115,
          cet: 85,
        },
      },
      {
        name: "Dr DY Patil Institute of Engineering and Technology, Ambi",
        cutoffs: {
          diploma: 85,
          jee: 125,
          cet: 90,
        },
      },
      {
        name: "Sinhgad College of Engineering, Vadgaon (BK)",
        cutoffs: {
          diploma: 70,
          jee: 105,
          cet: 80,
        },
      },
      {
        name: "NBN Sinhgad Technical Institutes Campus",
        cutoffs: {
          diploma: 80,
          jee: 120,
          cet: 95,
        },
      },
      {
        name: "Sinhgad Academy of Engineering, Kondhwa (BK) Kondhwa-Saswad Road",
        cutoffs: {
          diploma: 90,
          jee: 130,
          cet: 100,
        },
      },
      {
        name: "Indira College of Engineering & Management",
        cutoffs: {
          diploma: 85,
          jee: 110,
          cet: 90,
        },
      },
      {
        name: "Sinhagad Institute of Technology, Lonavala",
        cutoffs: {
          diploma: 75,
          jee: 105,
          cet: 80,
        },
      },
      {
        name: "Genba Sopanrao Moze Trust Parvatibai Genba Moze College of Engineering,Wagholi",
        cutoffs: {
          diploma: 95,
          jee: 130,
          cet: 100,
        },
      },
      {
        name: "SKN Sinhgad Institute of Technology & Science, Kusgaon(BK)",
        cutoffs: {
          diploma: 80,
          jee: 120,
          cet: 95,
        },
      },
      {
        name: "Shree Yash Pratishthan, Shreeyash College of Engineering and Technology",
        cutoffs: {
          diploma: 90,
          jee: 110,
          cet: 90,
        },
      },
      {
        name: "Hi-Tech Institute of Technology, Chh. Sambhajinagar	DBATU",
        cutoffs: {
          diploma: 85,
          jee: 125,
          cet: 85,
        },
      },
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform college prediction logic here based on the user's input
    let predictedColleges = [];

    if (educationType === "diploma") {
      // Perform prediction based on diploma marks
      predictedColleges = collegeData.colleges.filter(
        (college) => college.cutoffs.diploma <= diplomaMarks
      );
    } else if (educationType === "12th") {
      // Perform prediction based on JEE or CET marks
      if (jeeMarks) {
        predictedColleges = collegeData.colleges.filter(
          (college) => college.cutoffs.jee <= jeeMarks
        );
      } else if (cetMarks) {
        predictedColleges = collegeData.colleges.filter(
          (college) => college.cutoffs.cet <= cetMarks
        );
      }
    }

    setCollegePrediction(predictedColleges);
    setbtn(true);

    // setCollegePrediction(
    //   predictedColleges.map((college) => college.name).join(", ")
    // );
  };

  return (
    <div className="App">
      <Navbarcomponent></Navbarcomponent>
      <div className="p-4">
        <div class="alert alert-success" role="alert">
          Select What You Have Done After 10th and Predict the Best College for
          you
        </div>
        <Form onSubmit={handleSubmit} className="p-4 bg-light rounded">
          <Form.Group controlId="educationType">
            <Form.Label>Education Type:</Form.Label>
            <Form.Control
              as="select"
              value={educationType}
              onChange={(e) => setEducationType(e.target.value)}
              className="mb-3"
              style={{ height: "69px" }}
            >
              <option value="">Select</option>
              <option value="diploma">Diploma</option>
              <option value="12th">12th</option>
            </Form.Control>
          </Form.Group>

          {educationType === "diploma" && (
            <Form.Group controlId="diplomaMarks">
              <Form.Label>Diploma Marks:</Form.Label>
              <Form.Control
                type="number"
                value={diplomaMarks}
                onChange={(e) => setDiplomaMarks(e.target.value)}
                className="mb-3"
              />
            </Form.Group>
          )}

          {educationType === "12th" && (
            <>
              <Form.Group controlId="jeeMarks">
                <Form.Label>JEE Marks:</Form.Label>
                <Form.Control
                  type="number"
                  value={jeeMarks}
                  onChange={(e) => setJeeMarks(e.target.value)}
                  className="mb-3"
                />
              </Form.Group>

              <Form.Group controlId="cetMarks">
                <Form.Label>CET Marks:</Form.Label>
                <Form.Control
                  type="number"
                  value={cetMarks}
                  onChange={(e) => setCetMarks(e.target.value)}
                  className="mb-3"
                />
              </Form.Group>
            </>
          )}

          <Button variant="primary" type="submit">
            Predict Colleges
          </Button>

          {collegePrediction && collegePrediction.length > 0 ? (
            <div className="mt-4">
              <h4 className="mb-3">Predicted Colleges:</h4>
              <ul className="list-group">
                {collegePrediction.map((college, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {college.name}
                    <span className="badge badge-primary badge-pill">
                      {college.cutoff}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="mt-4">
            
          {btn  ? (
              <p>
                You are not eligible for any college provided in the dataset.
              </p>):(""
          )}
            </div>
          )}
        </Form>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
