import React, { Component } from 'react';
import './App.css';
import search from './search.svg';
import 'whatwg-fetch';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PictureGrid from './components/PictureGrid';

class App extends Component {
      constructor(props) {
        super(props);

        this.state = {
          images: [],
          query: '',
          position: '25vh',
          currentPage: 1,
          query_result: {}
        }

        this.fetchResult = this.fetchResult.bind(this);
      }

      fetchResult() {
        fetch(`https://api.pexels.com/v1/search?query=${this.state.query}+query&per_page=20&page=${this.state.currentPage}`,
          {
            headers: {
              'Authorization': `Bearer 563492ad6f917000010000014da165cecd0445eb8634ca17b09378e5`,
            }
          })
          .then(response=> response.json())
          .then(responseJson => {
              this.setState({ images: responseJson.photos }, () => {
              this.setState({ position: '0px' })
            })
            this.setState({ query_result: responseJson })
          })
          .catch(error => {
            console.log(error);
          })
      }
      componentDidMount(){
        
      }

      render() {
        return (
          
          <Container>
             <Row>
                <Col className="app-header">
                  Welcome to Picolo
                  </Col>
              </Row>
            <Row className="d-flex align-items-center justify-content-center flex-column">
             
              <Row>
                <Col className="my-5">
                
                  <div id="search_container" ref={this.searchContainer} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', top: this.state.position}}>
                    
                    <input 
                        type="text" 
                        className="searchInput" 
                        placeholder="Search (click icon to search)" 
                        value={this.state.query} 
                        onChange={(input) => {
                          this.setState({ query: input.target.value });
                          console.log(this.state.query)
                        }}
                        />
                        
                      <button className="searchButton btn btn-primary" onClick={this.fetchResult} onKeyPress={this.fetchResult} type="button" tabIndex={0}>
                        <img src={search} height="20"/>
                      </button>
                      
                  </div>
                </Col>
              </Row>
              <div id="#top"></div>
              {
                this.state.images.length > 0 && 
                <PictureGrid images={this.state.images} />
              }
              <Row className="my-5">
                { this.state.query_result.prev_page &&
                  <Col>
                    <a href="#top">
                      <button 
                        className="btn btn-primary" 
                        style={{ width: '100px'}}
                        onClick={() => {
                          this.setState({ currentPage: this.state.currentPage - 1 }, () => {
                            this.fetchResult();
                          })
                        }}>Previous</button>
                      </a>
                  </Col>
                }
                { this.state.query_result.next_page &&  
                  <Col>
                    <a href="#top">
                      <button 
                        className="btn btn-primary"
                        style={{ width: '100px'}}
                        onClick={() => {
                          this.setState({ currentPage: this.state.currentPage + 1}, () => {
                              this.fetchResult();
                          })
                        }}> Next </button>
                      </a>
                  </Col>
                }
                
              </Row>
            </Row>
          </Container>
        );
      }
    }

export default App;
