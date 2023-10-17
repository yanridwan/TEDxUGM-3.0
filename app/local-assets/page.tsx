import Image from 'next/image';
import bgPreEvent from 'public/bgPreEvent.png';

function LocalAssets() {
  return (
    <div className="bg-grey min-h-screen text-white">
      <div className="relative">
        <Image src={bgPreEvent} alt="background" className="object-cover max-w-screen pointer-events-none" />
        <h1 className="absolute font-bold text-3xl lg:text-7xl w-full text-white top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 items-center text-center">
            Pre-Event
        </h1>
      </div>
      <div className="flex flex-col items-center mx-40">
        <h2 className="text-redTED font-bold text-4xl">Local Assets</h2>
        <p className="text-2xl text-center pt-2">
          We extend our heartfelt gratitude to our valued partners contribution, whose<br/>
          support and collaboration played a pivotal role in the success of this remarkable<br/>
          event
        </p>
        <div className="block my-10 mx-40">
          <iframe
            className="rounded-xl w-[55vw] h-[30vw]"
            src="https://www.youtube.com/embed/8J86cBKDTIs?si=MDdwmjz09mA4bCkg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-2xl mx-4 text-justify pb-48">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dolor risus, ultricies sit amet pretium eget, posuere non enim. 
          Maecenas fringilla quam sed lorem convallis, ac dignissim erat scelerisque. Mauris dui ligula, pellentesque a nisl a, scelerisque faucibus nunc. 
          Nullam porta pretium nulla, laoreet vestibulum lorem gravida sed. Fusce porttitor eros turpis, quis luctus mi sagittis id. 
          Praesent mi metus, faucibus ac metus mollis, vulputate elementum odio. Nullam vel tempus turpis, sed porttitor nibh. Nulla cursus elit vitae bibendum tristique.
        </p>
      </div>
    </div> 
  )
}

export default LocalAssets
