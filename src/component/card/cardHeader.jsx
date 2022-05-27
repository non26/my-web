import './cardHeader.scss'

export default function CardHeader({title}){
    return(
        <div className="card-header">
            <p className="card-title">{title}</p>
        </div>
    )
}