import React, { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import { Button } from "../button/button2"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


export const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    const imageButton = () =>{
        if(theme === themes.dark){
            return(         
                <FontAwesomeIcon icon={faMoon} size="4x" style={{ color: 'yellow', background:'#000000' }} />
            )  
        }else if(theme === themes.light){
            return(
                <FontAwesomeIcon icon={faSun} size="4x" style={{ color: 'orange',}} />
            )     
        }
    }

    return (
        <div>
            <Button onClick={() => setTheme(theme === themes.dark ? themes.light : themes.dark)}>    
            {imageButton()}         
            </Button>
        </div>
    )
}
