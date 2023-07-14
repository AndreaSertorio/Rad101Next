// components/Message.jsx
import { Card } from 'antd';

const Message = ({ role, content }) => {
  return (
    <Card style={{ margin: '10px', textAlign: role === 'ai' ? 'left' : 'right' }}>
      {content}
    </Card>
  );
};

export default Message;
