import React from "react";

import DarkLayout from "../components/layout/DarkLayout";
import SEO from "../components/seo";
import Video from "../components/videoplayer/video";
import { PWD } from "../components/grid/grid";

const NotFoundPage = () => {
  return (
    <DarkLayout>
      <SEO title="404: Not found" />
      <PWD>
        <h4>Page Not Found</h4>
        <p>The internet is a big place but you still managed to get rick rolled...</p>
        <Video
          videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          videoTitle="Official Music Video on YouTube"
        />
      </PWD>
    </DarkLayout>
  )
}

export default NotFoundPage