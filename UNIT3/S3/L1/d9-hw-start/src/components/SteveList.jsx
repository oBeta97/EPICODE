import { Col, Container, Row } from "react-bootstrap";
import HomeButton from "./HomeButton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DeleteSteve from "./DeleteSteve";

const SteveList = (props) => {

    const steveListRedux = useSelector((store) => store.steveList.content);

    return (
        <Container className="my-5">
            <Row>
                <Col xs={11}>
                    <h1> Steve List</h1>
                </Col>
                <Col xs={1}>
                    <HomeButton />
                </Col>
            </Row>
            {
                steveListRedux.map((data, i) => (
                    <Row key={i} className="my-2 p-2 border border-secondary rounded-3">
                        <Col xs={3}>
                            <Link to={`/${data.company_name}`}>{data.company_name}</Link>
                        </Col>
                        <Col xs={8}>
                            <a href={data.url} target="_blank" rel="noreferrer">
                                {data.title}
                            </a>
                        </Col>
                        <Col xs={1}>
                            <DeleteSteve indexToDelete={i} />
                        </Col>
                    </Row>
                ))
            }

        </Container>
    );
};

export default SteveList;