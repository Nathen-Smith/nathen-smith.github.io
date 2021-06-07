import React from 'react';
import { values } from './skills';
import '../scss/style.scss';
import { Container } from 'react-bootstrap';
import { InView } from 'react-intersection-observer';

const ShowSkills = () => {
  return (<div>{
  values.map((value, i) =>
    <InView triggerOnce={true} key={i}>
      {({ ref, inView }) => (
        <Container ref={ref}>
          <div className="skillbar">
            <div className="skillbar-title" style={inView ? value.active : value.before}>
              <span>
                {value.text}
              </span>
            </div>
          </div>
        </Container>
      )}
    </InView>
  )}</div>);
}

export default ShowSkills;