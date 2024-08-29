
import { Center,
    ChakraProvider,
    Input, 
    Box
 } from "@chakra-ui/react"
import {ButtonComponent} from '../services/Button/ButtonComponent'
import { useState } from "react"


export function CardComponent() {
    const [name, setName] = useState<string>("");
    return(
        <ChakraProvider>      
        <Box minHeight = '100vh' background={"linear-gradient(to bottom, #000000, #434343)"} padding={"70px"} >
          <Center>
            <Box background={"#FFFF"} padding={"15px"} borderRadius={"15px"} width={"40%"}>
            <Box fontSize={"25px"} color={"#black"}>
            <center><strong>Faça login.</strong></center>
            </Box>
            <Box background={"#808080"} color={"black"} borderRadius={"25px"}>
            
              <Input placeholder="Insira nome." value={name} onChange={(e)=> setName(e.target.value)} _placeholder={{ color: "black", fontsize:"15px"} } />
              <Input placeholder="Insira seu email." _placeholder={{ color: "black", fontsize:"15px"}} />
              <Input placeholder="Digite sua senha" _placeholder={{color: "black", fontsize:"15px"}} />
            </Box>

            <ButtonComponent text="Enviar" event={() => window.alert(`Bem-vindo ao Bank ${name}`)}></ButtonComponent>
        
           
          </Box>
          </Center>      
        </Box>
      </ChakraProvider>
    )
}

export default CardComponent
