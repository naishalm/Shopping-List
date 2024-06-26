import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const TempButton = props => {
  return (
    <TouchableOpacity
    onPress={props.onPress}  
    >
    <Icon type='font-awesome' name={"trash"} size={30} color="#c23616" reverse={true} />
    </TouchableOpacity>
  );
};

export default TempButton;