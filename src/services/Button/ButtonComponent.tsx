interface IButton{
    text: string,
    event: ()=>void;
}

import { Button,
    Center} from "@chakra-ui/react";



export const ButtonComponent = ({text, event}:IButton)=>{
    return(
        <Center>
            <Button onClick={event} 
            colorScheme="teal" 
            size="sm" 
            width={"40%"} 
            marginTop={"15px"}>{text}</Button>
        </Center>
        
    )
}

export default ButtonComponent;