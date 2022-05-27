//// work expreriences
import { TabContent_shopee, TabContent_neilsen, TabContent_ssnc, TabContent_tmes } from '../data/tabContent_s_3'
import { Card_Naraya, Card_Ebook, Card_Others, Card_Github } from '../data/cardContent_s_3'
import { tabHeader_s_3 } from '../data/tabHeader'
import MyTab from '../component/tab/tab'
import MyCard from '../component/card/card'
import ToDoMore from './toDoMore'
import './section_3.scss'

////static
import bg from '../static/images/bg_s_3.png'


export default function ThirdSection() {

    const tabContents = [<TabContent_shopee />, <TabContent_neilsen />, <TabContent_ssnc />, <TabContent_tmes />]
    const cardContents = [<Card_Naraya />, <Card_Ebook />, <Card_Others />, <Card_Github />]

    return (
        <section className="section-3">
            <div className="bg">
                <img className='bg-image' src={bg} alt="" />
            </div>
            <div className="content-tab">
                <div className="content-container">
                    <div className="header pb-4 d-flex justify-content-center">
                        <div className="header-title d-flex justify-content-center align-items-center">
                            Experience
                        </div>
                        <span className="d-flex justify-content-center align-items-center px-4">X</span>
                        <div className="header-description d-flex justify-content-center flex-column">
                            <p className="mb-0">
                                The Experience section, tell about the job along the journey,
                            </p>
                            <p className="mb-0">
                                It mixes of happy and unhappy.
                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <MyTab key="my-tab-2" tabheaders={tabHeader_s_3} tabContents={tabContents} defaultTabIdHeader={tabHeader_s_3[3].nameId}></MyTab>
                    </div>
                </div>
            </div>
            <div className="content-results">
                <div className="results">
                    <div className="row m-0">
                        <div className="col-2 d-none d-md-block">

                        </div>
                        <div className="col-12 col-md-8">
                            <div className="result-header">
                                <p className='result-title P-0 mb-1'>Accomplishment</p>
                                <p className="result-sub-title">
                                    SEE WHAT I DID AND GONNA DO
                                </p>
                            </div>
                            <div className="result-card">
                                <MyCard cards={cardContents}></MyCard>
                            </div>
                        </div>
                        <div className="col-2 d-none d-md-block">

                        </div>
                    </div>
                </div>
            </div>
            <div className="content-to-do-more">
                <ToDoMore />
            </div>
        </section>
    )
}