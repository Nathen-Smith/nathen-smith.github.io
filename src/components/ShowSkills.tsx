import React from 'react';
import { values } from './skills';
import '../scss/style.scss';
import { Container } from 'react-bootstrap';
import { InView } from 'react-intersection-observer';

const darkText = ["JavaScript & Node", "Python", "React.js", "C++"];

const textColor = (name: string) => {
  if (darkText.includes(name)) {
    return "font-semibold text-gray"
  }
  return "font-semibold text-white"
}

const ShowSkills = () => {
  return (
    <InView triggerOnce={true}>
      {({ ref, inView }) => (
        <Container ref={ref}>
          {values.map((value, i) =>
            <div key={i} className="skillbar">
              <div className="skillbar-title" style={inView ? value.active : value.before}>
                <span className={textColor(value.text)}>
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