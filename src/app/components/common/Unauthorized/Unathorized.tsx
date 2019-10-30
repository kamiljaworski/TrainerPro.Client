import React from 'react';
import { Typography } from '@material-ui/core';

const Unathorized: React.FC = () => {
    return (
        <div>
            <Typography variant="h2" color="secondary" align="center">
                You don't have access to this page
            </Typography>
        </div>
    )
}

export default Unathorized;
