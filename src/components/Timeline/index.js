import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'
import './Timeline.styl'

const timelineItems = [
  {
    type: 'work',
    date: 'May 2018 - August 2019',
    style: { background: 'rgb(33, 150, 243)' },
    position_degree: 'API Developer, PEY',
    employer_school: 'ecobee',
    description: '',
    icon: <div className="timeline-ecobee-logo" />,
  },
  {
    type: 'work',
    date: 'Summer of 2017',
    style: { background: 'rgb(33, 150, 243)' },
    position_degree: 'Software Engineering Intern',
    employer_school: 'MeazureUp',
    description: '',
    icon: <div />,
  },
  {
    type: 'education',
    style: { background: 'rgb(33, 150, 243)' },
    position_degree: 'BSc Computer Science',
    employer_school: 'University of Toronto',
    date: 'September 2015 - Current, Graduating: April 2020',
    description: '',
    icon: <div />,
  },
]

const makeTimelineElement = timelineItem => {
  const {
    type,
    date,
    style,
    position_degree,
    employer_school,
    icon,
    description,
  } = timelineItem
  return (
    <VerticalTimelineElement
      className={`vertical-timeline-element--${type}`}
      date={date}
      iconStyle={style}
      icon={icon}
    >
      <h3 className="vertical-timeline-element-title">{position_degree}</h3>
      <br />
      <h4 className="vertical-timeline-element-subtitle">{employer_school}</h4>
      <p>{description}</p>
    </VerticalTimelineElement>
  )
}

const Timeline = () => (
  <div className="timeline">
    <VerticalTimeline>
      {timelineItems.map(makeTimelineElement)}
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        // icon={<StarIcon />}
      />
    </VerticalTimeline>
  </div>
)

export default Timeline
