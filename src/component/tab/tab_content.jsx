import './tab_content.scss'

export default function TabContent({ tabId, activeTabContent, children }) {
    return (
        <div className={`tab-content ${ activeTabContent === tabId? "show": ""}`} id={`content-${tabId}`} >
            {children}
        </div>
    )
}