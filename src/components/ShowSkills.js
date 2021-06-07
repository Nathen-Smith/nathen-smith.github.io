import React from 'react';
import { values } from './skills';
import '../scss/style.scss';
import { Container } from 'react-bootstrap';
import { InView } from 'react-intersection-observer';

const ShowSkills = () => {
  return (
    <InView triggerOnce={true}>
      {({ ref, inView }) => (
        <Container ref={ref}>
          {values.map((value, i) =>
            <div key={i} className="skillbar">
              <div className="skillbar-title" style={inView ? value.active : value.before}>
                <span>
                  {value.text}
                </span>
              </div>
            </div>
          )}
        </Container>
      )}
    </InView>
  );
}

export default ShowSkills;