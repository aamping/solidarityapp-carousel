import React, { Component } from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';
import data from '../data/data.json';

class CarouselScreen extends Component {
  state = {
    index: 0,
    direction: null,
  };

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  renderDescription(indexNGO) {
    const ngo = data.organizations[indexNGO];
    return (
      <div>
        <h2 className="carousel-description-title">{ngo.name}</h2>
        <div className="carousel-description-text">{ngo.description}</div>
        <div>
          <a href={ngo.link}>Ver más</a>
        </div>
      </div>
    );
  }

  render() {
    const { index, direction } = this.state;
    const { organizations, creator } = data;
    return (
      <div>
        <Carousel
          defaultActiveIndex={0}
          indicators={false}
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect.bind(this)}
        >
          {organizations.map((value, index) => (
            <Carousel.Item key={value.name} className="carousel-item1" style={value.style}>
              <img
                alt=""
                className="carousel-creator"
                style={creator.style}
                width={creator.width}
                height={creator.height}
                src={creator.img}
              />
              <Carousel.Caption className="carousel-creator-title">
                <h2>{creator.name}</h2>
              </Carousel.Caption>
              <Carousel.Caption className="carousel-background-title">
                <h4>{value.name}</h4>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        {this.renderDescription(this.state.index)}
      </div>
    );
  }
}

export default CarouselScreen;
