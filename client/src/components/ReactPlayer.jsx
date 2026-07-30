// import React from 'react'

// const ReactPlayer = () => {
//     return (
//         <div> <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls={false}
//             width={'960px'} height={'540px'}></ReactPlayer></div>
//     )
// }

// export default ReactPlayer


import React from 'react'
import myVideo from '/BeeGees.mp4'
import ReactPlayer from 'react-player'
const ReactPlayer2 = () => {
    return (
        // <ReactPlayer light={<img src='https://example.com/thumbnail.png' alt='Thumbnail' />} />
        // <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        <>

            <ReactPlayer

                url={myVideo}

                muted
                controls={true}
            ></ReactPlayer>
        </>

    )
}
export default ReactPlayer2






