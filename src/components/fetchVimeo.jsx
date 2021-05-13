import React from "react"
//URL https://player.vimeo.com/video/${'id'}/config

const fetchVimeo = ({url,vimeoId})=>{
    const [response,setResponse] = React.useState({
        thumbnailUrl:"",
        videoUrl:"",
        video:"",
    })
    const [error,setError] = React.useState(null);
    React.useEffect(async()=>{
        const fetchData = async () =>{
            try{
                fetch( url? url : `https://player.vimeo.com/video/${vimeoId}/config`)
                .then(res => res.json())
                .then(res => setResponse({
                    thumbnailUrl: res.video.thumbs['640'],
                    videoUrl: res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
                    video: res.video,
        }));
            }catch(error){
                setError(error);
            }
        }
        fetchData();
    },[])

    return({response,error});
}

export default fetchVimeo