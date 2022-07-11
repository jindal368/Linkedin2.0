import React from 'react'


function News() {
    return (
        <div className='col-span-1 flex flex-col p-2 '>
            <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:6929342598788579328"
                height="592"
                width="504"
                frameBorder="0"
                allowFullScreen
                title="Embedded post">
            </iframe>
        </div>
    )
}

export default News