import { Box } from '@mui/material'
import Session1 from '../../components/HomeSessions/Session1';
import Session2 from '../../components/HomeSessions/Session2';
import Session3 from '../../components/HomeSessions/Session3';
import Session4 from '../../components/HomeSessions/Session4';
import Session5 from '../../components/HomeSessions/Session5';


const Home = () => {
    return (
        <Box sx={{ paddingTop: '109px'}}>            
            <Session1 />
            <Session2 />
            <Session3 />
            <Session4 />
            <Session5 />
        </Box>
    );
}

export default Home;