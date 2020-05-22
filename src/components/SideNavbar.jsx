import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    sideBarContainer: {
        margin: theme.spacing(0),
        padding: theme.spacing(0),
        border: 0
    },
    sideBar: {
        backgroundColor: '#2F3136',
        position: 'relative',
        minHeight: 0,
        overflowX: 'hidden',
    }
}));

export default function Explore () {
        const classes = useStyles();
        return (
            <React.Fragment>
                <Container maxWidth={"lg"}>
                    <Grid container spacing={0}>
                        <Grid item xs={2}>
                            <div className={classes.root}>
                                <div className={classes.sideBar}>
                                    <h2 className="discoverHeader-1TWTqG base-1x0h_U size24-RIRrxO">Discover</h2>
                                    <div
                                        className="categoryItem-3zFJns container-2Pjhx- selected-aXhQR6 selectedCategoryItem-3X8ujp"
                                        role="listitem" tabIndex="0">
                                        <div className="itemInner-3gVXMG layout-2DM8Md wrappedLayout-3DR7Pk">
                                            <div className="avatar-3uk_u9">
                                                <svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
                                                    <path fill="currentColor"
    d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"/>
                                                </svg>
                                            </div>
                                            <div className="content-3QAtGj">
                                                <div className="nameAndDecorators-5FJ2dg">
                                                    <div className="name-uJV0GL wrappedName-26qVtL">Home</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*<section className="panels-j1Uci_" aria-label="User area">*/}
                            {/*    <div className="container-3baos1">*/}
                            {/*        <div className="avatarWrapper-2yR4wp focusable-1YV_-H" aria-controls="popout_1"*/}
                            {/*             aria-expanded="false" aria-label="Set Status" role="button" tabIndex="0">*/}
                            {/*            <div className="avatar-SmRMf2 wrapper-3t9DeA" role="img"*/}
                            {/*                 aria-label="agsdws, Online" aria-hidden="false"*/}
                            {/*                 style={{width: '32px', height: '32px'}}>*/}
                            {/*                <svg width="40" height="32" viewBox="0 0 40 32"*/}
                            {/*                     className="mask-1l8v16 svg-2V3M55" aria-hidden="true">*/}
                            {/*                    <mask id="f7f75a3c-af5d-419f-ae95-30ca7cac0c26" width="32" height="32">*/}
                            {/*                        <circle cx="16" cy="16" r="16" fill="white"/>*/}
                            {/*                        <rect color="black" x="19" y="19" width="16" height="16" rx="8"*/}
                            {/*                              ry="8"/>*/}
                            {/*                    </mask>*/}
                            {/*                    <foreignObject x="0" y="0" width="32" height="32"*/}
                            {/*                                   mask="url(#f7f75a3c-af5d-419f-ae95-30ca7cac0c26)"><img*/}
                            {/*                        src="/assets/1cbd08c76f8af6dddce02c5138971129.png" alt=" "*/}
                            {/*                        className="avatar-VxgULZ" aria-hidden="true"/></foreignObject>*/}
                            {/*                    <svg x="14.5" y="17" width="25" height="15" viewBox="0 0 25 15">*/}
                            {/*                        <mask id="a16088bb-5720-4d92-8db6-f74cbb983878">*/}
                            {/*                            <rect x="7.5" y="5" width="10" height="10" rx="5" ry="5"*/}
                            {/*                                  fill="white"/>*/}
                            {/*                            <rect x="12.5" y="10" width="0" height="0" rx="0" ry="0"*/}
                            {/*                                  fill="black"/>*/}
                            {/*                            /!*                                                    <polygon points="-2.16506,-2.5 2.16506,0 -2.16506,2.5"*!/*/}
                            {/*                            /!*fill="black" transform="scale(0) translate(13.125 10)"*!/*/}
                            {/*                            /!*style="transform-origin: 13.125px 10px;"/>*!/*/}
                            {/*                            <circle fill="black" cx="12.5" cy="10" r="0"/>*/}
                            {/*                        </mask>*/}
                            {/*                        <rect fill="rgba(67, 181, 129, 1)" width="25" height="15"*/}
                            {/*                              mask="url(#a16088bb-5720-4d92-8db6-f74cbb983878)"/>*/}
                            {/*                    </svg>*/}
                            {/*                    <rect x="22" y="22" width="10" height="10" fill="transparent"*/}
                            {/*                          aria-hidden="true" className="pointerEvents-2zdfdO"/>*/}
                            {/*                </svg>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className="nameTag-3uD-yy canCopy-2VBT7N focusable-1YV_-H"*/}
                            {/*             aria-label="Click to copy username" role="button" tabIndex="0">*/}
                            {/*            <div className="colorStandard-2KCXvj size14-e6ZScH usernameContainer-1fp4nu">*/}
                            {/*                <div className="size14-e6ZScH title-eS5yk3">agsdws</div>*/}
                            {/*            </div>*/}
                            {/*            <div className="size12-3cLvbJ subtext-3CDbHg">#6704</div>*/}
                            {/*        </div>*/}
                            {/*        <div*/}
                            {/*            className="flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignStretch-DpGPf3 noWrap-3jynv6"*/}
                            {/*            style={{flex: '0 1 auto'}}>*/}
                            {/*            <button aria-label="Mute" role="switch" aria-checked="false" type="button"*/}
                            {/*                    className="button-14-BFJ enabled-2cQ-u7 button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN">*/}
                            {/*                <div className="contents-18-Yxp">*/}
                            {/*                    <svg aria-hidden="false" width="20" height="20" viewBox="0 0 24 24">*/}
                            {/*                        <path fill-rule="evenodd" clip-rule="evenodd"*/}
                            {/*                              d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z"*/}
                            {/*                              fill="currentColor"/>*/}
                            {/*                        <path fill-rule="evenodd" clip-rule="evenodd"*/}
                            {/*                              d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z"*/}
                            {/*                              fill="currentColor"/>*/}
                            {/*                    </svg>*/}
                            {/*                </div>*/}
                            {/*            </button>*/}
                            {/*            <button aria-label="Deafen" role="switch" aria-checked="false" type="button"*/}
                            {/*                    className="button-14-BFJ enabled-2cQ-u7 button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN">*/}
                            {/*                <div className="contents-18-Yxp">*/}
                            {/*                    <svg aria-hidden="false" width="20" height="20" viewBox="0 0 24 24">*/}
                            {/*                        <svg width="24" height="24" viewBox="0 0 24 24">*/}
                            {/*                            <path*/}
                            {/*                                d="M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z"*/}
                            {/*                                fill="currentColor"/>*/}
                            {/*                        </svg>*/}
                            {/*                    </svg>*/}
                            {/*                </div>*/}
                            {/*            </button>*/}
                            {/*            <button aria-label="User Settings" type="button"*/}
                            {/*                    className="button-14-BFJ enabled-2cQ-u7 button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN">*/}
                            {/*                <div className="contents-18-Yxp">*/}
                            {/*                    <svg aria-hidden="false" width="20" height="20" viewBox="0 0 24 24">*/}
                            {/*                        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"*/}
                            {/*                              d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"/>*/}
                            {/*                    </svg>*/}
                            {/*                </div>*/}
                            {/*            </button>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</section>*/}
                        </Grid>
                        <Grid item xs={10}>
                            Content
                        </Grid>
                    </Grid>
                </Container>
            </React.Fragment>
        );
}