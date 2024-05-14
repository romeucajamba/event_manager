import Icon from '../../public/Rectangle 592.png';
import { NavLink } from './navLink';

export function Header() {
    return(
        <header className='flex items-center gap-5'>

            <img src={Icon} alt="icon_yhanko" />

            <nav className='flex items-center gap-5 py-5'>   
                <NavLink href="/eventos">Eventos</NavLink>
                <NavLink href="/participantes">Participantes</NavLink>
            </nav>

        </header>
    )
}