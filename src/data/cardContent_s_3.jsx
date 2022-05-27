import CardDescription from '../component/card/cardDescription'
import CardHeader from '../component/card/cardHeader'
import CardBody from '../component/card/cardBody'

import './cardContent_s_3.scss'


export function Card_Naraya() {
    return (
        <CardDescription additionClass="naraya-container">
            <CardHeader title="Naraya"></CardHeader>
            <CardBody>
                <div className="result-link">
                    <a href="https://www.naraya.com/">
                        click to see Naraya
                    </a>
                </div>
            </CardBody>
        </CardDescription>
    )
}

export function Card_Ebook() {
    return (
        <CardDescription additionClass="ebook-container">
            <CardHeader title="Ebook"></CardHeader>
            <CardBody>
                <div className="result-link">
                    <a href="https://ebook.tmes-programs.com">
                        click to see Ebook-UAT
                    </a>
                </div>
            </CardBody>
        </CardDescription>
    )
}

export function Card_Others() {
    return (
        <CardDescription additionClass="other-container">
            <CardHeader title="Others"></CardHeader>
            <CardBody>
                <div className="result-link">
                    <a href="https://www.tanachira.co.th/">
                        click to see Tanachira
                    </a>
                </div>
                <div className="result-link">
                    <a href="https://www.foodguru.co.th/">
                        click to see Foodguru
                    </a>
                </div>
                <div className="result-link">
                    <a href="https://www.pos.tmes-programs.com">
                        click to see POS-UAT
                    </a>
                </div>
            </CardBody>
        </CardDescription>
    )
}

export function Card_Github() {
    return (
        <CardDescription additionClass="github-container">
            <CardHeader title="Github"></CardHeader>
            <CardBody>
                <div className="result-link">
                    <a href="https://github.com/non26">
                        go to my Github
                    </a>
                </div>
            </CardBody>
        </CardDescription>
    )
}