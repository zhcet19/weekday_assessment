import React from 'react';
import { Typography, Container, Button, Dialog, DialogTitle, DialogContent, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Bolt } from '@mui/icons-material'


function JobCard({ index, job }) {
  const { 
    jobCompany = '',
    companyImage= '',
    jdLink = '', 
    jobDetailsFromCompany = '', 
    maxJdSalary = 0, 
    minJdSalary = 0, 
    salaryCurrencyCode = '', 
    location = '', 
    minExp = 0, 
    maxExp = 0, 
    jobRole = '' 
  } = job;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container sx={{ 
      maxWidth: '100%',
      borderRadius: '20px', 
      boxShadow: '0 3px 10px 3px rgba(0, 0, 0, .1)',
      padding: '10px',
      backgroundColor: '#fff',
      marginTop: '20px',
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img src={companyImage} alt={jobCompany} style={{ width: '50px', height: 'auto', marginRight: '20px' }} />
        <Box>
          <Typography variant="h2" sx={{fontSize: '13px', fontWeight: '600', color: '#8b8b8b', marginBottom: '4px', textAlign:'left'}}>{jobCompany}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px', fontWeight: '400', color: '#8b8b8b', marginBottom: '4px',textAlign:'left'}}>
            <Typography variant="h3" sx={{fontSize: '14px', fontWeight: '400', color: '#8b8b8b', textTransform: 'capitalize',  textAlign:'left' }}>
              {jobRole}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '11px', fontWeight: '500', marginBottom: '4px'}}>
        
            <Typography variant="h3" sx={{fontSize: '11px', fontWeight: '500', textTransform: 'capitalize', marginLeft: '3px' }}>
              {location}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: '14px', fontWeight: '400', marginTop: '10px',textAlign:'left' }}>
        Estimated Salary: {salaryCurrencyCode === 'USD' ? '$' : salaryCurrencyCode} {minJdSalary ? `${minJdSalary}L - ` : ''}{maxJdSalary}L
      </Typography>
      <Typography variant="subtitle2" sx={{ fontSize: '16px', marginTop: '15px',fontWeight: '600' , textAlign:'left'}}>About Company:</Typography>
      <Typography variant="subtitle2" sx={{ fontSize: '16px',fontWeight: '400' , textAlign:'left'}}>About Us</Typography>
      <Typography variant="body2" sx={{ marginBottom: '30px', position: 'relative', overflow: 'hidden', maxHeight: '200px' , textAlign:'left'}}>
        {jobDetailsFromCompany.substring(0,300)}
        <Box sx={{ 
          position: 'absolute', 
          bottom: 0, 
          width: '100%', 
          height: '30px', 
          backgroundImage: 'linear-gradient(to top, white, transparent)' 
        }}/>
      </Typography>
      <Typography onClick={handleExpandClick} aria-expanded={expanded} sx={{ fontSize: '14px', cursor: 'pointer', marginBottom: '10px', color: '#4943da', textAlign: 'center', position: 'relative', top: '-20px'}}>
        View Job
      </Typography>
      <Dialog open={expanded} onClose={handleExpandClick}>
        <DialogTitle sx={{ textAlign: 'center'}}>Job Description</DialogTitle>
        <DialogContent>
          <Typography variant="body2">
            {jobDetailsFromCompany}
          </Typography>
        </DialogContent>
      </Dialog>
      {minExp === null && maxExp === null ? null :
        <><Typography variant="subtitle2" color="text.secondary" sx={{ marginTop: '10px',fontWeight: '600' , textAlign:'left'}}>Minimum Experience</Typography><Typography variant="subtitle2" color="text.secondary" sx={{ marginBottom: '10px', textAlign:'left' }}>
          { `${minExp} years`}
        </Typography></>
      }
      <Link to={jdLink} style={{ textDecoration: 'none' }}>
        <Button variant="contained" size="small" sx={{ color: '#000000', fontWeight: 600, backgroundColor: 'rgb(85, 239, 196)', '&:hover': { backgroundColor: 'rgb(75, 215, 174)' }, width: '100%', display: 'block', margin: '0 auto', padding: '10px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Bolt sx={{ color: 'yellow'}} /> Easy Apply
          </Box>
        </Button>
      </Link>
    </Container>
  );
}

export default JobCard;