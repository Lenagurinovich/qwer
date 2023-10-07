import './footer.scss'

export default function Footer() {
  return (
    <footer>
        <div className="footer">
            <div className="left">
                <img src="./images/logo.svg" alt=""/>
                <p>© 2018 Spoon Inc, All rights reserved.</p>
            </div>
            <div className="right">
                <ul>
                    <li>Features</li>
                    <li>Premium</li>
                    <li>Pricing</li>
                </ul>
                <ul>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
                <ul className="ul">
                    <li>Image License Info</li>
                    <li>Powered by Webflow</li>
                </ul>
                <div className="soc">
                    <img src="./images/soc.png" alt=""/>
                </div>
            </div>
        </div>
    </footer>
  )
}
