import { useState } from 'react';

import data from './data.json';
import Card from './components/UI/Card';
import ProfileCard from './components/Profile/ProfileCard';
import Container from './components/UI/Container';
import { Work, Play, Study, Exercise, Social, SelfCare } from './images/index';
import './App.css';
const imgArr = [Work, Play, Study, Exercise, Social, SelfCare];

const App = () => {
  const [time, setTime] = useState('daily');
  const setDayHandler = () => {
    setTime('daily');
  };
  const setWeekHandler = () => {
    setTime('weekly');
  };
  const setMonthHandler = () => {
    setTime('monthly');
  };
  return (
    <Container>
      <ProfileCard
        active={time}
        day={setDayHandler}
        week={setWeekHandler}
        month={setMonthHandler}
      />
      {data.map((act, i) => {
        return (
          <Card
            bgColor={act.title.replace(/ /g, '')}
            key={i}
            bgImg={imgArr[i]}
            activity={act.title}
            moment={
              time === 'daily' ? 'Day' : time === 'weekly' ? 'Week' : 'Month'
            }
            time={act.timeframes[time].current}
            week={act.timeframes[time].previous}
          />
        );
      })}
    </Container>
  );
};

export default App;
