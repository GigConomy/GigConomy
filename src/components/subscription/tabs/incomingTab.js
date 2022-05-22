import {
  Box,
  Card,
  CircularProgress,
  Collapse,
  Divider,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Label from "src/components/Label";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import { Link as RouterLink, useNavigate } from "react-router-dom";

function IncomingTab() {
  const { Moralis, user } = useMoralis();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [subscribtions, setsubscribtions] = useState([]);
  const [isUpdated, setIsUpdated] = useState([]);
  const { fetch, data, error, isLoading } = useMoralisCloudFunction(
    "getSubscribtions",
    {
      autoFetch: true,
    }
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setData();
  }, [data, isUpdated, user]);

  //   useEffect(() => {
  //     listOutFlows();
  //   });

  async function setData() {
    setLoading(true);
    const subscribtionsdata = await JSON.parse(JSON.stringify(data));
    const s =
      data &&
      subscribtionsdata.filter(
        (sub) => sub?.username == user?.attributes.username
      );
    data && setsubscribtions(s);
    setLoading(false);
  }
 
  useEffect(() => {
    fetch();
  }, [isUpdated, user]);
  return (
    <Stack>
      <Card>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell ># </TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Subscribers</TableCell>
                <TableCell>Incomming Streams</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
                <TableCell>Explore</TableCell>
              </TableRow>
            </TableHead>
            {isLoading && (
              <TableRow>
                <TableCell colSpan={6} sx={{ textAlign: "center" }}>
                  <CircularProgress />
                </TableCell>
              </TableRow>
            )}
           
              {subscribtions && subscribtions.length == 0 && (
                <TableRow>
                  <TableCell colSpan={5} sx={{ textAlign: "center" }}>
                    <h5>No subscribtions created yet!</h5>
                  </TableCell>
                </TableRow>
              )}
          <TableBody>
              {subscribtions &&
                subscribtions.map((subscribe) => { 
                  return (
                    <TableBody>
                      <ToastContainer />
                      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                        <TableCell>
                          <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                          >
                            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                          </IconButton>
                        </TableCell>
                        <TableCell>{subscribe.title}</TableCell>
                        <TableCell>{subscribe.productorservice}</TableCell>
                        <TableCell> jdsjhsdffsd</TableCell>
                        <TableCell>
                          <Label variant="ghost" color="success">
                            Active
                          </Label>
                        </TableCell>
                        <TableCell>
                          <Stack direction="row">
                            <IconButton aria-label="delete">
                              <DeleteIcon />
                            </IconButton>
                            <Divider orientation="vertical" />
                            <IconButton aria-label="delete">
                              <EditIcon />
                            </IconButton>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          test
                          {/* <a
              href={`${POLYGON.blockExplorerUrls[0]}/address/${contractState.address}`}
              target="_blank"
              rel="noreferrer"
            > */}
                          {/* <OpenInNewIcon />
            </a> */}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          style={{ paddingBottom: 0, paddingTop: 0 }}
                          colSpan={6}
                        >
                          <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                              <Stack>
                                <Typography
                                  variant="h4"
                                  gutterBottom
                                  component="h2"
                                >
                                  Products / Services
                                </Typography>{" "}
                                <Typography
                                  variant="h6"
                                  gutterBottom
                                  component="h2"
                                >
                                  Packeges
                                </Typography>
                              </Stack>
                              <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={{ xs: 1, sm: 2, md: 3 }}
                                justifyContent="flex-start"
                              >
                                test
                              </Stack>
                            </Box>
                          </Collapse>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Stack>
  );
}

export default IncomingTab;
