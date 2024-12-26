import React from 'react';
import { Container } from '@mui/material';
import NewsCard from '../NewsCard/NewsCard';
import Button from '@mui/material/Button';

const NewsContent = ({newsArray,newsResults,loadMore,setloadMore}) => {
  return (
        <Container 
        className='Content'
        sx={{
          paddingLeft: 30, 
          paddingRight: 30, 
          paddingTop: 5, 
          paddingBottom: 5,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
        maxWidth="md">
            {newsArray.map((newsItem) => (
                <NewsCard newsItem={newsItem} key={newsItem.title}/>
            ))}

            {loadMore <= newsResults && (
              <Button 
              className='loadmore'
              onClick={() => setloadMore(loadMore+20)}
              >
                Load More
              </Button>
            )}
        </Container>
  )
}

export default NewsContent