import React from 'react';
import ReactDOM from 'react-dom/client';
import MyCard from './MyCard';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='my-card-container'>
      <MyCard
        title="Card 1"
        description="This is a description!!"
        details='This is the detailed information! This is the detailed information! This is the detailed information!'
      />
      <MyCard
        title="Card 2"
        description="This is also a description ^^"
        details='This is the detailed information! This is the detailed information!'
      />
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(<App />);

export default App;
