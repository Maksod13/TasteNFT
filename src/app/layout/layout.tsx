import './layout.scss'
import { HeaderComponent } from '../../widgets/header/header'
import { FooterComponent } from '../../widgets/footer/footer'

export const Layout = () => {
    return (
        <div className=' layout__wrapper'>
            <HeaderComponent />
            <main className='layout__content'></main>
            <FooterComponent />
        </div>
    )
}

