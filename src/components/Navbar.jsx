import { NavLink, Link } from "react-router-dom"
import style from '../Modules/Navbar.module.css'
import { useBudget } from "../contexts/PreferencesContext"
function NavBar() {
const {budget, toggleBudget, switchText} = useBudget();

    return (<div className={style.navbar}>
        <p>Mamma ho perso l’acquisto</p>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Products">Shop</NavLink>
            <NavLink to="/about">Chi siamo</NavLink>
            <button onClick={toggleBudget}>{switchText()}</button>
        </nav>
    </div>
    )
    
}
export default NavBar