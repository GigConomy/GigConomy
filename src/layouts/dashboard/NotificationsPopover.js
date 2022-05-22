import { faker } from "@faker-js/faker";
import PropTypes from "prop-types";
import { noCase } from "change-case";
import React, { useRef, useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { set, sub, formatDistanceToNow } from "date-fns";
// material
import { alpha } from "@mui/material/styles";
import {
  Box,
  List,
  Badge,
  Button,
  Avatar,
  Tooltip,
  Divider,
  IconButton,
  Typography,
  ListItemText,
  ListSubheader,
  ListItemAvatar,
  ListItemButton,
} from "@mui/material";
// utils
import { mockImgAvatar } from "../../utils/mockImages";
// components
import Iconify from "../../components/Iconify";
import Scrollbar from "../../components/Scrollbar";
import MenuPopover from "../../components/MenuPopover";
import { Web3ModalContext } from "../../context/Web3Modal";
import { NotificationContext } from "../../context/Notification";

// ----------------------------------------------------------------------

const NOTIFICATIONS = [
  {
    id: faker.datatype.uuid(),
    title: "Your order is placed",
    description: "waiting for shipping",
    avatar: null,
    type: "order_placed",
    createdAt: set(new Date(), { hours: 10, minutes: 30 }),
    isUnRead: true,
  },
  {
    id: faker.datatype.uuid(),
    title: faker.name.findName(),
    description: "answered to your comment on the Minimal",
    avatar: mockImgAvatar(2),
    type: "friend_interactive",
    createdAt: sub(new Date(), { hours: 3, minutes: 30 }),
    isUnRead: true,
  },
  {
    id: faker.datatype.uuid(),
    title: "You have new message",
    description: "5 unread messages",
    avatar: null,
    type: "chat_message",
    createdAt: sub(new Date(), { days: 1, hours: 3, minutes: 30 }),
    isUnRead: false,
  },
  {
    id: faker.datatype.uuid(),
    title: "You have new mail",
    description: "sent from Guido Padberg",
    avatar: null,
    type: "mail",
    createdAt: sub(new Date(), { days: 2, hours: 3, minutes: 30 }),
    isUnRead: false,
  },
  {
    id: faker.datatype.uuid(),
    title: "Delivery processing",
    description: "Your order is being shipped",
    avatar: null,
    type: "order_shipped",
    createdAt: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
    isUnRead: false,
  },
];

function renderContent(notification) {
  const title = (
    <Typography variant="subtitle2">
      {notification.title}
      <Typography
        component="span"
        variant="body2"
        sx={{ color: "text.secondary" }}
      >
        &nbsp; {noCase(notification.message)}
      </Typography>
    </Typography>
  );

  if (notification.type === "order_placed") {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="/static/icons/ic_notification_package.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === "order_shipped") {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="/static/icons/ic_notification_shipping.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === "mail") {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="/static/icons/ic_notification_mail.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === "chat_message") {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="/static/icons/ic_notification_chat.svg"
        />
      ),
      title,
    };
  }
  return {
    avatar: <img alt={notification.title} src={notification.avatar} />,
    title,
  };
}

NotificationItem.propTypes = {
  notification: PropTypes.object.isRequired,
};

function NotificationItem({ notification }) {
  const { avatar, title, message } = renderContent(notification);

  return (
    <ListItemButton
      to="#"
      disableGutters
      component={RouterLink}
      sx={{
        py: 1.5,
        px: 2.5,
        mt: "1px",
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: "background.neutral" }}>{avatar}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: "flex",
              alignItems: "center",
              color: "text.disabled",
            }}
          >
            {message}
          </Typography>
        }
      />
    </ListItemButton>
  );
}

export default function NotificationsPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const totalUnRead = notifications.filter(
    (item) => item.isUnRead === true
  ).length;
  const web3ModalContext = React.useContext(Web3ModalContext);
  const { account } = web3ModalContext;

  const notificationContext = React.useContext(NotificationContext);
  const { fetchNotifications, notificationItems, isUpdated } =
    notificationContext;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        isUnRead: false,
      }))
    );
  };

  useEffect(() => {
    // EPNS
    fetchNotifications(account);
  }, [account, isUpdated]);

  return (
    <>
      <IconButton
        ref={anchorRef}
        size="large"
        color={open ? "primary" : "default"}
        onClick={handleOpen}
        sx={{
          ...(open && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.focusOpacity
              ),
          }),
        }}
      >
        <Badge badgeContent={notificationItems.length} color="error">
          <Iconify icon="eva:bell-fill" width={20} height={20} />
        </Badge>
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 360 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">Notifications</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              You have {notificationItems.length} Notifications
            </Typography>
          </Box>

          {totalUnRead > 0 && (
            <Tooltip title=" Mark all as read">
              <IconButton color="primary" onClick={handleMarkAllAsRead}>
                <Iconify icon="eva:done-all-fill" width={20} height={20} />
              </IconButton>
            </Tooltip>
          )}
        </Box>

        <Divider />

        <Scrollbar style={{ height: "300px", overflow: "scroll" }}>
          <List
            disablePadding
            subheader={
              <ListSubheader
                disableSticky
                sx={{ py: 1, px: 2.5, typography: "overline" }}
              >
                New
              </ListSubheader>
            }
          >
            {notificationItems.length > 0 &&
              notificationItems.slice(0, 10).map((notifi, index) => (
                <NotificationItem
                  key={index}
                  notification={{
                    avatar: notifi?.image,
                    title: notifi?.notification.title,
                    message: notifi?.notification.body,
                  }}
                />
              ))}
          </List>

          {/* <List
                disablePadding
                subheader={
                  <ListSubheader
                    disableSticky
                    sx={{ py: 1, px: 2.5, typography: "overline" }}
                  >
                    Before that
                  </ListSubheader>
                }
              >
                {notifications.slice(2, 5).map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                  />
                ))}
              </List> */}
        </Scrollbar>

        <Divider />

        <Box sx={{ p: 1 }}>
          <Button fullWidth disableRipple component={RouterLink} to="#">
            View All
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}
