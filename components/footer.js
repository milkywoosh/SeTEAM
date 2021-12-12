
import Link from "next/link"
import { Stack, Center } from "@chakra-ui/layout";



const Footer = (props) => {
    return (
        <>
            <Center>


                <Stack direction={'row'}
                    justifyContent={"space-evenly"}
                    spacing={"60px"}
                    id="footer"
                    margin={"auto"}>

                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="#">
                        <a>About</a>
                    </Link>
                    <Link href="#">
                        <a>Contact Us</a>
                    </Link>
                    <Link href="#">
                        <a>© 2021</a>
                    </Link>
                </Stack>
            </Center>

        </>
    );
};

export default Footer;