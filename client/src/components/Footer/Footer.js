// importing styled components styling for Footer
import {
    FooterBar,
    CopyRight,
    TeamLink, 
    Link
} from './FooterStyles';
    
// Footer component
const Footer = () => {
return (
    <>
    <FooterBar>
        <CopyRight>
            &copy; 2021 - Copy Rights SABA Inc.
        </CopyRight>
        
    </FooterBar>
    </>
);
};

export default Footer;