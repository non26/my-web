import './button.scss'

export default function MyButton({text, onEventClick}){
    return (
        <div className="btn-container" onClick={onEventClick}>
            <span className="my-btn">
                {text}
            </span>
        </div>
    )
}