import React from 'react'
import './LoginForm.css'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            maskStyle: {
                left: 512,
                right: 0
            }
        }

        this.maskRef = React.createRef()

        this.MoveRight = this.MoveRight.bind(this)
        this.MoveLeft = this.MoveLeft.bind(this)

    }
    componentDidMount() {
        // mask was in the left
        // clip-path: inset(0px 512px 0 0);

        // mask was in the right
        // clip-path: inset(0px 0 0 512px);



        // this.interval = setInterval(() => {
        //     let numLeft = this.state.maskStyle.left + 1
        //     let numRight = this.state.maskStyle.right -1

        //     this.setState({ maskStyle: { left: numLeft, right: numRight } })
        // }, 1000000000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);

    }

    

    MoveRight() {
        clearInterval(this.interval);

        let numLeft = 512
        let numRight = 0
        this.interval = setInterval(() => {
            numLeft = numLeft - 10
            numRight = numRight + 10
            if (numLeft < -10) {
                clearInterval(this.interval);
                return
            }

            this.setState({ maskStyle: { left: numLeft, right: numRight } })
        }, 5);
    }
    MoveLeft() {
        clearInterval(this.interval);

        let numLeft = 0
        let numRight = 512
        this.interval = setInterval(() => {
            numLeft = numLeft +10
            numRight = numRight - 10
            if (numRight < -10) {
                clearInterval(this.interval);
                return
            }

            this.setState({ maskStyle: { left: numLeft, right: numRight } })
        }, 5);
    }

    render() {
        const clipValue = `inset(0 ${this.state.maskStyle.left}px 0 ${this.state.maskStyle.right}px)`
        // const clipValue =  `inset(0 200px 0 200px)`

        return (
            <div className="container">
                <div className="card-container" ref={this.maskRef}
                    style={{ 'zIndex': '9999', 'clipPath': clipValue }}>
                    <div className=" left aqua">
                        <h1 className="card-header">Welcome Back</h1>
                        <button onClick={this.MoveRight}>submit</button>

                    </div>
                    <div className="center-empty"></div>
                    <div className="aqua  right">
                        <h1 className="card-header">Hello Friend</h1>
                        <button onClick={this.MoveLeft}>submit</button>
                    </div>
                </div>
                <div className="card-container" style={{'zIndex':this.state.maskStyle.right}}>
                    <div className="card left">
                        <h1 className="card-header">Create Account</h1>
                        <form className="card-content">
                            <div>
                                <label>Username</label>
                                <input type="text" placeholder="type in usename" />
                            </div>
                            <div>
                                <label>Password</label>
                                <input type="password" placeholder="type in usename" />
                            </div>
                        </form>
                    </div>
                    <div className="card-empty right">
                        {/* placeholder */}
                    </div>
                </div>
                <div className="card-container" style={{'zIndex':this.state.maskStyle.left}}>
                    <div className=" left card-empty">
                        {/* placeholder */}
                    </div>
                    <div className="card right">
                        <h1 className="card-header">Sign in to Diprella</h1>
                        <form className="card-content">
                            <div>
                                <label>Username</label>
                                <input type="text" placeholder="type in usename" />
                            </div>
                            <div>
                                <label>Password</label>
                                <input type="password" placeholder="type in usename" />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default LoginForm