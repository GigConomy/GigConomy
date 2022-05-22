import {
  Avatar,
  Divider,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";

function ChatUserList(props) {
  const { Moralis, user } = useMoralis();
  const [chatList, setChatList] = useState([]);

  const ChatHistory = Moralis.Object.extend("ChatHistory");
  const chatQuery = new Moralis.Query(ChatHistory);
  const data = JSON.parse(JSON.stringify(props));

  useEffect(async () => {
    chatQuery.equalTo("owner",user?.id);
    const dd = await chatQuery.find();
    const ddata = JSON.parse(JSON.stringify(dd));
    setChatList(ddata);
  }, [props]);
  return (
    <div>
      {chatList.map((e) => { 
        return (
          <>
          <ListItem button key={e.id} onClick={() => props.handleList(e.users[0].objectId)}>
            <ListItemIcon>
              <Avatar
                alt={ e.users[0].username}
                src=""
              />
            </ListItemIcon>
            <ListItemText primary={ e.users[0].username.slice(0,16)}>
              { e.users[0].username.slice(0,20)}
            </ListItemText>
            {/* <ListItemText secondary="online" align="right"></ListItemText> */}
          </ListItem>
          <Divider />
          </>
        );
      })}
    </div>
  );
}

export default ChatUserList;
