import React, {FC} from 'react';
import {View} from "react-native";
import {Text} from "../Themed";
import {Feather, MaterialIcons} from "@expo/vector-icons";
import {convertTime} from "../../utils/convertTime";

type PropsType = {
    name: string
    createdAt: string
    verified: boolean
}
export const PostHeading: FC<PropsType> = ({verified, name, createdAt}) => {
    return (
        <View style={{flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flexGrow: 1}}>
            <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
                <Text style={{fontWeight: "500"}}>
                    {name}
                </Text>
                {verified && (
                    <MaterialIcons name="verified" size={14} color='#60a5fa'/>
                )}
            </View>
            <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
                <Text style={{color: "grey"}}>
                    {convertTime(createdAt)}
                </Text>
               <Feather name="more-horizontal" size={14} color="grey"/>
            </View>
        </View>
    );
};
