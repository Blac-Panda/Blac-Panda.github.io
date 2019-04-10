import React, { Component } from 'react';
import '../App.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class PictureGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            selectedImage: {}
        }

    }

    render() {
        let images = this.props.images
        console.log(images);
        return (
            <Row>
                { 
                    images.map((image, index) => {
                            return (
                                <Col className="mb-2 hoverfnc" key={index}>
                                    <img 
                                        onClick={() => {
                                            this.setState({ selectedImage: image }, () => {
                                                this.setState({ showModal: true })
                                            })
                                        }} 
                                        src={image.src.medium} 
                                        height='200' 
                                        width='200' 
                                        style={{objectFit: 'cover',}}/>
                                </Col>
                                
                            )
        
                    })
                }
                <Modal
                    show={this.state.showModal}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Body>
                        {this.state.selectedImage.src && 
                            <div>
                                <img width="460px" src={this.state.selectedImage.src.medium} />
                                <p><bold>Photographer: </bold>{this.state.selectedImage.photographer}</p>
                                <a href={this.state.selectedImage.url}>Download</a>
                            </div>
                        }
                    </Modal.Body>
                    <Modal.Footer>
                    <Button onClick={() => this.setState({ showModal: false })}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Row>
        )
    }
}