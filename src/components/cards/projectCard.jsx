import React, { Component } from 'react';
import { Card, Badge, Collapse } from 'react-bootstrap';
import ConditionalWrapper from './../common/conditionalWrapper';

class ProjectCard extends Component {
  state = {
    open: false
  };

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { item } = this.props;
    return (
      <ConditionalWrapper
        condition={item.href}
        wrapper={children => (
          <a
            className="no-decoration"
            target="_blank"
            rel="noopener noreferrer"
            href={item.href}
          >
            {children}
          </a>
        )}
      >
        <Card
          onMouseEnter={() => this.toggleOpen()}
          onMouseLeave={() => this.toggleOpen()}
          aria-expanded={this.state.open}
        >
          <Card.Img variant="top" src={item.imgSrc} />
          <Card.Body className="bg-nero">
            <p
              className={`text-center ${
                this.state.open ? 'active-link' : 'inactive-link'
              }`}
            >
              {item.title}
            </p>
            <Collapse in={this.state.open}>
              <Card.Text id="collapse-text">{item.desc}</Card.Text>
            </Collapse>

            <Card.Text className="text-center">
              {item.tags.map((tag, index) => (
                <React.Fragment key={index}>
                  <Badge variant="warning">{tag}</Badge>&nbsp;
                </React.Fragment>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>
      </ConditionalWrapper>
    );
  }
}

export default ProjectCard;
