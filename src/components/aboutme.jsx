import React from 'react';

const AboutMe = () => {
  return (
    <div className="row mb-5">
      <div className="col-md-8">
        <article>
          <h2 className="custom-h2 paragraphFirstLetter underline mb-4">
            Who I Am
          </h2>
          <p className="paragraphFirstLetter">
            I am a computer science graduate from UMass Lowell. I am passionate
            about full stack developement as well as strength training.
          </p>
        </article>
      </div>
      <div className="col-md-4">
        <div className="card border-xl">
          <img
            className="card-img-top border-xl"
            src={`${process.env.PUBLIC_URL}/images/me-cropped.jpg`}
            alt="me"
          />
          <div className="card-body mx-0 bg-bone">
            <small>
              <a
                className="link"
                href="mailto:victor_espaillat@student.uml.edu"
              >
                victor_espaillat@student.uml.edu
              </a>
            </small>
            <p>(978) 566 8344</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
