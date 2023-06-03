import '../stylesheets/nopage.css';
function Nofavourite() {
    return (
        <div className="container noFav">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <div className="error-details">
                            No movie(s) marked as favourite
                        </div>
                        <div className="error-actions">
                            <a href="/" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-home"></span>
                                Take Me Home </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nofavourite