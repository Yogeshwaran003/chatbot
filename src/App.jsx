import React from 'react'
// import Signin from './components/Signin.jsx'
import Chatbox from './pages/Chatbox.jsx'
// import HistoryBar from './components/HistroyBar.jsx'
function App() {
  return (
  <>
  <Chatbox />
  {/* <HistoryBar onSelectChat={(chatId) => console.log(`Selected chat ID: ${chatId}`)} /> */}
  </>    
  )
}

export default App
