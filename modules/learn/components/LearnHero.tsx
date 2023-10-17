import React from "react";
import Link from 'next/link';



const LearnHero = () => {

    return(
        <div className="row">
            <header className="col-lg-8 col-md-12 col-sm-12">
                <h1 className="headline">Learn to Become a User Interface Designer</h1>
                <p className="subheadline">
                Learn how to design beautiful and user-friendly interfaces.
                </p>
            </header>

            <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="paddingleftindex">
                    <div className="pageindexs">MATERI</div>
                    <a href="#">
                        <div className="boxmenu">
                            <div className="row">
                                <div className="col-1 col-sm-1 col-md-1 col-lg-1">
                                    <div className="menunumber">01.</div>
                                </div>
                                <div className="col-11 col-sm-9 col-md-9 col-lg-9">
                                    <div className="menutext">Basic</div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="boxmenu">
                            <div className="row">
                                <div className="col-1 col-sm-1 col-md-1 col-lg-1">
                                    <div className="menunumber">02.</div>
                                </div>
                                <div className="col-11 col-sm-9 col-md-9 col-lg-9">
                                    <div className="menutext">Typography</div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="boxmenu">
                            <div className="row">
                                <div className="col-1 col-sm-1 col-md-1 col-lg-1">
                                    <div className="menunumber">03.</div>
                                </div>
                                <div className="col-11 col-sm-9 col-md-9 col-lg-9">
                                    <div className="menutext">Color</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LearnHero;