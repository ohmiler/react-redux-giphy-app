import React from 'react';

const ImageList = ({ urlList }) => {
    const list = urlList.map(url => {
        return (
            <li className="item" key={url}>
                <img className="image" src={url} alt="giphy image" />
            </li>
        );
    });
    return <ul className="list">{list}</ul>
};

export default ImageList;