/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, 
        Modal, 
        ModalHeader, 
        ModalBody, 
        ModalFooter,
        Col,
        Input,
        Form,
        FormGroup,
        Card,
        CardHeader,
        CardImg,
        CardBody,
        Row,
        Container } from 'reactstrap';

import BarCrawlIcon from '../../assets/barcrawlicon.png'

    //mockData
import mockCrawls from '../pages/mockCrawls.js'

const NewCrawlModal = (props) => {



  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [title, setTitle]= useState("")

  const [crawls,setCrawls]= useState(mockCrawls)

  const handleChange = e => setTitle(e.target.value)

  return (
    <div>
      <Button className="button-dark" onClick={toggle}> Add to Crawl{buttonLabel}</Button>

      <Modal 
      isOpen={modal} 
      toggle={toggle} 
      className={className}
      size="lg"
      >
            <ModalHeader toggle={toggle}>
                <h2>Save {props.name} to Your BarCrawlz! </h2>
            </ModalHeader>
        <ModalBody>
        <h4><b>Create a New Crawl & Add {props.name}</b></h4>
        <Form className="modal-form">
                    <FormGroup className= "modal-form-field">
                        <Input
                        type="text"
                        name="title"
                        placeholder="Write Your Crawl Title Here 😉"
                        value={ title }
                        onChange={ handleChange }
                        />
                    </FormGroup>
                <button 
                className= "button-small" 
                onClick={toggle} >
                    Create & Add
                </button>
                </Form>
            <hr/>
            <h4><b>Add {props.name} to an Existing Crawl</b></h4>
            <div className="modal-scroll-container">
            <Container>
                <Row>
            { crawls && crawls.map((crawl, index) => {
          return (
            <Col key={index} className="spacing" lg="4" sm="6" xs="12">
            <Card 
              className= "top-crawls-card"
              key= { index } >
                <CardHeader className= "card-header" tag="h6">{ crawl.title }
                </CardHeader>
                <CardBody>
                    <CardImg 
                    bottom width="20%" 
                    src= { BarCrawlIcon }
                    alt="your crawl" />
                    <center>
                    <Button className="button-small" onClick={toggle}>Add Now</Button>
                    </center>
                    </CardBody>
            </Card>
            </Col>
          )
        })}
            </Row>
            </Container>

            </div>

        </ModalBody>
        <ModalFooter>
          <Button className="button-small" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default NewCrawlModal;