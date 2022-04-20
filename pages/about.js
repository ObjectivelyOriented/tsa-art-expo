import Layout from "../components/Layout";
import IndexStyle from "../styles/Index.module.scss";

const About = () => 
  <Layout>
        <div className = {IndexStyle.about}>
    <div className = {IndexStyle.title}>
  <h1>About Our Website</h1>
  
  <p> This is our TSA Art Expo featuring several artists and artworks! Our collections consist of several different types of art, such as different mediums and eras in the artistic world.</p>
  
  <p>Designed and developed by Zion Onwujuba and Smithi Balan</p>

<h2> Resources </h2>
      <p>All information used in the artworks is based on research in Wikipedia</p>
      <p>https://en.wikipedia.org/wiki/Main_Page</p>
  <h2> Image Resources </h2>
        <p>https://commons.wikimedia.org/wiki/File:Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_(Yorck).jpg</p>

    <p>https://en.wikipedia.org/wiki/File:Old_guitarist_chicago.jpg</p>
      
<p>https://en.wikipedia.org/wiki/File:Grant_DeVolson_Wood_-_American_Gothic.jpg</p>

<p>https://www.overstockart.com/painting/the-scream</p>
      <p>https://commons.wikimedia.org/wiki/File:Creaci%C3%B3n_de_Ad%C3%A1n.jpg</p>

<p>https://en.wikipedia.org/wiki/File:Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg</p>

<p>https://www.wikiart.org/en/georgia-o-keeffe/oriental-poppies</p>

<h2> Frameworks </h2>
      <h3>Next JS</h3>
<p>The MIT License (MIT) Copyright (c) 2022 Vercel, Inc. Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>

      <h3>Sass</h3>
<p>Copyright (c) 2022, Google Inc. Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
</div>
<div className={IndexStyle.buffer}></div>
          </div>
  </Layout>;
export default About;