export default function MyCard({ cards }) {
    return (
        <div className="card-container">
            <div className="row">
                {
                    cards.map((card, index) => {
                        return (
                            <div className="col-12 col-md-6" key={`card-${index}`} id={index}>
                                {card}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}