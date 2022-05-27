import './cardDescription.scss'

export default function CardDescription({additionClass,  children }) {
    return (
        <div className={`card-description ${additionClass}`}>
            {children}
        </div>
    )
}