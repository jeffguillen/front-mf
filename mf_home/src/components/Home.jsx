
import Body from "componentes/Body";
import Footer from "componentes/Footer";
import Header from "componentes/Header";
import Nav from "componentes/Nav";

import { FaAlignJustify } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";



export default function Home(){



    function toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('collapsed');
    }

    return <div className="d-flex">
                <nav className="sidebar d-flex flex-column flex-shrink-0 position-fixed">
                        <button className="toggle-btn" onClick={toggleSidebar}>
                        <FaArrowLeft />
                        </button>
                        <Nav></Nav>
                </nav>

                <main className="main-content">
                    <div className="container-fluid">
                        <div className="header_dash">
                            <Header></Header>
                        </div>
                        <div className="body_dash">
                            <Body></Body>
                        </div>
                        <div className="footer_dash">
                            <Footer />
                        </div>
                    </div>
                </main>

            </div>

}