import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar, Card } from 'react-native-elements';
import Modal from 'react-native-modal';
import ProgressBar from 'react-native-progress/Bar';
import { Button } from 'react-native-elements';

const ViewScreen = () => {
  const [story, setStory] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [storyViewed, setStoryViewed] = useState(false);

  const showModal = () => {
    setModalVisible(true);
    startProgressBar();
  };

  const hideModal = () => {
    setModalVisible(false);
    setProgress(0);
    setStoryViewed(true);
  };

  const startProgressBar = () => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev < 1) {
          return prev + 0.05;
        } else {
          clearInterval(timer);
          hideModal();
          return 0;
        }
      });
    }, 500);
  };

  useEffect(() => {
    const fetchedStory = "This is a sample story.";
    setStory(fetchedStory);
  }, []);

  const openStoryView = () => {
    console.log('Open story view');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={storyViewed ? openStoryView : showModal}>
        <View style={{ alignItems: 'center' }}>
          <Avatar
            rounded
            size="xlarge"
            source={{ uri: './assets/profile.png' }}
            containerStyle={{
              marginBottom: 20,
              borderWidth: storyViewed ? 2 : 0,
              borderColor: 'gray',
              borderRadius: 5,
            }}
          />
          {storyViewed && (
            <Text style={{ color: 'gray', fontSize: 12 }}>Story Viewed</Text>
          )}
        </View>
      </TouchableOpacity>

      <Text style={{ margin: 20, fontSize: 16 }}>{story || 'No story available'}</Text>

      <Modal isVisible={isModalVisible} backdropOpacity={0.8}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Card containerStyle={{ borderRadius: 10, overflow: 'hidden' }}>
            <Card.Image
              source={{ uri: 'default-profile.jpg' }}
              style={{ width: '100%', height: 200 }}
            />
            <Card.Divider />
            <Text style={{ marginBottom: 10, fontSize: 18, fontWeight: 'bold' }}>
            SUCH AN AMAZING
NEWS! YOU MUST
READ THIS!
            </Text>
            <ProgressBar progress={progress} width={null} />
            <Text style={{ marginTop: 10, marginBottom: 20 }}>
              Reviews
            </Text>
            <Button title="Close" onPress={hideModal} />
          </Card>
        </View>
      </Modal>
    </View>
  );
};

export default ViewScreen;
