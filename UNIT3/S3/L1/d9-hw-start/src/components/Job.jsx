import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddSteve from './AddSteve'
import { useSelector } from 'react-redux'
import DeleteSteve from './DeleteSteve'

const Job = ({ data }) => {
  const selector = useSelector(store => store.steveList.list);

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={1}>
        {
          selector.includes(data) ?
            <DeleteSteve idToDelete={data._id} /> :
            <AddSteve steve={data} />
        }
      </Col>
    </Row>
  );

}

export default Job
