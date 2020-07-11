import React, { Component } from 'react';
import { Card, Badge, Collapse } from 'react-bootstrap';
import ConditionalWrapper from './../common/conditionalWrapper';

class ProjectCard extends Component {
  state = {
    open: false
  };

  styles = {
    overflow: 'hidden',
    borderRadius: '24px'
  };

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { data } = this.props;
    return (
      <ConditionalWrapper
        condition={data.href}
        wrapper={children => (
          <a
            className="no-decoration"
            target="_blank"
            rel="noopener noreferrer"
            href={data.href}
          >
            {children}
          </a>
        )}
      >
        <Card
          style={this.styles}
          onMouseEnter={() => this.toggleOpen()}
          onMouseLeave={() => this.toggleOpen()}
          aria-expanded={this.state.open}
        >
          <Card.Img variant="top" src={data.imgSrc} />
          <Card.Body className="bg-nero">
            <p
              className={`text-center ${
                this.state.open ? 'active-link' : 'inactive-link'
              }`}
            >
              {data.title}
            </p>
            <Collapse in={this.state.open}>
              <Card.Text className="text-center">
                {data.tags.map((tag, index, { length }) => (
                  <React.Fragment key={index}>
                    <Badge variant="warning">{tag}</Badge>
                    {index !== length - 1 && <>&nbsp;</>}
                  </React.Fragment>
                ))}
              </Card.Text>
            </Collapse>
          </Card.Body>
        </Card>
      </ConditionalWrapper>
    );
  }
}

export default ProjectCard;
