import React, { useState, useEffect } from "react";
import { Grid, List, ListItem, ListItemText } from "@mui/material";
import { useMoralis, useMoralisQuery } from "react-moralis";
import moment from "moment";

function SendMessage(props) {
  const { Moralis, user } = useMoralis();
  const [message, setMessage] = useState("");
   
  useEffect(() => { 
  }, [ props]);
  return (
    <div>
      <List className={props.class.messageArea}>  
        {props.udata &&
          props.udata
            .sort((a, b) => (a.updatedAt < b.updatedAt ? -1 : 1))
            .map((msg) => {
              return (
                <ListItem key={msg.objectId}>
                  <Grid container>
                    <Grid item xs={12}>
                      <ListItemText
                        className={
                          id == msg.reciever && user.id == msg.sender.objectId
                            ? props.class.recieveMsgBox
                            : props.class.senderMsgBox
                        }
                        align={
                          id == msg.reciever && user.id == msg.sender.objectId
                            ? "right"
                            : "left"
                        }
                        primary={msg.text}
                      ></ListItemText>
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemText
                        align={
                          id == msg.reciever && user.id == msg.sender.objectId
                            ? "right"
                            : "left"
                        }
                        secondary={moment(msg.updatedAt).format("h:mm:ss a")}
                      ></ListItemText>
                    </Grid>
                  </Grid>
                </ListItem>
              );
            })}
      </List>
    </div>
  );
}

export default SendMessage;
