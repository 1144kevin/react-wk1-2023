import Header from "../components/Header"
import Image from "../components/Image"
import Description from "../components/Description"
import Footer from "../components/Footer"
import images from "../json/images.json"
function Home() {
    return (
        <div className="container mainLayout">
            <Header
                className="layoutHeader"
                titie="Name"
                slogan="Slogan"
            />
            <Image
                images={images}
                className="layoutImage"
            />
            <Description className="layoutDescription" />
            <Footer className="layoutFooter" />
        </div>
    );
}

export default Home;