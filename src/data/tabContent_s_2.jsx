import TabContentDescription from './tabContent'
import './tabContent_s_2.scss'

export function TabContent_Address() {
    return (
        <TabContentDescription>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="phone">
                        <span className='phone-title'>Phone :</span><p>0988327674</p>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="email">
                        <span className='email-title'>Email :</span><p><a href="mailto:eiemrodc@gmail.com">eiemrodc@gmail.com</a></p>
                    </div>
                </div>
            </div>

            <div className="address">
                <span className='adress-title'>Address :</span><p>481/1 Samakee Rd., Tatai SubDistr,. Mueng Distr, Nonthaburi, 11000</p>
            </div>
        </TabContentDescription>
    )
}

export function TabContent_Education() {
    return (
        <TabContentDescription>
            <div className="uni">
                <div className="uni-header">
                    <p className='uni-title'>EDUCATION</p>
                </div>
                <div className="uni-content">
                    <p>THAMMASAT UNIVERSITY (2016-2019)</p>
                    <ul>
                        <li>
                            BACHELOR'S DEGREE OF SCIENCE
                        </li>
                        <li>
                            STUDIED MATHEMATICS PROGRAM
                        </li>
                        <li>
                            GPA 2.92
                        </li>
                    </ul>
                </div>
            </div>
            <div className="project">
                <div className="project-header">
                    <p className="project-title">
                        SENIOR PROJECT
                    </p>
                </div>
                <div className="project-content">
                    <p className='mb-0'>On the Diophantine Equation  p^x + (p+12)^y = z^2 </p>
                    <p>where p and p+12 are prime number</p>
                </div>
            </div>
        </TabContentDescription>
    )
}

export function TabContent_Looking() {
    return (
        <TabContentDescription>
            <div className="looking-place">
                <div className="looking-palce-header">
                    <p className="looking-place-title">
                    &gt; What I'm looking for work place &lt;
                    </p>
                </div>
                <div className="looking-place-content">
                    <p>
                        what I'm looking for is a job that works as hybrid work place,
                    </p>
                    <p>
                        I find myself comfortable with not going to office 5 days/week in BKK.
                    </p>
                </div>
            </div>
            <div className="looking-job">
                <div className="looking-job-header">
                    <p className="looking-job-title">
                    &gt; Wat I'm looking for job &lt;
                    </p>
                </div>
                <div className="looking-job-content">
                    <p>
                        my job priority for seaching is that I'm gonna focus on
                        <ul>
                            <li>
                                Front-end
                            </li>
                            <li>
                                Full-Stack
                            </li>
                        </ul>
                    </p>
                </div>
            </div>


        </TabContentDescription>
    )
}

export function TabContent_Skill() {
    return (
        <TabContentDescription>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="lang">
                        <div className="lang-header">
                            <p className="lang-title">
                                LANGUAGE
                            </p>
                        </div>
                        <div className="lang-content">
                            <p>English
                                <ul>
                                    <li>Listening</li>
                                    <li>Speaking</li>
                                    <li>Reading</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="skill">
                        <div className="skill-header">
                            <p className="skill-title">
                                SKILL
                            </p>
                        </div>
                        <div className="skill-content">
                            <ul>
                                <li>
                                    Mathematics
                                </li>
                                <li>
                                    Python
                                </li>
                                <li>
                                    SQL
                                </li>
                                <li>
                                    HTML
                                </li>
                                <li>
                                    Javascript
                                </li>
                                <li>
                                    React
                                </li>
                                <li>
                                    CSS family
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </TabContentDescription>
    )
}