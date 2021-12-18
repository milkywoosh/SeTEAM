import { Wrap, WrapItem, Text, Center, Flex, Box, Heading, Container, Stack } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Badge } from '@chakra-ui/layout';
import { StarIcon } from '@chakra-ui/icons';
import { useContext } from 'react';
import { VidCoursesContextProvider } from '../context/AddVideoContext';
import CoursesData from '../components/CoursesData';
import { useState, useEffect } from 'react';

export default function AvailableCourses() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCourses, setLoadedCourses] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://auth-sinau-cp10-default-rtdb.firebaseio.com/indexCourses.json')
      .then(responses => {
        return responses.json();
      })
      .then(data => {
        const coursesData = [];
        for ( const key in data) {
          const courseData = {
            id: key,
            ...data[key]
          };
          coursesData.push(courseData);
        }
        setIsLoading(false);
        setLoadedCourses(coursesData);
      });
    if (isLoading) {
      return ( <section>
        <p>Loading...</p>
      </section>);
    }
  }, [isLoading]);

  return (
    <>
      <section>
        
        <CoursesData availVideos={loadedCourses} />
      </section>

    </>

  );
}