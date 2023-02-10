import React from "react";
import PropTypes from "prop-types";
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Toy = (props) => {
  let toy = props.data;
  return (
    <Box sx={{ width: '100%', maxWidth: 250 }}>
        <Typography variant="h6" gutterBottom> {toy.name}
        </Typography>
        <Typography variant="body2" gutterBottom>{toy.type}</Typography>
        <Typography variant="body2" gutterBottom>by: {toy.brand}</Typography>
        {/* <Typography variant="body1" gutterBottom> Owner: {toy.owner_first} {toy.owner_last}</Typography> */}
        {/* <Typography variant="body1" gutterBottom> Email: {toy.owner_email}</Typography> */}
        <img src={toy.imageurl} alt={toy.name} width="100" height="auto"></img>
        <Accordion sx={{ boxShadow: 0 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="body2">Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant="body1" color="text.secondary" gutterBottom> {toy.description}</Typography>
        </AccordionDetails>
        </Accordion>
    </Box>
    
  );
};

Toy.prototypes = {
  data: PropTypes.object,
};

export default Toy;
