import { Card, Typography, styled} from "@material-ui/core";

const MyCard =styled(Card)({
   backgroundColor:'blue',
   color:'#fff',
   width:'20%',
   height:'20%'
})
export const TestComponent =()=>{
   return <MyCard>
      <Typography variant="h6" component="div" >Card</Typography>      
   </MyCard>
}

   
