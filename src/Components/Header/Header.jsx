import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";

const Header = () => {
     const {user, onCLose} = useTelegram() 

    return(
        <div className={'header'}>
            <Button onClick={onCLose}>Закрыть</Button>
            <span className={'username'}> 
                {user?.username}
            </span>
        </div>
    )
}

export default Header;