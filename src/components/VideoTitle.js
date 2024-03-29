const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold w-5/12">{title}</h1>
        <p className="text-lg py-6 w-3/12">{overview}</p>
        <div>
            <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">Play</button>
            <button className="mx-2 bg-black text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle