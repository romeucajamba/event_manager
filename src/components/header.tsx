import Icon from '../../public/Rectangle 592.png';


export function Header() {
    return(
        <header>
            <img src={Icon} alt="icon_yhanko" />
            <nav>
                <ul>
                    <li>
                        <a href="http://" target="_blank">Events</a>
                    </li>
                    <li>
                        <a href="http://" target="_blank">Attendees</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}