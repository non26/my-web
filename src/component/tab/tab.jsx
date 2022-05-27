import './tab.scss';
import TabContent from './tab_content';
import { useState, useRef, useEffect } from 'react';
/*
tabHeader = [
    {
        name:str,
        nameId:str,
        active:str?
    }
]
 */
export default function MyTab({ tabheaders, tabContents, defaultTabIdHeader, children }) {

    let [activeTabIdHeader, setActiveTabIdHeader] = useState(defaultTabIdHeader)
    let lineIndicator = useRef()

    useEffect(()=>{
        let activeHeader = document.getElementById(defaultTabIdHeader)
        let moveTo = _calTabLineIndicator(activeHeader.dataset.tab)
        lineIndicator.current.style.transform = `translateX(${moveTo}%)`
    }, [])

    function _calTabLineIndicator(data_tab){
        let moveDataTab = 100 * data_tab
        return moveDataTab
    }

    function _tabClickEvent(e) {
        console.dir(e.target)
        let headerId = e.target.id
        let dataTab = e.target.dataset.tab
        let moveTo = _calTabLineIndicator(dataTab)
        console.dir(lineIndicator.current)
        lineIndicator.current.style.transform = `translateX(${moveTo}%)`
        setActiveTabIdHeader(headerId)
    }

    return (
        <div className="tab-container">
            <div className="tab-header">
                <div className="row tab-row m-0">
                    {
                        tabheaders.map((header, index) => {
                            return (
                                <div data-tab={index}
                                    className={`col-3 tab-header-item ${activeTabIdHeader === header.nameId ? "active-tab" : ""}`}
                                    id={header.nameId}
                                    key={header.nameId}
                                    onClick={_tabClickEvent}>
                                    {header.name}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="tab-line-indicator" ref={lineIndicator}></div>
            </div>
            <div className="tab-content-container">
                {
                    tabContents.map((content, index) => {
                        const idHeader = tabheaders[index].nameId
                        return(
                            <TabContent tabId={idHeader} activeTabContent={activeTabIdHeader} key={`content-${idHeader}`}>
                                {content}
                            </TabContent>
                        )
                    })
                }
            </div>
        </div>
    )
}