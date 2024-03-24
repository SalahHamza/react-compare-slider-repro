import "./App.css";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  useReactCompareSliderRef,
} from "react-compare-slider";

function App() {
  const reactCompareSliderRef = useReactCompareSliderRef();

  return (
    <div className="App">
      <ReactCompareSlider
        ref={reactCompareSliderRef}
        itemOne={
          <ReactCompareSliderImage
            src="https://raw.githubusercontent.com/nerdyman/stuff/main/libs/react-compare-slider/demo-images/sydney-opera-house-1.jpg"
            alt="Image one"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src="https://raw.githubusercontent.com/nerdyman/stuff/main/libs/react-compare-slider/demo-images/sydney-opera-house-2.jpg"
            alt="Image two"
          />
        }
        onlyHandleDraggable
      />
    </div>
  );
}

export default App;
