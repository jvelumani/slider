import Carousel, { CarouselItem } from "./Carousel";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Carasole</h1>
      <Carousel>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
        <CarouselItem>Item 4</CarouselItem>
        <CarouselItem>Item 5</CarouselItem>
        <CarouselItem>Item 6</CarouselItem>
        <CarouselItem>Item 7</CarouselItem>
      </Carousel>
    </div>
  );
}
