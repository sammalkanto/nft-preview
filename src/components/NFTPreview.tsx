import equilibriumImg from '../assets/image-equilibrium.jpg';
import viewIcon from '../assets/icon-view.svg';
import ethIcon from '../assets/icon-ethereum.svg';
import clockIcon from '../assets/icon-clock.svg';
import avatarImg from '../assets/image-avatar.png';

export default function NFTPreview() {
    return(
        <div className="card">
            <div className="media">
                <div className='hover'>
                    <img src={viewIcon}/>
                </div>
                <img src={equilibriumImg}/>
            </div>
            <h2 className="title">
                Equilibrium #3429
            </h2>
            <p className="description">Our Equilibrium collection promotes balance and calm.</p>
            <div className="info">
                <div className="currency">
                    <img src={ethIcon}/>
                    <span className="amount">0.041 ETH</span>
                </div>
                <div className="time">
                    <img src={clockIcon}/>
                    <span className='amount'>3 days left</span>
                </div>
            </div>
            <div className='divider'/>
            <div className="author">
                <img src={avatarImg}/>
                <div>
                    {'Creation of '}
                    <a className="name">Jules Wyvern</a>
                </div>
            </div>
        </div>
    );
}