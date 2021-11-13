import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {

    return (
        <ChatEngine
            height="100vh"
            projectID='a60477e4-d163-4af5-9de7-2bc9fe2cc6d2'
            userName='rui'
            userSecret='12345'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
};


export default App;