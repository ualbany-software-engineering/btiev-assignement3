import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"

function Home()
{
    return(
        <Container style={{textAlign: 'left'}}>
            <Container style={{backgroundColor: 'lightgray', textAlign: 'left'}}>
                <h5>Media Library</h5>
            </Container>
                <Container style={{display: 'flex'}}>
                <Image width={300} height={300} src="https://peach418.s3.amazonaws.com/Peach.jpg"/>
                <Container style={{padding: '.5rem', marginLeft: '.5rem'}}>
                    <h2>Peach Friend</h2>
                    <p>This lovely peach was picked from a house and had something special to show the people.</p>
                </Container>
            </Container>
        </Container>
    )
}
export default Home;