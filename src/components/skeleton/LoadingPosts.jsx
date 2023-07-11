import Dots from "./Dots";
import SkeletonContent from "./LoadingContent";



const Skeleton = () =>{
    return(
     <div className="skeleton">
      <Dots/>
      <SkeletonContent/>
      <SkeletonContent/>
      <SkeletonContent/>
      </div>
 
    )
 }
 
 export default Skeleton;