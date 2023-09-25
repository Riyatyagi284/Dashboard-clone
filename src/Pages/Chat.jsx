import React, { useState } from 'react'
import { CHATS } from '../assets/chats'
import UserChats from '../Component/UserChats'
import '../assets/css/Chats.css'
import { useNavigate, useParams } from 'react-router-dom'

const Chat = () => {
    const {userId}= useParams()
    const [selected,setSelected] = useState()
    let navigate = useNavigate()

    const chatClickHandler=(index)=>{
        setSelected(index)
        navigate("/chat/"+index)

    }

  return (
    <div className='p-4'>
        <div className='row gy-2'>
            <div className="left-box col-md-4 bg-white card text-gray">
                <div className='Container text-center p-3 border-bottom m-0'>
                    <h2>All Chats ({CHATS.length})</h2>
                </div>
                
                <div className='chats-box'>
                {
                    CHATS.map((chat,index)=>(
                        <div onClick={()=>chatClickHandler(index)} className={`chat-item border-bottom ${(selected==index) ? 'active-chat':''}  ${(index==2)?'chat-item-unread':''}`}>
                            <div className="row">
                                <div className="col-sm-10">
                                <h2 >{chat.user.name}</h2>
                                <p>{chat.messages[chat.messages.length-1].message}</p>
                                </div>
                                <div className="col-sm-2">
                                    <p className='fs-5'>{chat.messages[chat.messages.length-1].date}</p>
                                    {
                                        chat.status=='unread' && (<div className='red-circle'></div>)
                                    }
                                    
                                </div>
                            </div>


                        </div>
                    ))
                }
                </div>
            </div>
            <div className='col-md-8'>
                
                    <UserChats userId={userId} />

            </div>

        </div>
    </div>
  )
}

export default Chat