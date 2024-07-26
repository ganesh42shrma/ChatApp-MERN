
const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img alt="Tailwind css chat Bubble Component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
            </div>
        </div>
        <div className={`chat-bubble bg-green-600`}>Hi ! What is upp?</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:51</div>
    </div>
  )
}

export default Message;