import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Container,
  Flex,
  HStack,
  useDisclosure,
  Box,
  Button,
  Text,
  Grid,
  Center,
  VStack,Input
} from "@chakra-ui/react";
import React from "react";
import Dropzone from "./Dropzone.js";
import  { useCallback ,useState} from "react";
import cuid from "cuid";



export default function Content() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [images, setImages] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
    console.log(acceptedFiles);
    acceptedFiles.map(file => {
      // Initialize FileReader browser API
      const reader = new FileReader();
      // onload callback gets called after the reader reads the file data
      reader.onload = function(e) {
        // add the image into the state. Since FileReader reading process is asynchronous, its better to get the latest snapshot state (i.e., prevState) and update it. 
        setImages(prevState => [
          ...prevState,
          { id: cuid(), src: e.target.result }
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
      return (
        <Image
          image={image}
          key={`${image.id}-image`}
        />
      );
    };
  
    // Return the list of files
    return <section className="file-list">{images.map(renderImage)}</section>;
  };
  



  return (
    <>
      <Flex margin={"auto"} width={"80%"} border={"1px solid black"}>
        <Flex flex={1} justifyContent={"space-between"}>
          <Center>
            <Text display={"block"}>Content</Text>
          </Center>

          <Button  mt={4} onClick={onOpen} display={"block"}>Create Idea</Button>
        </Flex>

        <Grid></Grid>
      </Flex>
      
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack>
              <Input variant='unstyled' placeholder='Unstyled' />
              </VStack>
              <main className="App">
      <h1 className="text-center">Drag and Drop Example</h1>
      <Dropzone onDrop={onDrop} accept={"image/*"} />
      <ImageList images={images}/>
    </main>
            </ModalBody>


            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </>
  );
}
