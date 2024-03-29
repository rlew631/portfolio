import React from 'react';
import icons from './icons.json'

interface SVGProp {
    SVGData: string
}

function Chevron(props: SVGProp){
    return(
        <svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            style={{margin: 10}}
        >
            <path d={props.SVGData} fill="#FFF" />
        </svg>
    )
}
interface SocialProp {
    SVGData: string,
    url : string,
}

function Socials(props:SocialProp){
    return(
        <li>
            <a
                href={props.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="ico-circle">
                    <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{margin: "2px 5px 5px"}}
                    >
                        <path d={props.SVGData}/>
                    </svg>
                </span>
            </a>
        </li>
    )
}

class Footer extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', () => {
            const footer = document.querySelector('.footer-animated');
            if (window.pageYOffset > 100) {
                footer.classList.remove('fadeOut');
                // footer.style.display = 'block';
                footer.classList.add('fadeIn');
            } else {
                // footer.style.display = 'hidden';
                footer.classList.remove('fadeIn');
                footer.classList.add('fadeOut');
            }
        });
    }
    
    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    render(){
        return(
            <div className="footer footer-animated fadeOut" style={{zIndex: 20}}>
                <div>
                    <a href="#" className="back-to-top" onClick={this.scrollToTop}>
                        <Chevron SVGData= {icons.chevronSVG}/>
                    </a>
                </div>
                <div className="socials">
                    <ul>
                        <Socials SVGData={icons.youtubeSVG} url="https://www.youtube.com/channel/UCL4U7uB704X1u2oZwXxSBDw"/>
                        <Socials SVGData={icons.githubSVG} url="https://github.com/rlew631"/>
                        <Socials SVGData={icons.linkedinSVG} url="https://www.linkedin.com/in/rlew631/"/>
                    </ul>
                </div>
            </div>
            
        );
    }
}

export default Footer;