import Layout from "../components/Layout";
import IndexStyle from "../styles/Index.module.scss";
import Link from "next/link";
import Router from "next/router";
import Image from "next/image";
import myImg from '../public/cafeterrace_HDcropped.jpeg';
import myImg1 from '../public/monalisa_HDcropped.jpeg'
import myImg2 from '../public/orientalpoppies_HDcropped.jpg'
import myImg3 from '../public/oldguitarist_HDcropped.jpeg'
import myImg4 from '../public/creationofadam_HDcropped.jpeg'
import myImg5 from '../public/art_expo.png'


var artArray = [
  myImg, myImg1, myImg2, myImg3, myImg4
];

var imgWidth = 200;
var imgHeight = 200;

var randomImg = artArray[Math.floor(Math.random()*artArray.length)];


const Index = () => 
<Layout>
    <div className = {IndexStyle.artflex}>
      <br/>
<h1 classname = {IndexStyle.title}> About the Gallery </h1><br/>
      </div>
  <div className = {IndexStyle.featured}>
    <Image className = {IndexStyle.Images} src = {myImg5}/> 
  </div>
  <div className = {IndexStyle.artflex}>
<br/>
    <h2 classname = {IndexStyle.title}> About the Gallery </h2>
  <div className = {IndexStyle.title}>
    This gallery is designed to help experience in person events at home! Due to the current restrictions in place for COVID-19, many people are unable to leave their homes and visit places and attractions such as art galleries. Our TSA Art Exposition is created so that people are still given the opportunity to visit such attractions without having to leave the comfort of their home.
      <br/>
    <br/>
Currently, our project mostly features famous artists and their most reknowned artworks. This includes artists such as Leonardo da Vinci and Pablo Picasso. We also introduce the budding artist Pradyuman Iyer!
  </div>
<br/>
    <h2 classname = {IndexStyle.title}> Featured </h2>
    
  <div className = {IndexStyle.indexfeatured}>
  <a href="/Artworks/orientalpoppies">
  <div class="row">
<Image 
  className = {IndexStyle.Images2} 
  src = {myImg2}
  width={imgWidth}
  height={imgHeight}
/> 
  <p>Oriental Poppies</p>
  </div>
  </a>
    </div>
  <div className = {IndexStyle.indexfeatured}>
  <a href="/Artworks/oldguitarist">
   <div>
<Image 
  className = {IndexStyle.Images2} 
  src = {myImg3}
  width={imgWidth}
  height={imgHeight}
/> 
  <p>The Old Guitarist</p>
  </div>
  </a>
  </div>
  
  <div className = {IndexStyle.indexfeatured}>
  <a href="/Artworks/creationofadam">
  <div>
<Image 
  className = {IndexStyle.Images2} 
  src = {myImg4}
  width={imgWidth}
  height={imgHeight}
/> 
  <p>The Creation of Adam</p>
  </div>
  </a>
  </div>
  <div className = {IndexStyle.indexfeatured}>
  <a href="/Artworks/cafeterrace">
  <div>
<Image 
  className = {IndexStyle.Images2} 
  src = {myImg}
  width={imgWidth}
  height={imgHeight}
/> 
  <p>Cafe Terrace At Night</p>
  </div>
 
  </a>

  </div>
         <div className={IndexStyle.buffer}></div>
  </div>
  
</Layout>;
export default Index;

/*<div className={SlidesStyle.slider}>
  <Link href="#slide-1" scroll={false}>
      <a>1</a>
    </Link>
    <Link href="#slide-2" scroll={false}>
      <a>2</a>
    </Link>
    <Link href="#slide-3" scroll={false}>
      <a>3</a>
    </Link>
    <Link href="#slide-4" scroll={false}>
      <a>4</a>
    </Link>
    <Link href="#slide-5" scroll={false}>
      <a>5</a>
    </Link>
   <div className={SlidesStyle.slides}>
      <div name="slide-1" id="slide-1">
        <Image className = {SlidesStyle.Images} src={myImg} alt="Picture of the author" />
      </div>
      <div name="slide-2" id="slide-2">
         <Image className = {SlidesStyle.Images} src={myImg1} alt="Picture of the author" />
      </div>
      <div id="slide-3"> <Image className = {SlidesStyle.Images} src={myImg2} alt="Picture of the author" /></div>
      <div id="slide-4"> <Image className = {SlidesStyle.Images} src={myImg3} alt="Picture of the author" /></div>
      <div id="slide-5"> <Image className = {SlidesStyle.Images} src={myImg4} alt="Picture of the author" /></div>
    </div>
  </div>
*/