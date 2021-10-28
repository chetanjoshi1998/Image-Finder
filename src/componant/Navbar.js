import { AppBar,Toolbar, Typography} from "@material-ui/core";
import CollectionsIcon from "@material-ui/icons/Collections"
import './Navbar.css'






const Navbar=() =>{
    return (
        <AppBar style={{position:'static'}}>
            <Toolbar className='nav'>
                <CollectionsIcon/>
                <Typography variant='h5' style={{marginLeft:'10px'}}>Image Finder</Typography>

            </Toolbar>
        </AppBar>

    )
};
export default Navbar;