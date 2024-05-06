import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, FormControlLabel, Switch, TextField, Grid, Box, Typography } from '@mui/material';

function Filter({ filter, setFilter, filterOptions }) {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter(prevFilter => ({ ...prevFilter, [name]: Array.isArray(value) ? value : [value] }));
  };

  const handleRemoteChange = (event) => {
    const value = event.target.value; 
    const isRemote = value === 1 ? true : false; 
  
    setFilter(prevFilter => ({
      ...prevFilter,
      isRemote: isRemote
    }));
  };

  const handleNumberInputChange = (event) => {
    const { name, value } = event.target;
    setFilter(prevFilter => ({ ...prevFilter, [name]: value === '' ? '' : Number(value) }));
  };

  return (
    <Grid container justifyContent="center">
      <Box sx={{ width: '80%', mt: 3, mb: 3 }}>
        <Typography sx={{mb:4}}>
            Search Jobs
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
              <InputLabel id="company-label">Company Name</InputLabel>
              <Select
                labelId="company-label"
                name="jobCompany"
                multiple
                value={filter.jobCompany}
                onChange={handleFilterChange}
                renderValue={(selected) => selected.join(', ')}
                style={{ textTransform: 'capitalize' }}
              >
                {filterOptions.jobCompany.map((loc, index) => (
                  <MenuItem key={index} value={loc}>
                    <Checkbox checked={filter.jobCompany.indexOf(loc) > -1} />
                    <ListItemText primary={loc} style={{ textTransform: 'capitalize' }} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
              <InputLabel id="location-label">Location</InputLabel>
              <Select
                labelId="location-label"
                name="location"
                multiple
                value={filter.location}
                onChange={handleFilterChange}
                renderValue={(selected) => selected.join(', ')}
                style={{ textTransform: 'capitalize' }}
              >
                {filterOptions.location.map((loc, index) => (
                  <MenuItem key={index} value={loc}>
                    <Checkbox checked={filter.location.indexOf(loc) > -1} />
                    <ListItemText primary={loc} style={{ textTransform: 'capitalize' }} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                name="role"
                multiple
                value={filter.role}
                onChange={handleFilterChange}
                renderValue={(selected) => selected.join(', ')}
                style={{ textTransform: 'capitalize' }}
              >
                {filterOptions.role.map((loc, index) => (
                  <MenuItem key={index} value={loc}>
                    <Checkbox checked={filter.role.indexOf(loc) > -1} />
                    <ListItemText primary={loc} style={{ textTransform: 'capitalize' }} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
          <InputLabel id="minExperience-label">Minimum Experience</InputLabel>
  <Select
    labelId="minExperience-label"
    id="minExperience"
    name="minExperience"
    value={filter.minExperience}
    onChange={handleNumberInputChange}
    fullWidth
  >
    {[...Array(7).keys()].map(year => (
      <MenuItem key={year} value={year}>{year}</MenuItem>
    ))}
  </Select>
  </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
  <InputLabel id="minSalary-label">Minimum Salary</InputLabel>
  <Select
    labelId="minSalary-label"
    id="minSalary"
    name="minSalary"
    value={filter.minSalary}
    onChange={handleNumberInputChange}
    fullWidth
  >
    {[...Array(5).keys()].map(salary => (
      <MenuItem key={salary} value={salary * 10}>{salary * 10}L</MenuItem>
    ))}
   
    
  </Select>
  </FormControl>
</Grid>
<Grid item xs={12} sm={6} md={4}>
  <FormControl fullWidth>
    <InputLabel id="remote-label">Remote</InputLabel>
    <Select
      labelId="remote-label"
      id="remote"
      name="remote"
      value={filter.isRemote ? 1 : 0}
      onChange={handleRemoteChange} 
      fullWidth
    >
      <MenuItem value={1}>Remote</MenuItem>
      <MenuItem value={0}>In-office</MenuItem>
    </Select>
  </FormControl>
</Grid>
        </Grid>
      </Box>
    </Grid>

  );
}

export default Filter;
