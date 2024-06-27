import Logo from "../../assets/logo1.png"
import { Header } from "./styles"

const HeaderComponent = () =>{
    return(
        <Header>
            <div><img src={Logo} alt=""/></div>
            <div><h1>Loja Virtual</h1></div>
        </Header>
    )
}

export default HeaderComponent