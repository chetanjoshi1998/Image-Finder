import { Box, TextField } from '@material-ui/core';
import "./Breadcrumb.css"




const Breadcrumb = ({onTextChange,onCountChange}) =>{
   return(
       <Box style={{backgroundColor:'#f6f6f6'}}>
           <TextField 
           label="Search images"
           onChange = { (e) => {onTextChange(e.target.value) }
            }/>
           <TextField style={{marginLeft:'15px'}}
          label="Number of images" 
          onChange=
          { (e) => {onCountChange(e.target.value);
            }  }
          />
       </Box>
   )
   

}
export default Breadcrumb;