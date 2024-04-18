import React, { useState } from 'react';
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { Box } from '@mui/material';

interface Message {
 type: string;
 text: string;
}

const ChatComponent = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState('');

    const sendMessage = async () => {
        if (inputText.trim()) {
            const userMessage = { type: 'assistant', text: "I'm currently available on <a href='https://mariano-cv.zapier.app' target='_blank'>https://mariano-cv.zapier.app</a>" };
            //setMessages((prevMessages) => [...prevMessages, userMessage]);
            setMessages(() => [userMessage]);
            try {
                const response = await axios.post('/api/chat', { message: inputText });
                const botMessage = { type: 'bot', text: response.data.answer };
                setMessages((prevMessages) => [...prevMessages, botMessage]);
            } catch (error) {
                console.error('Chat error:', error);
            }
            setInputText('');
        }
    };

    return (
        <Paper sx={{ position: 'fixed', bottom: 20, right: 20, width: 300, maxHeight: 400, overflow: 'auto' }}>
            <List sx={{ maxHeight: 300, overflow: 'auto' }}>
                {messages.map((msg, index) => (
                    <ListItem key={index} sx={{ backgroundColor: msg.type === 'user' ? '#e1f5fe' : '#fffde7', mb: 0.5 }}>
                        <ListItemText
                            primary={
                                <span dangerouslySetInnerHTML={{ __html: msg.text }} />
                            }
                        />
                    </ListItem>
                ))}
            </List>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: 1,
                    py: 0.5,
                }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Available soon..."
                    inputProps={{ 'aria-label': 'type your message' }}
                    disabled={false}
                    value={inputText}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
                    onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && sendMessage()}
                />
                <IconButton sx={{ p: '10px' }} aria-label="send" onClick={sendMessage} disabled={false}>
                    <SendIcon />
                </IconButton>
            </Box>
        </Paper>
    );
};

export default ChatComponent;
