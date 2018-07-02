import React, { Component, PropTypes } from 'react';
import onClickOutside from 'react-onclickoutside';


class Content extends Component {

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount () {
        window.removeEventListener("keydown", this.handleKeyDown);
    }
    handleClickOutside = () => {
        console.log("ddd");
    }
    handleKeyDown = (e) => {
        if(e.keyCode === 27) {
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
        const { children, active } = this.props;

        // if(hidden) return null;

        return (
            <Content eventTypes={["click", "touchend"]}>
                {children}
            </Content>
        )
    }
}

export default OutsideClickEvent;