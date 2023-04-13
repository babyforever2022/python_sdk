import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Form } from "react-bootstrap";

const { Control } = Form;
const thisYear = new Date().getFullYear();

function Github() {
  const [selyear, setSelyear] = useState(thisYear);
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };

  let yearArray = [];
  for (let i = 2015; i <= thisYear; i++) {
    yearArray.push(i);
  }

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
        <Control
          onChange={(e) => setSelyear(e.target.value)}
          defaultValue={thisYear} as="select" style={{ marginTop: "20px" }}>
          {yearArray.map((year, key) => (
            <option value={year} key={key}> {year} </option>
          ))}
        </Control>
      </h1>
      <GitHubCalendar
        username="goldpal"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
        year={selyear}
        fullYear
      />
    </Row>
  );
}

export default Github;
