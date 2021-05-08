
import React, { useState , useEffect } from 'react';
import { Card, Badge, Button, Collapse, Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown'
import { connect } from 'react-redux'
import { fetchUsers } from './actions';
import SearchForm from "./SearchForm"


function Job({ userData, fetchUsers }) {

  
  const [open, setOpen] = useState(false)
  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])


  const [params, setParams] = useState({
   
    title: "",
    locaion:""
  })
  
  console.log(params.location)

    
  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }
  

  return userData && userData.loading ? (
    <h2>Loading</h2>
  ) : userData && userData.error ? (
    <h2>{userData.error}</h2>
  ) : (

    <div>
     <Container className="mb-4">
    
     
      <SearchForm params={params} onParamChange={handleParamChange} />
  
     
      
      <div>
      
        {userData &&
          userData.jobs &&
          userData.jobs.filter((val) => {
          
            const ans = params.title === "" && params.location === "" ? val : val.title.includes(params.title) |
            val.location.includes( params.location) | params.full_time === ""?  val : null ;

            return ans
          
          
          }).map(job =>  
           
      
          <Card className="mb-3">
               <Card.Body>
                      <div className="d-flex justify-content-between">
                        <div>
                          <Card.Title>
                            {job.title} - <span className="text-muted font-weight-light">{job.company}</span>
                          </Card.Title>
                          <Card.Subtitle className="text-muted mb-2">
                            {new Date(job.created_at).toLocaleDateString()}
                          </Card.Subtitle>
                          <Badge variant="secondary" className="mr-2">{job.type}</Badge>
                          <Badge variant="secondary">{job.location}</Badge>
                          <div style={{ wordBreak: 'break-all' }}>
                            <ReactMarkdown source={job.how_to_apply} />
                          </div>
                        </div>
                        <img className="d-none d-md-block" height="50" alt={job.company} src={job.company_logo} />
                      </div>
                      <Card.Text>
                        <Button
                          onClick={() => setOpen(prevOpen => !prevOpen)}
                          variant="primary"
                        >
                          {open ? 'Hide Details' : 'View Details'}
                        </Button>
                      </Card.Text>
                      <Collapse in={open}>
                        <div className="mt-4">
                          <ReactMarkdown source={job.description} />
                        </div>
                      </Collapse>
                </Card.Body>
          </Card>
           
          )} 
        </div>
                    </Container>
    </div>
   
  )

} 

const mapStateToProps = state => {
  return {
    userData: state.job
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: (params, page) => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Job)
