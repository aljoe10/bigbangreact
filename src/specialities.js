import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import dentistry from "./assests/img/dentistry.png";
import electrocardiogram from "./assests/img/electrocardiogram.png";
import gynecolgy from "./assests/img/gynecology.png";
import kidneys from "./assests/img/kidneys.png";
import orthopedics from "./assests/img/orthopedics.png";
import pulmonology from "./assests/img/pulmonology.png";
import think from "./assests/img/think.png";
import Footer from "./Footer";

const Specialities = [
  {
    id: 1,
    name: "Dentistry",
    image: dentistry,
  },
  {
    id: 2,
    name: "Electrocardiography",
    image: electrocardiogram,
  },
  {
    id: 3,
    name: "Gynecology",
    image: gynecolgy,
  },
  {
    id: 4,
    name: "Kidneys",
    image: kidneys,
  },
  {
    id: 5,
    name: "Orthopedics",
    image: orthopedics,
  },
  {
    id: 6,
    name: "pulmonology",
    image: pulmonology,
  },
  {
    id: 7,
    name: "Neurologist",
    image: think,
  },
];

const Facilities = () => {
  const [filter, setFilter] = useState(null);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredTechnology = filter
    ? Specialities.filter((tech) =>
        tech.skills.some((skill) => skill.type === filter)
      )
    : Specialities;

  return (
    <div>
      <h2 className="header" style={{ textAlign: "center"}}>
      Learn about the world class health care we provide
      </h2>
      <table className="table table-bordered" style={{ marginTop: "2rem"}}>
        <thead className="thead-dark">
          <tr>
            <th>Serial No.</th>
            <th>Specialities</th>
          </tr>
        </thead>
        <tbody>
          {filteredTechnology.map((tech, index) => (
            <tr key={index}>
              <td>{tech.id}</td>
              <td>
                <a href={tech.link}>{tech.name}</a>
              </td>
              <td>
                <img
                  src={tech.image}
                  alt="Technology"
                  className="img-fluid rounded"
                  style={{ maxWidth: "100px" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer/>
    </div>
  );
};

export default Facilities;
