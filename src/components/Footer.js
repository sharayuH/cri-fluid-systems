import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import  ReactDOM  from  'react-dom';
import {SocialMediaIconsReact} from 'social-media-icons-react';

export default function Footer() {
  return (
    <footer>
      <Box
      width="100%"
        // px={{ xs: 3, sm: 2 }}
        // py={{ xs: 5, sm: 3 }}
        bgcolor="#ec3237"
        color="white"
        // marginTop= "10px"
      >
        <Container maxWidth="lg">
          <Grid container spacing={10}>
            <Grid item xs={12} sm={4}>
              <Box marginLeft="50px">
              {/* <SocialMediaIconsReact borderColor="transparent" roundness="20px"
                icon="phone" iconColor="#ec3237" backgroundColor="white"
                phone="1800 200 1234" size="16" />
                  <span> </span> */}
                Toll free 1800 200 1234
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box href="www.facebook.com/cripumps" target="_blank" marginLeft="50px">
                {/* <SocialMediaIconsReact borderColor="transparent" roundness="20px"
                icon="facebook" iconColor="#ec3237" backgroundColor="white"
                url="https://www.facebook.com/cripumps" size="16" />
                  <span> </span> */}
                  www.facebook.com/cripumps</Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box href="www.crigroups.com" target="_blank" marginLeft="50px">
              {/* <SocialMediaIconsReact borderColor="transparent" roundness="20px"
                icon="web" iconColor="#ec3237" backgroundColor="white"
                url="https://www.crigroups.com" size="16" />
                  <span> </span> */}
              {/* <img src={"http://s.cdpn.io/3/kiwi.svg"}/> */}
                www.crigroups.com</Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}