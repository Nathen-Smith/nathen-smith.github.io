import React from 'react';
import TrackVisibility from 'react-on-screen';
import { values } from './skills';
import '../scss/style.scss';
import { Container } from 'react-bootstrap';

const ShowSkills = () => {
  return (<div>{
  values.map((value, i) =>
    <TrackVisibility once key={i}>
    {
      ({isVisible}) => {
        return (
          <Container>
            <div className="skillbar">
              <div className="skillbar-title" style={isVisible ? value.active : value.before}>
                <span>
                  {value.text}
                </span>
              </div>
            </div>
          </Container>
        )
      }
    }
    </TrackVisibility>
    )}</div>)
}

export default ShowSkills;