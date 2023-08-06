function About() {
    return (
  <div className=" relative bg-white min-h-screen">
    <div>
    <div className="flex flex-row-reverse">
    <img src="/about/About TED.svg" className=" absolute h-64 w-70 mr-10 "/>
    <h1 className="absolute text-black text-xl text-justify mr-10 ml-10 mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dolor risus, ultricies sit amet pretium eget, posuere non enim. Maecenas fringilla quam sed lorem convallis, ac dignissim erat scelerisque. Mauris dui ligula, pellentesque a nisl a, scelerisque faucibus nunc. Nullam porta pretium nulla, laoreet vestibulum lorem gravida sed. Fusce porttitor eros turpis, quis luctus mi sagittis id. Praesent mi metus, faucibus ac metus mollis, vulputate elementum odio. Nullam vel tempus turpis, sed porttitor nibh. Nulla cursus elit vitae bibendum tristique.</h1>
    </div>
    <div>
        <h1 className="text-red-600 font-bold text-8xl mt-20 ml-36">About</h1>
        <h1 className="text-red-600 font-bold text-8xl ml-36"> TED</h1>
    </div>
    </div>
    <div className="flex flex-row">
    <img src="/about/About TED.svg" className=" absolute h-64 w-70 mr-10 mt-56"/>
    <div className="flex flex-row-reverse">
        <h1 className="absolute text-red-600 font-bold text-8xl mt-36 mr-36">About</h1>
        <h1 className="absolute text-red-600 font-bold text-8xl mr-48 mt-64">TEDx</h1>
    </div>
    </div>
</div>
  )
}

export default About
