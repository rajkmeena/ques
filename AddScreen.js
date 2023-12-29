// AddScreen.js
import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Avatar } from 'react-native-paper'; 
import * as ImagePicker from 'expo-image-picker'; 

const AddScreen = ({ navigation }) => {
  const [story, setStory] = useState('');
  const [image, setImage] = useState(null);

  const handleAddStory = () => {
    console.log('Added Story:', story, 'Image Path:', image);
    const timestamp = new Date().getTime();
    const imageFileName = `./assets/story_${timestamp}.jpg`;

    navigation.navigate('Home');
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 5,
          overflow: 'hidden',
          marginBottom: 20,
        }}
      >
        <Avatar.Image
          size={100}
          source={image ? { uri: image } : require('./assets/profile.png')}
        />
      </View>
      <Button onPress={pickImage} mode="contained">
        Choose Image
      </Button>
      <TextInput
        label="Enter your story"
        multiline
        numberOfLines={4}
        value={story}
        onChangeText={(text) => setStory(text)}
        style={{ margin: 20 }}
      />
      <Button mode="contained" onPress={handleAddStory} style={{ margin: 20 }}>
        Add Story
      </Button>
    </View>
  );
};

export default AddScreen;
