import React from "react";
import { Table } from "react-bootstrap";
import "./qualification.css";

const qualification = () => {
  return (
    <div id="qualification">
      <h1 className="pt-3 text-center font-details-b pb-3">QUALIFICATION</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Examination</th>
            <th>Institute</th>
            <th>Result in Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>B.Tech </td>
            <td>Poornima College of Engineering, Jaipur </td>
            <td>65.5%</td>
          </tr>
          <tr>
            <td>Senior Secondary</td>
            <td> Lord Krishna School, Kota</td>
            <td>78.20%</td>
          </tr>
          <tr>
            <td>Secondary </td>
            <td>Saraswati School, Kota</td>
            <td>62.17%</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default qualification;
