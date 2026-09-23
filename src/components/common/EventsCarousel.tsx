// Carousel.tsx
import { useState } from "react";
import Button from "./Button";

interface CarouselItem {
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
  image: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

function EventsCarousel({ items }: CarouselProps) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {items.map((item) => (
          <div key={item.id} className="relative w-full h-60 flex shrink-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white z-10">
              <p className="text-center mt-2 font-semibold">{item.name}</p>
              <p>{item.location}</p>
              <p>-Coming {item.date}</p>
              <p>{item.time}</p>
            </div>
          </div>
        ))}
      </div>

      <Button onClick={prev} className="absolute w-1/2 top-0 bottom-0 left-0 z-20 h-full "/>
      <Button onClick={next} className="absolute w-1/2 top-0 bottom-0 right-0 z-20 h-full"/>
    </div>
  );
}

export default EventsCarousel;