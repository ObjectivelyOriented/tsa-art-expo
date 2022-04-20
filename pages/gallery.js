import Layout from "../components/Layout";
import IndexStyle from "../styles/Index.module.scss";
import Image from "next/image";
import myImg from '../public/cafeterrace_HDcropped.jpeg';
import myImg1 from '../public/monalisa_HDcropped.jpeg'
import myImg2 from '../public/orientalpoppies_HDcropped.jpg'
import myImg3 from '../public/oldguitarist_HDcropped.jpeg'
import myImg4 from '../public/creationofadam_HDcropped.jpeg'
import myImg5 from '../public/art_expo.png'
import myImg6 from '../public/grinch.jpg'
import myImg7 from '../public/spiderman.jpg'
import myImg8 from '../public/sunflower.jpg'
import myImg9 from '../public/superherodude.jpg'
import myImg10 from '../public/americangothicHD.jpeg'
import myImg11 from '../public/screamHD.jpeg'
import myImg12 from '../public/ermine.jpeg'

var imgWidth = 175;
var imgHeight = 175;

const Gallery = () =>
  <Layout>
    <div class = {IndexStyle.artflex}>
<h1 classname = {IndexStyle.title}> Gallery </h1>
<h2 classname = {IndexStyle.title}> Featured </h2>

    <div className={IndexStyle.dropdown}>
      <p>The Creation of Adam</p>
      <Image className = {IndexStyle.Images2} 
        src = {myImg4}
        width={imgWidth}
        height={imgHeight}
        />
      <div className={IndexStyle.dropdown_content}>
        <div className={IndexStyle.desc}><a href="/Artworks/creationofadam">See More</a></div>
      </div>
    </div>
      
   

    <div className={IndexStyle.dropdown}>
      <p>The Old Guitarist</p>
      <Image className = {IndexStyle.Images2} 
        src = {myImg3}
        width={imgWidth}
        height={imgHeight}/> 
      <div className={IndexStyle.dropdown_content}>
        <div className={IndexStyle.desc}><a href="/Artworks/oldguitarist">See More</a></div>
      </div>
    </div>

    <div className={IndexStyle.dropdown}>
      <p>Oriental Poppies</p>
      <Image className = {IndexStyle.Images2} 
        src = {myImg2}
        width={imgWidth}
        height={imgHeight}/>
      <div className={IndexStyle.dropdown_content}>
        <div className={IndexStyle.desc}><a href="/Artworks/orientalpoppies">See More</a></div>
      </div>
    </div>
   

    <div className={IndexStyle.dropdown}>
      <p>Cafe Terrace At Night</p>
      <Image className = {IndexStyle.Images2} 
        src = {myImg}
        width={imgWidth}
        height={imgHeight}/>
      <div className={IndexStyle.dropdown_content}>
        <div className={IndexStyle.desc}><a href="/Artworks/cafeterrace">See More</a>           </div>
      </div>
    </div>
</div>
    <div class = {IndexStyle.buffer}> </div>
    <div class = {IndexStyle.artflex}>
<h2 classname = {IndexStyle.title}> Featured Artist </h2>
  <div classname = {IndexStyle.title}>
    Pradyuman Iyer, or Manu, is a 17 year old artist who got into art in 2016 after finding a love for comic books. As an artist, he plans on becoming an animator and working at an animation studio, preferably Disney, Marvel, or Pixar. He likes to work with alcohol based markers and fine liners and finds his inspiration from other comic book styles. Follow more of his work on his Instagram @good_after_noob
  </div>
    <div className={IndexStyle.dropdown}>
      <p>The Grinch</p>
      <Image className = {IndexStyle.Images2} 
        src = {myImg6}
        width={imgWidth}
        height={imgHeight}
        />
      <div className={IndexStyle.dropdown_content}>
        <div className={IndexStyle.desc}><a href="/Artworks/grinch">See More</a>           </div>
      </div>
      </div>
    

   
    <div className={IndexStyle.dropdown}>
      <p>Freefall</p>
      <Image className = {IndexStyle.Images2} 
        src = {myImg7}
        width={imgWidth}
        height={imgHeight}
        />
      <div className={IndexStyle.dropdown_content}>
        <div className={IndexStyle.desc}><a href="/Artworks/spiderman">See More</a>           </div>
      </div>
      </div>
    

    
    <div className={IndexStyle.dropdown}>
      <p>Chocolate Sunflower</p>
      <Image className = {IndexStyle.Images2} 
        src = {myImg8}
        width={imgWidth}
        height={imgHeight}
        />
      <div className={IndexStyle.dropdown_content}>
        <div className={IndexStyle.desc}><a href="/Artworks/sunflower">See More</a>           </div>
      </div>
      </div>
    

    
    <div className={IndexStyle.dropdown}>
      <p>Thanos</p>
      <Image className = {IndexStyle.Images2} 
        src = {myImg9}
        width={imgWidth}
        height={imgHeight}
        />
      <div className={IndexStyle.dropdown_content}>
        <div className={IndexStyle.desc}><a href="/Artworks/superhero">See More</a>           </div>
      </div>
      </div>
    </div>

    <div class = {IndexStyle.buffer}> </div>

    <div class = {IndexStyle.artflex}>
<h2 classname = {IndexStyle.title}> Collections by Artwork Style </h2>
    <h3> Oil Paintings </h3>
    <div className={IndexStyle.dropdown}>
      <p>American Gothic</p>
      <Image className = {IndexStyle.Images2} 
        src = {myImg10}
        width={imgWidth}
        height={imgHeight}
        />
      <div className={IndexStyle.dropdown_content}>
        <div className={IndexStyle.desc}><a href="/Artworks/americangothic">See More</a>           </div>
      </div>
      </div>

      <div className={IndexStyle.dropdown}>
      <p> Scream </p>
      <Image className = {IndexStyle.Images2} 
        src = {myImg11}
        width={imgWidth}
        height={imgHeight}
        />
      <div className={IndexStyle.dropdown_content}>
        <div className={IndexStyle.desc}><a href="/Artworks/scream">See More</a>           </div>
      </div>
      </div>

       <div className={IndexStyle.dropdown}>
      <p>Mona Lisa</p>
      <Image className = {IndexStyle.Images2} 
        src = {myImg1}
        width={imgWidth}
        height={imgHeight}/> 
      <div className={IndexStyle.dropdown_content}>
        <div className={IndexStyle.desc}><a href="/Artworks/monalisa">See More</a></div>
      </div>
    </div>

       <div className={IndexStyle.dropdown}>
      <p> Lady With an Ermine</p>
      <Image className = {IndexStyle.Images2} 
        src = {myImg12}
        width={imgWidth}
        height={imgHeight}/> 
      <div className={IndexStyle.dropdown_content}>
        <div className={IndexStyle.desc}><a href="/Artworks/ermine">See More</a></div>
      </div>
    </div>

      <div className={IndexStyle.buffer}></div>
      </div>
  </Layout>

export default Gallery;