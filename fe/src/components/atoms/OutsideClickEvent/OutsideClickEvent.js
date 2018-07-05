import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';


class Content extends Component {

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount () {
        window.removeEventListener("keydown", this.handleKeyDown);
    }
    handleClickOutside = () => {
        this.props.eventHandel();
    }
    handleKeyDown = (e) => {
        if(e.keyCode === 27) {
            this.props.eventHandel();
        }
    }

    render() {
        const { children } = this.props;
        return children;
    }
}

Content = onClickOutside(Content);

class OutsideClickEvent extends Component {
    render() {
        const { children, active, eventHandel } = this.props;

        let response = children;

        if(active){
            response = (
                <Content eventTypes={["click", "touchend"]} eventHandel={eventHandel}>
                    {children}
                </Content>
            )
        }

        return response;
    }
}

export default OutsideClickEvent;