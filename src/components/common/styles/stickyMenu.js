import styled from 'styled-components'
import { colors } from '../elements/elements'

export const Styles = styled.div`
    .sticky-menu {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999;
        animation: 300ms ease-in-out 0s normal none 1 fadeInDown;
        background: #ffffff;
        height: 75px;
        padding-top: 8px;
        box-shadow:0 0 30px 0px #2222221a;


        .pxs-4
        {
            padding-left:2rem;
            padding:right:2rem;
        }
        .logo a > span {
            overflow: visible !important;
        }
        img.brandLogo {
            width: 120px;
            height: auto;
            min-width: 140px !important;
            min-height: 67px !important;
        }
         
        .logo {
            a {
                img.SU-logo {
                    @media(max-width: 1199px) {
                        max-width : 100%;
                       width:110px;
                    }
                    @media(min-width: 1200px) {
                        max-width : 100%;
                       width:110px;
                    }
                }
            }
        }
        li.nav-item.side-box {
            display: flex;
            align-items: center;
        }
        div.menu-box {
            ul.nav.menu-nav {
                li.nav-item {
                    position: relative;

                    a.nav-link {
                        color         : ${colors.black1};
                        font-size: 12px;
                        text-transform: uppercase;
                        font-weight: 500;
                        padding: 20px 7px 18px;

                        i {
                            font-size: 12px;
                        }

                        &:after {
                            content: none;
                        }

                        &:hover {
                            color: ${colors.green};
                        }

                        @media(max-width: 1199px) {
                            padding-left : 0;
                            padding-right: 8px;
                        }

                        @media(max-width: 991px) {
                            padding-right: 6px;
                        }
                    }

                    ul.dropdown {
                        position  : absolute;
                        left      : 0;
                        top       : 100%;
                        min-width : 190px;
                        background: #fff;
                        border    : 1px solid ${colors.border1};
                        text-align: left;
                        padding   : 0;
                        border-radius : 5px;
                        transition : 0.2s ease;
                        opacity         : 0;
                        transform       : scaleY(0);
                        visibility      : hidden;
                        z-index         : 999;
                        transform-origin: center top 0;

                        li.nav-item {
                            position: relative;

                            a.nav-link {
                                font-size     : 13px;
                                color         : ${colors.text1};
                                padding       : 10px 20px;
                                text-transform: capitalize;
                                font-weight   : 400;
                                margin-right  : 0;
                                border-bottom : 1px solid ${colors.border1};

                                &:hover {
                                    color: ${colors.green};

                                    i {
                                        color: #fff;
                                    }
                                }

                                i {
                                    float     : right;
                                    margin-top: 4px;
                                }
                            }

                            &:last-child {
                                margin-left: 0;

                                a.nav-link {
                                    border-bottom: none;
                                }
                            }

                            ul.dropdown2 {
                                position  : absolute;
                                top       : 0;
                                left      : 100%;
                                min-width : 180px;
                                background: #fff;
                                border    : 1px solid ${colors.border1};
                                transition : 0.2s ease;
                                opacity         : 0;
                                transform       : scaleY(0);
                                visibility      : hidden;
                                z-index         : 999;
                                transform-origin: center top 0;
                            }

                            &:hover {
                                ul.dropdown2 {
                                    opacity   : 1;
                                    transform : scaleY(1);
                                    visibility: visible;
                                }
                            }
                        }
                    }

                    &:hover {
                        ul.dropdown {
                            opacity   : 1;
                            transform : scaleY(1);
                            visibility: visible;
                        }
                    }
                }
            }

            .apply-btn {
             

                a {
                    font-size     : 13px;
                    color         : #ffffff;
                    background    : ${colors.gr_bg};
                    display       : inline-block;
                    width         : 110px;
                    height        : 40px;
                    text-align    : center;
                    text-transform: uppercase;
                    font-weight   : 500;
                    padding       : 11px;
                    border-radius :5px;
                    position: relative;

                    i {
                        position : absolute;
                        font-size: 20px;
                        left     : -40px;
                        top      : 0;
                        padding  : 10px;
                        width    : 40px;
                        height   : 100%;
                        border-radius : 5px 0 0 5px;
                        background-color:#d00000;
                    }

                    &:hover {
                        background: ${colors.gr_bg2};
                    }
                }

                @media(max-width: 1199px) {
                    margin-left: 45px;
                }

                @media(max-width: 991px) {
                    display : none;
                }
            }
        }
        @media(max-width: 767px) {
            display: none;
        }
    }
    .sticky-menu.sticky {
        display: block;
        
        @media(max-width: 767px) {
            display: none;

            
        .pxs-4
        {
            padding-left:0.5rem;
            padding:right:0.5rem;
        }

        }
    }
`
