
import Calendar from 'react-calendar'; 

import Styles from "../Styles.css"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Image,
    Container,
    Flex,
    HStack,
    useDisclosure,
    Box,
    Button,
    Text,
    Grid,
    Center,
    VStack,
    Input,
    GridItem,
    Avatar,
  } from "@chakra-ui/react";
  import React from "react";
  import Dropzone from "./Dropzone.js";
  import { useCallback, useState } from "react";
  import cuid from "cuid";
  import axios from "axios";
  import { useEffect } from "react";

  const api = "45f44dd49b9df3dd10c922d7269c677e";

function Dates() {
 const [date, setDate] = useState(new Date())



return (
 <div  className={"app"}>
  
   <div className={"calendar-container" }>
     <Calendar onChange={setDate} value={date}/>
   </div>
   <div className="text-center">
      Selected date: {date.toDateString()}
   </div>
 </div>
  )

}

function CalendarExp(){
    const [Img, setImg] = useState({});
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = React.useRef(null);
    const [images, setImages] = useState([]);
    const [imgurl, setimgurl] = useState("");
    const [idea, setidea] = useState("");
    const [Data, setdata] = useState({});


    const GetData = () => {
        axios
          .get(`http://localhost:8080/data`)
          .then((res) => {
            console.log(res);
            setdata(res);
          })
          .catch((err1) => console.log(err1));
      };
    
    
      useEffect(()=>{
        GetData()
      },[])
    
    
    
      const PostData = () => {
        let obj = {
          text: idea,
          url: imgurl,
        };
    
        axios
          .post(`http://localhost:8080/data`, obj)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      };
    
      const handleinput = (e) => {
        setidea(e.target.value);
      };
    
      const onDrop = useCallback((acceptedFiles) => {
        // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
        console.log(acceptedFiles[0]);
    
        let form = new FormData();
        form.append("image", acceptedFiles[0]);
        console.log(form);
    
        axios
          .post(`https://api.imgbb.com/1/upload?key=${api}`, form)
          .then((res) => {
            console.log(res);
            setimgurl(res.data.data.display_url);
            console.log(imgurl);
          });
    
        acceptedFiles.map((file) => {
          // Initialize FileReader browser API
          const reader = new FileReader();
          // onload callback gets called after the reader reads the file data
          reader.onload = function (e) {
            // add the image into the state. Since FileReader reading process is asynchronous, its better to get the latest snapshot state (i.e., prevState) and update it.
            setImages((prevState) => [
              ...prevState,
              { id: cuid(), src: e.target.result },
            ]);
          };
          // Read the file as Data URL (since we accept only images)
          reader.readAsDataURL(file);
          return file;
        });
      }, []);
    
      // Rendering individual images
      const Image = ({ image }) => {
        return (
          <div className="file-item">
            <img alt={`img - ${image.id}`} src={image.src} className="file-img" />
           
          </div>
        );
      };
    
      // ImageList Component
      const ImageList = ({ images }) => {
        // render each image by calling Image component
        const renderImage = (image, index) => {
          return <Image image={image} key={`${image.id}-image`} />;
        };
    
        // Return the list of files
        return <section className="file-list">{images.map(renderImage)}</section>;
      };
    return(
        <Grid flexDirection={"column"} templateRows={{base:"repeat(1,1fr):",lg:"15% 500px"}}>
        <HStack p={"30px"}
          border={"1px solid black"}
          flex={1}
          justifyContent={"space-between"}
        >
          <Center>
            <Text fontWeight={"bold"}  display={"block"}>Content</Text>
          </Center>
  
          <Button color={"white"} bg={"#2c4bff"} mt={4} onClick={onOpen} display={"block"}>
            Create Idea
          </Button>
          <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create New Idea</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <VStack>
                  <Input
                    onChange={handleinput}
                    variant="unstyled"
                    placeholder="Its time for Brainstorm..."
                  />
                  <br />
                  <br />
                  <br />
                </VStack>
                <main className="App">
                  <h1 className="text-center"></h1>
                  <Dropzone onDrop={onDrop} accept={"image/*"} />
                  <ImageList images={images} />
                </main>
              </ModalBody>
  
              <ModalFooter>
                <Button
                  onClick={() => {
                    PostData();
                    GetData()
                    onClose();
  
                  }}
                 bg="#2c4bff"
                  mr={3}
                >
                  Create Post
                </Button>
                <Button onClick={onClose} border={"1px solid red"}  variant="ghost">Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </HStack>
  
        <Grid p={"30px"} gap={"15px"} >
          <Dates/>
        </Grid>
      </Grid>
    )
}

export default CalendarExp;