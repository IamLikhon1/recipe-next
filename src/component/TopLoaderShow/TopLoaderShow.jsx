import LoadingBar from "react-top-loading-bar";

const TopLoaderShow = ({progress,setProgress}) => {
    return (
        <LoadingBar
        color='#07332F'
        height={4}
        waitingTime={2000}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    );
};

export default TopLoaderShow;