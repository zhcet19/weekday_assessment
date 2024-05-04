import { Container, Grid } from '@mui/material';
import JobCard from '../JobCard/JobCard';


function Dashboard({  }) {
    
    const jobs = [
        {
          jobCompany : '',
    companyImage: '',
    jdLink : '', 
    jobDetailsFromCompany : '', 
    maxJdSalary : 0, 
    minJdSalary : 0, 
    salaryCurrencyCode : '', 
    location : '', 
    minExp : 0, 
    maxExp : 0, 
    jobRole : '' 
        },
        {
          jobCompany : '',
          companyImage: '',
          jdLink : '', 
          jobDetailsFromCompany : '', 
          maxJdSalary : 0, 
          minJdSalary : 0, 
          salaryCurrencyCode : '', 
          location : '', 
          minExp : 0, 
          maxExp : 0, 
          jobRole : '' 
          },
      ];
      
  return (
    
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {jobs.map((job, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <JobCard  index={index} job={job}/>
            </Grid>
          ))}
        </Grid>
      </Container>
   
  );
}

export default Dashboard;
