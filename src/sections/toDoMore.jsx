import './toDoMore.scss'

export default function ToDoMore() {
    return (
        <div className="to-do-more-container">
            <div className="to-do-header">
                <p className="to-do-title">To Do More On This Site</p>
            </div>
            <div className="to-do-content">
                <ul>
                    <li>
                        <span>Decorate more contents</span>
                    </li>
                    <li>
                        <span>Add Animation</span>
                    </li>
                    <li>
                        <span>Add more pages</span>
                    </li>
                    <li>
                        <span>Add more works</span>
                    </li>
                    <li>
                        Change Font
                    </li>
                </ul>
            </div>
        </div>
    )
}