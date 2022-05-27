import MyButton from '../component/button/button';
import './section_1.scss';
import bg from '../static/images/hero_image.jpg'
import gradient from '../static/images/Gradient_transition.png'


export default function FirstSection() {

    return (
        <section className="section-1">
            <div className="bg">
                <img className='bg-image' src={bg} alt="" />
                <div className="footer-gradient">
                    <img className='w-100' src={gradient} alt="" />
                </div>
            </div>
            <div className="header">
                {/* <div className="d-flex justify-content-end">
                    <MyButton text={"Menu"}></MyButton>
                </div> */}
            </div>
            <div className="description">
                <p className='name'>chanon eiemrod</p>
                <p className="job">Front-End Developer</p>
            </div>
            <div className="scroll-label-container">
                <p className="scroll-label">
                    scroll
                </p>
            </div>
        </section>
    )
}
