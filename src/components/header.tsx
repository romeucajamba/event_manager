import Icon from '../../public/Rectangle 592.png';


export function Header() {
    return(
        <header className='flex items-center gap-5'>

            <img src={Icon} alt="icon_yhanko" />

            <nav className='flex items-center gap-5 py-5'>
                <a href="#" target="_blank" className='font-medium text-sm text-zinc-400'>Eventos</a>    
                <a href="#" target="_blank" className='font-medium text-sm'>Participantes</a>
            </nav>

        </header>
    )
}