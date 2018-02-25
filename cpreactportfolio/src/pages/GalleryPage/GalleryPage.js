import React from 'react';
import { Card, CardTitle } from 'react-materialize';

const projectInfoArr = [1, 2];

const GalleryPage = () => (
  <div>
    {
      projectInfoArr.map((result) => {
        return (
          <Card
            header={<CardTitle reveal image={result} waves='light' />}
            title={result}
            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
          >
            <p><a href="/">This is a link</a></p>
          </Card>
        )
      })
    } 
    
  
  
  </div>
);

export default GalleryPage;
