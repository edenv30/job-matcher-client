import React, {Component} from 'react';
import BurgerMenu from 'react-burger-menu';
import './SideMenu.css';
import {Link} from 'react-router-dom';
import {getToken} from '../../utils/axios';
import jwt_decode from 'jwt-decode';

// class MenuWrap extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             hidden: false
//         };
//     }
//
//     // componentDidUpdate(nextProps) {
//     //     const sideChanged = this.props.children.props.right !== nextProps.children.props.right;
//     //
//     //     if (sideChanged) {
//     //         this.setState({hidden: true});
//     //
//     //         setTimeout(() => {
//     //             this.show();
//     //         }, this.props.wait);
//     //     }
//     // }
//
//     show() {
//         this.setState({hidden: false});
//     }
//
//     render() {
//         let style;
//
//         if (this.state.hidden) {
//             style = {display: 'none'};
//         }
//
//         return (
//             <div style={style} className={this.props.side}>
//                 {this.props.children}
//             </div>
//         );
//     }
// }

// class Demo extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             currentMenu: 'slide',
//             side: 'left'
//         };
//     }
//
//     changeMenu(menu) {
//         this.setState({currentMenu: menu});
//     }
//
//     changeSide(side) {
//         this.setState({side});
//     }
//
//     getItems() {
//         let items;
//
//         items = [
//             <a key="0" href=""><i className="fa fa-fw fa-star-o"/><span>Favorites</span></a>,
//             <a key="1" href=""><i className="fa fa-fw fa-bell-o"/><span>Alerts</span></a>,
//             <a key="2" href=""><i className="fa fa-fw fa-envelope-o"/><span>Messages</span></a>,
//             <a key="3" href=""><i className="fa fa-fw fa-comment-o"/><span>Comments</span></a>,
//             <a key="4" href=""><i className="fa fa-fw fa-bar-chart-o"/><span>Analytics</span></a>,
//             <a key="5" href=""><i className="fa fa-fw fa-newspaper-o"/><span>Reading List</span></a>
//         ];
//
//         // switch (this.props.menus[this.state.currentMenu].items) {
//         //   case 1:
//         //     items = [
//         //       <a key="0" href=""><i className="fa fa-fw fa-star-o" /><span>Favorites</span></a>,
//         //       <a key="1" href=""><i className="fa fa-fw fa-bell-o" /><span>Alerts</span></a>,
//         //       <a key="2" href=""><i className="fa fa-fw fa-envelope-o" /><span>Messages</span></a>,
//         //       <a key="3" href=""><i className="fa fa-fw fa-comment-o" /><span>Comments</span></a>,
//         //       <a key="4" href=""><i className="fa fa-fw fa-bar-chart-o" /><span>Analytics</span></a>,
//         //       <a key="5" href=""><i className="fa fa-fw fa-newspaper-o" /><span>Reading List</span></a>
//         //     ];
//         //     break;
//         //   case 2:
//         //     items = [
//         //       <h2 key="0"><i className="fa fa-fw fa-inbox fa-2x" /><span>Sidebar</span></h2>,
//         //       <a key="1" href=""><i className="fa fa-fw fa-database" /><span>Data Management</span></a>,
//         //       <a key="2" href=""><i className="fa fa-fw fa-map-marker" /><span>Location</span></a>,
//         //       <a key="3" href=""><i className="fa fa-fw fa-mortar-board" /><span>Study</span></a>,
//         //       <a key="4" href=""><i className="fa fa-fw fa-picture-o" /><span>Collections</span></a>,
//         //       <a key="5" href=""><i className="fa fa-fw fa-money" /><span>Credits</span></a>
//         //     ];
//         //     break;
//         //   default:
//         //     items = [
//         //       <a key="0" href=""><i className="fa fa-fw fa-star-o" /><span>Favorites</span></a>,
//         //       <a key="1" href=""><i className="fa fa-fw fa-bell-o" /><span>Alerts</span></a>,
//         //       <a key="2" href=""><i className="fa fa-fw fa-envelope-o" /><span>Messages</span></a>,
//         //       <a key="3" href=""><i className="fa fa-fw fa-comment-o" /><span>Comments</span></a>,
//         //       <a key="4" href=""><i className="fa fa-fw fa-bar-chart-o" /><span>Analytics</span></a>,
//         //       <a key="5" href=""><i className="fa fa-fw fa-newspaper-o" /><span>Reading List</span></a>
//         //     ];
//         // }
//
//         // Tal //
//
//         return items;
//     }
//
//     getMenu() {
//         const Menu = BurgerMenu[this.state.currentMenu];
//         const items = this.getItems();
//         let jsx;
//
//         if (this.state.side === 'right') {
//             jsx = (
//                 <MenuWrap wait={20} side={this.state.side}>
//                     <Menu id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}
//                           right>
//                         {items}
//                     </Menu>
//                 </MenuWrap>
//             );
//         } else {
//             jsx = (
//                 <MenuWrap wait={20}>
//                     <Menu id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
//                         {items}
//                     </Menu>
//                 </MenuWrap>
//             );
//         }
//
//         return jsx;
//     }
//
//     render() {
//         const buttons = Object.keys(this.props.menus).map((menu) => {
//             return (
//                 <a key={menu}
//                    className={classNames({'current-demo': menu === this.state.currentMenu})}
//                    onClick={this.changeMenu.bind(this, menu)}>
//                     {this.props.menus[menu].buttonText}
//                 </a>
//             );
//         });
//
//         return (
//             <div id="outer-container" style={{height: '100%'}}>
//                 {this.getMenu()}
//                 <main id="page-wrap">
//                     <h1><a href="https://github.com/negomi/react-burger-menu">react-burger-menu</a></h1>
//                     <a className={classNames({'side-button': true, 'left': true, 'active': this.state.side === 'left'})}
//                        onClick={this.changeSide.bind(this, 'left')}>Left</a>
//                     <a className={classNames({
//                         'side-button': true,
//                         'right': true,
//                         'active': this.state.side === 'right'
//                     })} onClick={this.changeSide.bind(this, 'right')}>Right</a>
//                     <h2 className="description">An off-canvas sidebar React component with a collection of effects and
//                         styles using CSS transitions and SVG path animations.</h2>
//                     <nav className="demo-buttons">
//                         {buttons}
//                     </nav>
//                     Inspired by <a href="https://github.com/codrops/OffCanvasMenuEffects">Off-Canvas Menu
//                     Effects</a> and <a href="https://github.com/codrops/SidebarTransitions">Sidebar Transitions</a> by
//                     Codrops
//                 </main>
//             </div>
//         );
//     }
// }

// const menus = {
//     slide: {buttonText: 'Slide', items: 1},
//     stack: {buttonText: 'Stack', items: 1},
//     elastic: {buttonText: 'Elastic', items: 1},
//     bubble: {buttonText: 'Bubble', items: 1},
//     push: {buttonText: 'Push', items: 1},
//     pushRotate: {buttonText: 'Push Rotate', items: 2},
//     scaleDown: {buttonText: 'Scale Down', items: 2},
//     scaleRotate: {buttonText: 'Scale Rotate', items: 2},
//     fallDown: {buttonText: 'Fall Down', items: 2},
//     reveal: {buttonText: 'Reveal', items: 1}
// };


const SIDE_MENU_ITEMS = {
    GUEST: [
        {link: (data) => '/', label: 'Home'},
        {link: (data) => '/about', label: 'About'},
        {link: (data) => '/instructions', label: 'Instructions'},
        {link: (data) => '/register', label: 'Register'},
        {link: (data) => '/signin', label: 'Sign In'},


    ],
    USER: [
        {link: (data) => '/', label: 'Home'},
        {link: (data) => '/about', label: 'About'},
        {link: (data) => '/instructions', label: 'Instructions'},
        {link: (data) => `/user/${data.id}`, label: 'User Page'},
        {link: (data) => '/jobs', label: 'Jobs'},
        {link: (data) => '/contact', label: 'Contact Us'},
        {link: (data) => '/logout', label: 'Log Out'},
    ]
};

class SideMenu extends Component {
    state = {
        isOpen: false
    };

    getUserType = () => {
        const token = getToken();
        if (token) {
            return 'USER';
        }

        return 'GUEST';
    };

    getUserWelcome = () => {
        const token = getToken();
        if (!token) {
            // return <Link to='/signin'>Login</Link>;
            return <label>Hello Guest! </label>
        }
        const data = jwt_decode(token);

        return (
            <div className="welcome-user">
                <label>hello {data.user.fullname}</label>
            </div>
        );
    };

    onMenuItemClick = () => {
        this.setState({isOpen: false});
    };

    getUserData = () => {
        const token = getToken();
        if(!token){
            return {};
        }

        return jwt_decode(token).user;
    };

    render() {
        const {isOpen} = this.state;
        const userType = this.getUserType();
        const userData = this.getUserData();
        const userWelcome = this.getUserWelcome();
        return <BurgerMenu.slide isOpen={isOpen}>
            {userWelcome}
            {
                SIDE_MENU_ITEMS[userType].map((item, index) => (
                    <Link onClick={this.onMenuItemClick} key={index} to={item.link(userData)}>{item.label}</Link>
                ))
            }
        </BurgerMenu.slide>
    }
}

export default SideMenu;