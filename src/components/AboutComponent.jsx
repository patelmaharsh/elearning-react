import { Component } from "react";
class AboutComponent extends Component{
    render(){
        return(
            <div className="about">
                <div id="carouselExampleControls" className="carousel about-carousel text-dark bg-light slide mt-5" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div>First</div>
                        </div>
                        <div className="carousel-item">
                            <div>Second</div>
                        </div>
                        <div className="carousel-item">
                            <div>Third</div>
                        </div>
                        <div className="carousel-item">
                            <div>Fourth</div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon bg-primary" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon bg-primary" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}
export default AboutComponent;