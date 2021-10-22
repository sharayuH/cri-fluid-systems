import React from 'react';
import Flexbox from 'flexbox-react';
import './homepage.css';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


export default function HomePage() {

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 1,
            }}
        />
    );

    return (

        <Box className="main-body">

            {/* logo */}
            <div class="center-image">
                <img src="./asserts/logo.png"></img>
            </div>

            <Grid className="grid-class" lg={12} item container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>

                <Grid className="trophygrid" item lg={4} sm={12} xs={12} align="center">
                <img src="./asserts/1.png" className="trophy" style={{height: "90vh"}} fluid ></img>
                </Grid>

                <Grid className="prizegrid" item lg={8} sm={12} xs={12} align="left">
                <div class="heading">
                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
                </div>
                <ul class="points">
                    <li>
                        C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                    </li>
                    <li>
                        C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. 
                    </li>
                </ul>
                <img src="./asserts/2.png" className="award" style={{height: "60%"}} fluid ></img>
                </Grid>

                <Grid item container lg={12} sm={12} xs={12} align="center">
                INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING
                OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
                </Grid>

                <Grid item container lg={12} sm={12} xs={12} align="center">
                <div class="machine" style={{paddingBottom: "0px"}}>
                <img class="machine" src="./asserts/3.png"></img>
                </div>
                </Grid>

                <Grid item container lg={12} sm={12} xs={12} align="center" className="text-center">
                <grid-item> Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </grid-item>
                </Grid>

            </Grid>

            {/* Installed.. Text */}
            {/* <div class="text-center" style={{backgroundColor: "red"}}>
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING
            OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
            </div> */}
            
            {/* Machines Photo */}


            {/* Valves.. Text */}
            {/* <div class="text-center" style={{backgroundColor: "yellow"}}>
                Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
            </div> */}
                
            {/* Red Line */}
            <ColoredLine color="#ec3237" />

            {/* C.R.I. FLUID SYSTEMS.. Text */}
            <div class="text-center bold" font-weight="bold" style={{textAlign: 'center'}}>
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
            </div>

            {/* Installed.. Text */}
            <div class="text-center">
            CHEMICALS & PROCESS <span>|</span> POWER WATER & WASTE <span>|</span> WATER OILS & GAS <span>|</span> PHARMA <span>|</span> SUGARS <span>|</span> & DISTILLERIES <span>|</span> PAPER & PULP MARINE
            & DEFENCE <span>|</span> METAL & MINING <span>|</span> FOOD & BEVERAGE <span>|</span> PETROCHEMICAL & REFINERIES <span>|</span> SOLAR <span>|</span> BUILDING <span>|</span> HVAC <span>|</span> FIRE FIGHTING <span>|</span> AGRICULTURE & RESIDENTIAL
            </div>


        </Box>

        

    ); // return
} // Header