
// Auth Client Utils



// Components

import Navbar from '../../components/Navbar/Navbar'
import ChatWindow from '../../components/Chat/ChatWindow';
import authClient from '../../ulit/auth/authClient';





// token here
const token = authClient.loggedIn() ? authClient.getToken() : null;
// if the log in is true then get the token from local Storage and if falsy
// we can direct the user the sign in page "/"

const Home = () => {

    return (
        <div>
            <Navbar />
            <ChatWindow />
        </div>
    )
}

export default Home;