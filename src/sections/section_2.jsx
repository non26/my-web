import './section_2.scss';
import MyTab from '../component/tab/tab';
import {tabHeader_s_2} from '../data/tabHeader';
import {TabContent_Address, TabContent_Education, TabContent_Looking, TabContent_Skill} from '../data/tabContent_s_2'
import { useState } from 'react';

export default function SecondSection() {

    let tabContents = [<TabContent_Address/>, <TabContent_Education/>, <TabContent_Looking/>, <TabContent_Skill/>]

    return (
        <section className="section-2">
            <div className="content-container">
                <div className="header pb-4 d-flex justify-content-center">
                    <div className="header-title d-flex justify-content-center align-items-center">
                        ABOUT ME
                    </div>
                    <span className="d-flex justify-content-center align-items-center px-4">X</span>
                    <div className="header-description d-flex justify-content-center flex-column">
                        <p className="mb-0">
                            The about me section, telling me about who i am just a little,
                        </p>
                        <p className="mb-0">
                            For the rest, we need to talk.
                        </p>
                    </div>
                </div>
                <div className="content">
                    <MyTab key="my-tab-2" tabheaders={tabHeader_s_2} tabContents={tabContents} defaultTabIdHeader={tabHeader_s_2[0].nameId}>
                    </MyTab>
                </div>
            </div>
        </section>
    )
}
