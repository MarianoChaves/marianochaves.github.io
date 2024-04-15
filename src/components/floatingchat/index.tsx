import { useState } from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChatComponent from '../chat';

interface FloatingChatProps {
  avatar_url: string; // Adjust the type as necessary
 }

const FloatingChat = (props: FloatingChatProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
  
    const toggleChat = () => setIsOpen(!isOpen);
    const minimizeChat = () => setIsMinimized(!isMinimized);
  
    const avatar_url = props.avatar_url;

    return (
      <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
        {!isOpen ? (
          <IconButton onClick={toggleChat} color="primary">
            <ChatIcon />
          </IconButton>
        ) : (
          <Paper elevation={3} style={{ width: 300, height: isMinimized ? 50 : 400, transition: 'height 0.3s' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px' }}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <img src={avatar_url} alt="Avatar" style={{ width: 30, height: 30, borderRadius: '50%', marginRight: 8 }} />
                Ask about me!
              </span>
              <div>
                <IconButton onClick={minimizeChat}>
                  {isMinimized ? <ExpandMoreIcon /> : <MinimizeIcon />}
                </IconButton>
                <IconButton onClick={toggleChat}>
                  <CloseIcon />
                </IconButton>
              </div>
            </div>
            {!isMinimized && (
              <div style={{ height: 'calc(100% - 48px)', overflow: 'auto' }}>
                <ChatComponent />
              </div>
            )}
          </Paper>
        )}
      </div>
    );    
  };
  
  export default FloatingChat;