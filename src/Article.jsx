import './Article.css';

function Article({ cardTitle, borderColor, imgUrl }) {
    return <div className="container">
        <div className="card" style={{ borderLeft: `5px solid ${borderColor}` }}>
            <img
                src={imgUrl}
                alt="Blog Post"
            />
            <div className="content">
                <div className="card-title">{cardTitle}</div>
                <div className="author">Mahima Chaudhary &bull; 6 Comments</div>
                <div className="description">There are many variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form...</div>
                <div className="tags"><span style={{ color: borderColor }}>#Lifestyle</span> <span style={{ color: borderColor }}>#Trending</span></div>
                <div className="stats">
                    <div>&#128293; 302 Views</div>
                    <div>&#128337; 3 Min Read</div>
                </div>
            </div>
        </div>
    </div>
}


export default Article;