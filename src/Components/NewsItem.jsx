import React from 'react'

const NewsItem =(props) => {

        let {title, description, imageurl, url, author, publishedAt,source}=props;
        return (
            <div className="card">

              <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex: '1' ,left:'80%'}}>
                      {source}
                      </span>
            <img src={!imageurl?"https://images.indianexpress.com/2022/01/bumrah-1.jpg":imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"> <small className="text-muted">By {!author?"Unknown":author} on {new Date(publishedAt).toGMTString()}</small></p>
              <a  rel="noopener" href={url} target="_blank" className="btn btn-dark">Read More</a>
            </div>
          </div>
        )
    }

export default NewsItem
