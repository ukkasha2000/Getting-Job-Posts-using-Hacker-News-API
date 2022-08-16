import React from 'react'

const JobCard = ({ data }) => {
    let text1 = "", text2 = "", check = true;
    if (data.title.includes(')')) {
        text1 = data.title.split(')');
        check = true;
    }
    else {
        text2 = data.title.split('is');
        check = false;
    }
    const newDate = new Date(data.time);
    const dateToShow = {
        date: newDate.getDate(),
        month: newDate.getMonth() + 1,
        year: newDate.getFullYear()
    }

    return (
        // <div>
        <div className="card mt-3">
            <a className='cardLink' href={data.url ? data.url : `https://news.ycombinator.com/item?id=${data.id}`} target='blank'>
                <div className="card-body">
                    <h3 className="card-title">{check ? text1[0] + ')' : text2[0]}</h3>
                    <p className="card-text">{check ? text1[1] : 'is ' + text2[1]}</p>
                    <p className="card-date">{`${dateToShow.month}/${dateToShow.date}/${dateToShow.year}`}</p>
                </div>
            </a>
        </div>
        // </div>
    )
}

export default JobCard;