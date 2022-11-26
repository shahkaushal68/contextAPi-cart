import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Ratings from "./Ratings";

const FilterProducts = () => {
  const [rate, setRate] = useState();

  return (
    <>
      <h3>Filter Products</h3>
      <div className="filters">
        <div>
          <Form.Check
            type="radio"
            id="radio-1"
            label="Ascending"
            name="group1"
          />
        </div>
        <div>
          <Form.Check
            type="radio"
            id="radio-2"
            label="Decending"
            name="group1"
          />
        </div>
        <div>
          <Form.Check
            type="checkbox"
            id="checkbox-1"
            label="Include Out of Stock"
            name="group1"
          />
        </div>
        <div>
          <Form.Check
            type="checkbox"
            id="checkbox-2"
            label="Fast deleviery only"
            name="group1"
          />
        </div>
        <div>
          <span>Ratings:</span>&nbsp;
          <Ratings
            rate={rate}
            style={{ cursor: "pointer" }}
            handleClick={(i) => setRate(i + 1)}
          />
        </div>
        <div>
          <Button className="clear-filter">Clear Filter</Button>
        </div>
      </div>
    </>
  );
};

export default FilterProducts;
