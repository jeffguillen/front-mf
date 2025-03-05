
import Body from "componentes/Body";
import Footer from "componentes/Footer";
import Header from "componentes/Header";
import Nav from "componentes/Nav";

export default function Home(){

    return <div className="container-fluid c-princ">
            <Header></Header>
            <div className="row">
                <div className="col-md-2">
                <Nav />
                </div>
                <div className="col-md-10">
                    <Body></Body>
                    <Footer></Footer>
                </div>
               
            </div>
    </div>

}