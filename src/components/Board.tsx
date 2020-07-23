import React from 'react';
import './Board.scss'

function Board() {
    return (

    <div className="table">
        <div className="board">
            <div className="center">
                <div className="community-chest-deck">
                    <h2 className="label">Community Chest</h2>
                    <div className="deck"></div>
                </div>
                <h1 className="title"></h1>
                <button className="vertical-center">Roll Dice</button>
                <div className="chance-deck">
                    <h2 className="label">Chance</h2>
                    <div className="deck"></div>
                </div>
            </div>

            <div className="space corner go">
                <div className="container">
                    <div className="instructions">Collect $200.00 salary as you go</div>
                        <div className="go-word">Go!</div>
                </div>
                <div className="arrow fa fa-long-arrow-left"></div>
            </div>

            <div className="row horizontal-row bottom-row">
                <div className="space property">
                    <div className="container">
                        <div className="color-bar light-blue"></div>
                        <div className="name">Vermont Avenue</div>
                        <div className="price">Price $60</div>
                    </div>
                </div>
                <div className="space property">
                    <div className="container">
                        <div className="color-bar light-blue"></div>
                        <div className="name">Massachusetts Avenue</div>
                        <div className="price">Price $100</div>
                    </div>
                </div>
                <div className="space chance">
                    <div className="container">
                        <div className="name">Chance</div>
                        <i className="drawing fa fa-question"></i>
                    </div>
                </div>
                    <div className="space property">
                        <div className="container">
                            <div className="color-bar light-blue"></div>
                            <div className="name">Vermont Avenue</div>
                            <div className="price">Price $100</div>
                        </div>
                    </div>
                    <div className="space railroad">
                        <div className="container">
                            <div className="name">Connecticut Railroad</div>
                            <i className="drawing fa fa-subway"></i>
                            <div className="price">Price $120</div>
                        </div>
                    </div>
                    <div className="space fee income-tax">
                        <div className="container">
                            <div className="name">Income Tax</div>
                            <div className="diamond"></div>
                            <div className="instructions">Pay 10%<br/>or<br/>$200</div>
                        </div>
                    </div>
                    <div className="space property">
                        <div className="container">
                            <div className="color-bar dark-purple"></div>
                            <div className="name">Virginia Avenue</div>
                            <div className="price">Price $140</div>
                        </div>
                    </div>
                    <div className="space community-chest">
                        <div className="container">
                            <div className="name">Community Chest</div>
                            <i className="drawing fa fa-cube"></i>
                            <div className="instructions">Follow instructions on top card</div>
                        </div>
                    </div>
                    <div className="space property">
                        <div className="container">
                            <div className="color-bar dark-purple"></div>
                            <div className="name three-line-name">St.James Avenue</div>
                            <div className="price">Price $50</div>
                        </div>
                    </div>
                </div>

                <div className="space corner jail">
                    <div className="just">Just</div>
                    <div className="drawing">
                        <div className="container">
                            <div className="name">In</div>
                            <div className="window">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <i className="person fa fa-frown-o"></i>
                            </div>
                            <div className="name">Jail</div>
                        </div>
                    </div>
                    <div className="visiting">Visiting</div>
                </div>

                <div className="row vertical-row left-row">
                    <div className="space property">
                        <div className="container">
                            <div className="color-bar orange"></div>
                            <div className="name">New York Avenue</div>
                            <div className="price">Price $200</div>
                        </div>
                    </div>
                    <div className="space property">
                        <div className="container">
                            <div className="color-bar orange"></div>
                            <div className="name">Tennessee Avenue</div>
                            <div className="price">Price $180</div>
                        </div>
                    </div>
                    <div className="space community-chest">
                        <div className="container">
                            <div className="name">Community Chest</div>
                            <i className="drawing fa fa-cube"></i>
                            <div className="instructions">Follow instructions on top card</div>
                        </div>
                    </div>
                    <div className="space property">
                        <div className="containenr">
                            <div className="color-bar orange"></div>
                            <div className="name">Public School</div>
                            <div className="price">Price $180</div>
                        </div>
                    </div>
                    <div className="space railroad">
                        <div className="container">
                            <div className="name long-name">Pennsylvania Railroad</div>
                            <i className="drawing fa fa-subway"></i>
                            <div className="price">Price $200</div>
                        </div>
                    </div>
                    <div className="space property">
                        <div className="container">
                            <div className="color-bar purple"></div>
                            <div className="name">Virginia Avenue</div>
                            <div className="price">Price $100</div>
                        </div>
                    </div>
                    <div className="space property">
                        <div className="container">
                            <div className="color-bar purple"></div>
                            <div className="name">States Avenue</div>
                            <div className="price">Price $140</div>
                        </div>
                    </div>
                    <div className="space utility electric-company">
                        <div className="container">
                            <div className="name">Electric Company</div>
                            <i className="drawing fa fa-lightbulb-o"></i>
                            <div className="price">Price $150</div>
                        </div>
                    </div>
                    <div className="space property">
                        <div className="container">
                            <div className="color-bar purple"></div>
                            <div className="name">St.Charles</div>
                            <div className="price">Price $140</div>
                        </div>
                    </div>
                </div>

                <div className="space corner free-parking">
                    <div className="container">
                        <div className="name">Free</div>
                        <i className="drawing fa fa-car"></i>
                        <div className="name">Parking</div>
                    </div>
                </div>

                <div className="row horizontal-row top-row">
                    <div className="space property">
                        <div className="container">
                            <div className="color-bar red"></div>
                            <div className="name">Kentucky Avenue</div>
                            <div className="price">Price $220</div>
                        </div>
                    </div>
                    <div className="space chance">
                        <div className="container">
                            <div className="name">Chance</div>
                            <i className="drawing fa fa-question blue"></i>
                        </div>
                    </div>
                    <div className="space property">
                        <div className="container">
                            <div className="color-bar red"></div>
                            <div className="name">Indiana Avenue</div>
                            <div className="price">Price $220</div>
                        </div>
                    </div>
                    <div className="space property">
                        <div className="container">
                            <div className="color-bar red"></div>
                            <div className="name">Illinios Avenue</div>
                            <div className="price">Price $200</div>
                        </div>
                    </div>
                    <div className="space railroad">
                        <div className="container">
                            <div className="name">B & O Railroad</div>
                            <i className="drawing fa fa-subway"></i>
                            <div className="price">Price $200</div>
                        </div>
                    </div>
                    <div className="space property">
                        <div className="container">
                            <div className="color-bar yellow"></div>
                            <div className="name">Atlantic Avenue</div>
                            <div className="price">Price $260</div>
                        </div>
                    </div>
                    <div className="space property">
                        <div className="container">
                            <div className="color-bar yellow"></div>
                            <div className="name">Ventnor Avenue</div>
                            <div className="price">Price $260</div>
                        </div>
                    </div>
                    <div className="space utility waterworks">
                        <div className="container">
                            <div className="name">WaterWorks</div>
                            <i className="drawing fa fa-tint"></i>
                            <div className="price">Price $120</div>
                        </div>
                    </div>
                    <div className="space property">
                        <div className="container">
                            <div className="color-bar yellow"></div>
                            <div className="name">Marvin Gardens</div>
                            <div className="price">Price $280</div>
                        </div>
                    </div>
                </div>

                <div className="space corner go-to-jail">
                    <div className="container">
                        <div className="name">Go To</div>
                        <i className="drawing fa fa-gavel"></i>
                        <div className="name">Jail</div>
                    </div>
                </div>

                <div className="row vertical-row right-row">
                    <div className="space property">
                        <div className="container">
                            <div className="color-bar green"></div>
                            <div className="name">Pacific Avenue</div>
                            <div className="price">Price $300</div>
                        </div>
                    </div>
                    <div className="space property">
                        <div className="container">
                            <div className="color-bar green"></div>
                            <div className="name three-line-name">North Carolina Avenue</div>
                            <div className="price">Price $300</div>
                        </div>
                    </div>
                    <div className="space community-chest">
                        <div className="container">
                            <div className="name">Community Chest</div>
                            <i className="drawing fa fa-cube"></i>
                            <div className="instructions">Follow Instructions on top card</div>
                        </div>
                    </div>
                    <div className="space property">
                        <div className="container">
                            <div className="color-bar green"></div>
                            <div className="name long-name">Pennsylvania Avenue</div>
                            <div className="price">Price $320</div>
                        </div>
                    </div>
                    <div className="space railroad">
                        <div className="container">
                            <div className="name">Short Line</div>
                            <i className="drawing fa fa-subway"></i>
                            <div className="price">Price $200</div>
                        </div>
                    </div>
                    <div className="space chance">
                        <div className="container">
                            <div className="name">Chance</div>
                            <i className="drawing fa fa-question"></i>
                        </div>
                    </div>
                    <div className="space property">
                        <div className="container">
                            <div className="color-bar blue"></div>
                            <div className="name">Park Avenue</div>
                            <div className="price">Price $350</div>
                        </div>
                    </div>
                    <div className="space fee luxury-tax">
                        <div className="container">
                            <div className="name">luxury Tax</div>
                            <div className="drawing fa fa-diamond"></div>
                            <div className="instructions">Pay $75.00</div>
                        </div>
                    </div>
                    <div className="space property">
                        <div className="container">
                            <div className="color-bar blue"></div>
                            <div className="name">Boardwalk</div>
                            <div className="price">Price $400</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Board;