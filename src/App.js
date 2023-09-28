
import './style/App.css';


const link = '#';


function App() {
  return (
    <div className="App">
      <header>
        <nav>
            <div className="logo">
                <img src="./images/logo.svg" alt=""/>
            </div>
            <div className="links">
                <ul>
                    <li><a href={link}>Features</a></li>
                    <li><a href={link}>Premium</a></li>
                    <li><a href={link}>Pricing</a></li>
                    <li><a href={link}>About</a></li>
                </ul>
                <img src="/images/point.svg" alt=""/>

                <a href={link}>Sign in</a>
                <a href={link} className="nav-button">Get Started</a>
            </div>
        </nav>
        <div className="header">
            <div className="title">
                <h1>Propel your business.</h1>
                <h2>Propel comes with everything you need to get your business rolling.</h2>
                <div class="button">
                    <button><a href={link}>Get Started</a></button>
                </div>
            </div>
        </div>
    </header>
    
    <main>
        <div className="white-container">
            <div className="main-text">
                <p><b>Promoting your business and services with Propel:</b> A responsive, multi-page business template with everything you need propel your business.</p>
            </div>
            <div className="blocks">
                <div className="block">
                    <div class="pic">
                        <img src="./images/tea.png" alt=""/>
                    </div>
                    <div className="block-text">
                        <h2>Pro ad constituto</h2>
                        <p>Ne usu illud albucius abhor reant, partiendo scriptorem mel ne.</p>
                    </div>
                </div>
                <div className="block">
                    <div className="pic">
                        <img src="./images/sosage.png" alt=""/>
                    </div>
                    <div className="block-text">
                        <h2>Eam commodo</h2>
                        <p>Fuisset intellegat delicatissimi ex mea. Cu probo integre nec.</p>
                    </div>
                </div>
                <div className="block">
                    <div className="pic">
                        <img src="./images/kalendar.png" alt=""/>
                    </div>
                    <div className="block-text">
                        <h2>Reformidans eis</h2>
                        <p>Facer nostro causae ei sed. Vix ex quidam detraxit, vis ad nostro laoreet.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="eggs">
            <img src="./images/eggs.png" alt=""/>
        </div>
        <div className="more-about-us">
            <div className="text">
                <p><b>Illud decore voluptaria has at.</b> Hinc invenire atomorum no vel. Ut vis nullam blandit neglegentur, omittam perpetua voluptatum qui eu. Iusto laoreet suscipit vis ad, ad ferri tempor duo.</p>
                <div className="p-mini">
                    <p>More About Us</p>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="pomidors">
                <img src="./images/pomidors.png" alt=""/>
                <div className="text">
                    <div className="title">
                        <p><b>Ex tempor euismod sapientem ouis lexor pro.</b> Ad vix dicta iudico singulis, ius ex mollis veritus.</p>
                    </div>
                    <div className="p">
                        <p>Possit tritani consectetuer eu his, nusquam minimum ut per, eu eos ocurreret splendide hendrerit. Dicant placerat democritum eos id, sit mollis invidunt mediocritatem ei, ne fuisset dolores periculis sed.</p>
                    </div>
                </div>
            </div>
            <div className="ovsyanka">
                <div className="text">
                    <div className="title">
                        <p><b>Te elit antiopam vix zril recusabo ut pri.</b> Quas suscipit ad mea verear vivendo tincidunt.</p>
                    </div>
                    <div className="p">
                        <p>Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt.</p>
                    </div>
                </div>
                <img src="./images/ovsyanka.png" alt=""/>
            </div>
            <div className="premium">
                <h3>Wanna know more about the Premium deal?</h3>
                <p>See the full range of Premium</p>
            </div>
        </div>
        <div className="party-on">
            <div className="text">
                <div className="on">
                    <p>Party On</p>
                    <img src="./images/linee.png" alt=""/>
                </div>
                <p><b>Quas suscipit ad mea.</b> Pri cu dico labores officiis odio principes complectitur ad sea.</p>
            </div>
            <div className="button">
                <button><a href={link}>Get Started</a></button>
            </div>
        </div>
    </main>



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
    </div>
  );
}

export default App;
