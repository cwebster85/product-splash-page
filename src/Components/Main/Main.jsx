/* eslint-disable react/no-unescaped-entities */
import '../Main/Main.css'

export default function Main() {
    
    return (
        <div className='main'>
            <div>
                <h2 className='title'>Beat Procrastination!</h2>
                <h4 className='callToAction'>REGISTER TODAY</h4>
                <p className='description'>We are all victim to it and can make us feel SUPER guilty! So what's the solution? The Procrastination Pill that's what! Register now to join a free webinar and learn more.</p>
            </div>
            <div className="form">
                <input type="firstName" placeholder='first name'/>
                <input type="email" placeholder='email'/>
                <button className='btn btn-primary'>REGISTER</button>
                <p className='disclaimer'>We'll never share your information without your permission</p>
            </div>
        </div>
    )
}
