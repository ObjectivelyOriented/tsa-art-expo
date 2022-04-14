import Layout from "../components/Layout";
import IndexStyle from "../styles/Index.module.scss";

const About = () => 
  <Layout>
    <div className = {IndexStyle.title}>
  <h2>About Our Website</h2>
  
  <p> This is our TSA Art Expo featuring several artists and artworks! Our collections consist of several different types of art, such as different mediums and eras in the artistic world.</p>
  
  <p>Designed and developed by Zion Onwujuba and Smithi Balan</p>

  <h3> Resources </h3>
        <p>https://commons.wikimedia.org/wiki/File:Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_(Yorck).jpg</p>

    <p>https://en.wikipedia.org/wiki/File:Old_guitarist_chicago.jpg</p>
      
<p>https://en.wikipedia.org/wiki/File:Grant_DeVolson_Wood_-_American_Gothic.jpg</p>

<p>https://www.overstockart.com/painting/the-scream</p>
      <p>https://commons.wikimedia.org/wiki/File:Creaci%C3%B3n_de_Ad%C3%A1n.jpg</p>

<p>https://en.wikipedia.org/wiki/File:Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg</p>

<p>https://www.wikiart.org/en/georgia-o-keeffe/oriental-poppies</p>
</div>
  </Layout>;
export default About;