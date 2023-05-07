import {MultiChatSocket,MultiChatWindow,useMultiChatLogic}from 'react-chat-engine-advanced'
const ChatsPage=(props)=>{
    const chatPromps = useMultiChatLogic('873d93a4-51a4-46d4-b435-e9707c78937f',props.user.username,props.user.secret);
    return (<div style = {{height:'100vh'}}>

    <MultiChatSocket{...chatPromps}/>
    <MultiChatWindow{...chatPromps} style ={{height:"100%"}}/>

    </div>
    )
}

export default ChatsPage