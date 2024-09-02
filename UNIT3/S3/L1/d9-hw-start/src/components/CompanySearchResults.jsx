import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import HomeButton from "./HomeButton";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className="my-3">
        <Col xs={11}>
          <h1> Job posting for: {params.company}</h1>
        </Col>
        <Col xs={1}>
          <HomeButton />
        </Col>
      </Row>
      <Row>
        <Col>
          {
            jobs.map(jobData => (
              <Job key={jobData._id} data={jobData} />
            ))
          }
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
