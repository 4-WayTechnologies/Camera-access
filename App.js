import {StyleSheet, Text, View, Button, Image} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
export default function Camera() {
  const [pick, setPick] = useState();
  const cam = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setPick(image);
    });
  };
  return (
    <View>
      <Text style={{textAlign: 'center', marginVertical: 10}}>
        camera access
      </Text>

      <View style={{marginVertical: 20}}>
        <Button
          title="camera"
          onPress={() => {
            cam();
          }}
        />
        {pick && (
          <Image
            source={{uri: pick.path}}
            style={{
              width: 200,
              height: 200,
              borderRadius: 50,
              marginHorizontal: 30,
              marginTop: 30,
            }}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
