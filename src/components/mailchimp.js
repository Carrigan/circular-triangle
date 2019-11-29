import React from "react"

export default class Mailchimp extends React.Component {
    state = {
        emailAddress: "",
        firstName: "",
        lastName: ""
    }

    render() {
        return (
            <div className="container">
                <div className="row fill">
                    <div id="mc_embed_signup" className="fill">
                        <form
                            action="https://circulartriangle.us4.list-manage.com/subscribe/post?u=6e7952b94937d518df7a7269a&amp;id=2f7273c513"
                            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
                            target="_blank" novalidate>
                            <div id="mc_embed_signup_scroll">
                                <h2>Subscribe</h2>
                                <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                                    <div className="mc-field-group">
                                        <label for="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                                        <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" value={ this.state.emailAddress } onChange={ event => this.setState({ emailAddress: event.target.value })} />
                                    </div>

                                    <div className="mc-field-group">
                                        <label for="mce-FNAME">First Name </label>
                                        <input type="text" value="" name="FNAME" className="" id="mce-FNAME" value={ this.state.firstName } onChange={ event => this.setState({ firstName: event.target.value })}/>
                                    </div>

                                    <div className="mc-field-group">
                                        <label for="mce-LNAME">Last Name </label>
                                        <input type="text" value="" name="LNAME" className="" id="mce-LNAME" value={ this.state.lastName } onChange={ event => this.setState({ lastName: event.target.value })}/>
                                    </div>

                                    <div id="mce-responses" className="clear">
                                        <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                                        <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                                    </div>
                                    
                                    <div 
                                        style={{ position: 'absolute', left: -5000}} 
                                        aria-hidden="true"><input type="text"
                                        name="b_6e7952b94937d518df7a7269a_2f7273c513" 
                                        tabindex="-1" 
                                        value="" />
                                </div>

                                <div className="clear">
                                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
                <script
                    type='text/javascript'
                    dangerouslySetInnerHTML={{
                        __html: `(function ($) { window.fnames = new Array(); window.ftypes = new Array(); fnames[0] = 'EMAIL'; ftypes[0] = 'email'; fnames[1] = 'FNAME'; ftypes[1] = 'text'; fnames[2] = 'LNAME'; ftypes[2] = 'text'; fnames[3] = 'ADDRESS'; ftypes[3] = 'address'; fnames[4] = 'PHONE'; ftypes[4] = 'phone'; fnames[5] = 'BIRTHDAY'; ftypes[5] = 'birthday'; }(jQuery)); var $mcj = jQuery.noConflict(true);` 
                    }}
                />
            </div>
        );
    }
}
