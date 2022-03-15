import React, { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from "react-native";
  
import inAppMessaging from "@react-native-firebase/in-app-messaging";

const InAppMessaging = () => {
    const [canReceiveMessage,setCanReceiveMessage] = useState(true);
    
    const allowToReceiveMessage = async (isAllowed) => {
        setCanReceiveMessage(isAllowed);
        // Allow/Disallow user to receive messages
        await inAppMessaging().setMessagesDisplaySuppressed(
            isAllowed
        );
    };
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.titleText}>
          Integrate Firebase In-App Messaging in React Native for User
          Engagement
        </Text>
        <View style={styles.innerContainer}>
          <Text style={styles.simpleText}>
            User Can Receive Message : {canReceiveMessage ? 'Yes' : 'No'}
          </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonStyle}
            onPress={() => allowToReceiveMessage(!canReceiveMessage)}>
            <Text style={styles.buttonTextStyle}>
              {canReceiveMessage
                ? 'Disable Receiving Message'
                : 'Enable Receiving Message'}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.footerHeading}>
          React Native Firebase In-App Messaging
        </Text>
        <Text style={styles.footerText}>www.aboutreact.com</Text>
      </SafeAreaView>
    );
}

export default InAppMessaging;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    innerContainer: {
      flex: 1,
      alignItems: "center",
      padding: 35,
      justifyContent: "center",
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      padding: 20,
    },
    simpleText: {
      fontSize: 16,
      textAlign: "center",
      marginVertical: 16,
    },
    buttonTextStyle: {
      color: "white",
      fontWeight: "bold",
    },
    buttonStyle: {
      alignItems: "center",
      backgroundColor: "orange",
      padding: 10,
      width: "100%",
      marginTop: 16,
    },
    footerHeading: {
      fontSize: 18,
      textAlign: "center",
      color: "grey",
    },
    footerText: {
      fontSize: 16,
      textAlign: "center",
      color: "grey",
    },
  });