import React from 'react';
import './App.css';
import Button from './components/Button';
import Products from "./components/Products";
import Footertiles from "./components/Footertiles";
import tas1 from './assets/bag_1.png';
import tas2 from './assets/bag_2.png';
import tas3 from './assets/bag_3.png';
import tas4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import story from './assets/our_story.png';

function App() {
  return (
     <><h1>Handbags & Purses</h1>

       <Button
           buttonText="to the collection"
       />
         <Button
             buttonText="shop all bags"
         />
         <Button
             buttonText="pre-orders"
             disabled="true"
         />

         <main>
            <Products
            Spantext="Best Seller"
            Image={tas1}
            Alternative="bag1"
            Ptext="The handy bag"
            Price="€400,-"
            />
             <Products
                 Spantext="Best Seller"
                 Image={tas2}
                 Alternative="bag2"
                 Ptext="The stylish bag"
                 Price="€250"
             />
             <Products
                 Spantext="New collection"
                 Image={tas3}
                 Alternative="bag3"
                 Ptext="The stylish bag"
                 Price="€250,-"
             />
             <Products
                 Spantext="New collection"
                 Image={tas4}
                 Alternative="bag4"
                 Ptext="The trendy bag"
                 Price="€150,-"
             />
         </main>

         <footer>
             <section>
         <Footertiles
         h2text ="OUR BRAND">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales accumsan pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas ornare mi quis magna tincidunt, vehicula dignissim orci interdum. Sed semper convallis orci nec tempor. Praesent id velit id risus aliquet laoreet.</p>
         </Footertiles>
             </section>

             <section>
         <Footertiles
             pic = {brand}
             alt="brand"
         /></section>

             <section>
         <Footertiles
             pic = {story}
             alt = "story"
         /></section>

             <section>
                 <Footertiles
             h2text ="OUR STORY">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales accumsan pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas ornare mi quis magna tincidunt, vehicula dignissim orci interdum. Sed semper convallis orci nec tempor. Praesent id velit id risus aliquet laoreet.</p>
             <p>Vestibulum sodales id diam id ullamcorper. Ut maximus, ligula lacinia efficitur pretium, arcu enim rhoncus ex, ut egestas dolor tortor vel magna. Aliquam elementum rhoncus purus ut dapibus. Sed vitae lobortis nisi, eu sodales erat. Duis mauris nisl, lacinia ac tincidunt at, pharetra ut nibh.</p>
         </Footertiles>
             </section>
         </footer>
</>
  );
}

export default App;



