import './header.scss'
export default function Header() {
  return (
    <header>
        <nav>
            <div className="logo">
                <img src="./images/logo.svg" alt=""/>
            </div>
            <div className="links">
                <ul>
                    <li><a href='#'>Features</a></li>
                    <li><a href='#'>Premium</a></li>
                    <li><a href='#'>Pricing</a></li>
                    <li><a href='#'>About</a></li>
                </ul>
                <img src="/images/point.svg" alt=""/>

                <a href='#'>Sign in</a>
                <a href='#' className="nav-button">Get Started</a>
            </div>
        </nav>
        <div className="header">
            <div className="title">
                <h1>Propel your business.</h1>
                <h2>Propel comes with everything you need to get your business rolling.</h2>
                <div class="button">
                    <button><a href='#'>Get Started</a></button>
                </div>
            </div>
        </div>
    </header>
  )
}
