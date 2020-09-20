import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ml_label_pos = {
  position: 'absolute',
  transform: 'translate(-50%, 100%)'
};

const lifts = [
  { name: 'Bench Press', pr: 250, milestones: [315, 405] },
  { name: 'Deadlift', pr: 410, milestones: [495, 585] },
  { name: 'Squat', pr: 315, milestones: [405, 495] },
  { name: 'Overhead Press', pr: 170, milestones: [185, 225] }
];

const strengthTraining = () => {
  return (
    <Row>
      <Col md="12" className="text-center mb-5">
        <h2 className="bold paragraphFirstLetter underline mb-4">Personal One-Rep-Max Records and Goals</h2>
      </Col>
      {lifts.map(({ name, pr, milestones }, index) => {
        const max = milestones[1];
        const pr_percent = (pr / max) * 100;
        return (
          <Col key={index} md="12" className="mb-12 mb-5">
            <div className="text-center bold">{name}</div>
            <div className="progress bg-white" style={{overflow: 'visible', height: '40px', position: 'relative' }}>
              {milestones.map((ml, index) => {
                const ml_percent = (ml / max) * 100;
                return (
                  <React.Fragment key={index}>
                    <div
                      className="progress-bar bg-white"
                      role="progressbar"
                      style={{
                        borderRight: '2px solid black',
                        height: '100%',
                        position: 'absolute',
                        width: `${ml_percent}%`,
                        zIndex: 10 - (index + 1)
                      }}
                      aria-valuenow={ml_percent}
                      aria-valuemin="0"
                      aria-valuemax={max}
                    ></div>
                    <div
                      style={{
                        ...ml_label_pos,
                        left: `${ml_percent}%`,
                        lineHeight: '2.5rem',
                        height: '100%',
                        zIndex: 100,
                        fontWeight: 'bold',
                        fontSize: '20px',
                        overflow: 'visible'
                      }}
                    >
                      {ml}
                    </div>
                  </React.Fragment>
                );
              })}
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: `${pr_percent}%`, zIndex: 10, fontSize: '20px', fontWeight: 'bold' }}
                aria-valuenow={pr_percent}
                aria-valuemin="0"
                aria-valuemax={milestones[1]}
              >
                {pr} lbs
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default strengthTraining;
