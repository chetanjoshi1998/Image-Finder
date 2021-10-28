import {Card} from '@material-ui/core'





const Image =({image}) =>{
    return(<Card>
        <img src={image.largeImageURL} style={{width:'100%',height:'300px',objectFit:'cover'}}/>
    </Card>
        
    )
    

    
    
    
}
export default Image;