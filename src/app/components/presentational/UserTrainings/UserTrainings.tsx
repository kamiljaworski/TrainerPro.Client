import React, { useState } from 'react'
import UserTrainingsProps from './UserTrainingsProps'
import { Paper, Tabs, Tab, Container, AppBar } from '@material-ui/core';
import TrainingsAndMealsForDay from './TrainingsAndMealsForDay/TrainingsAndMealsForDay';
import Days from '../../../../shared-js/enums/Days';
import { dayToNumber, numberToDay } from '../../../helpers/DaysHelper';

const UserTrainings: React.FC<UserTrainingsProps> = ({ user }) => {
    const [selectedDay, setSelectedDay] = useState(dayToNumber(Days.Monday));
    const [isExpandedTrainings, setIsExpandedTrainings] = useState(false);
    const [isExpandedMeals, setIsExpandedMeals] = useState(false);

    const days = Object.values(Days).filter(value => typeof value === 'string') as string[];

    const handleChange = (event: any, newValue: number) => {
        setSelectedDay(newValue);
    };

    return (
        <Container maxWidth="lg" style={{ marginTop: 50 }}>
            <Paper square>
                <AppBar position="static" color="secondary">
                    <Tabs
                        value={selectedDay}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        centered
                    >
                        {days.map(x =>
                            <Tab label={x} key={x} />
                        )}
                    </Tabs>
                </AppBar>
                {days.map(x =>
                    x === numberToDay(selectedDay).toString() &&
                    <TrainingsAndMealsForDay
                        day={x as Days}
                        isExpandedTrainings={isExpandedTrainings}
                        setIsExpandedTrainings={setIsExpandedTrainings}
                        isExpandedMeals={isExpandedMeals}
                        setIsExpandedMeals={setIsExpandedMeals}
                        key={x}
                    />
                )}
            </Paper>
        </Container>
    )
}

export default UserTrainings
