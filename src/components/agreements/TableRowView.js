import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

function TableRowView(props) {

    let per = Number(props.percent); 
    let stakeAmount = props.amount * per / 100;

    const boolToText = (x) => {
        if (x) return 'Yes';
        return 'No';
    }

    return (
        <Card style={{ backgroundColor: 'aliceblue' }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title} {props.address.toLowerCase() === props.currentAdd.toLowerCase() && '(You)'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.address.slice(0, 10)}
                </Typography>
                <Typography gutterBottom variant="h6" component="h2">
                    Stake Amount
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary" >
                    {stakeAmount.toFixed(4)}  ({per}% of {props.amount} MATIC)
                </Typography>
                <Typography gutterBottom variant="h6" component="h2">
                    Stake
                </Typography>
                <Typography gutterBottom variant="body2" color={boolToText(props.staked) == 'No' ? 'text.danger' : 'text.success'}>
                    {boolToText(props.staked)}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default TableRowView