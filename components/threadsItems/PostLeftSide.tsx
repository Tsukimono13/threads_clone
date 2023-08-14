import React, {FC} from 'react';
import {useColorScheme, View, StyleSheet} from "react-native";
import {Image} from "expo-image"
import {blurhash} from "../../config/image.config";
import {Reply} from "../../type/threads";

type PropsType = {
    photo: string
    replies: Reply[]
}

const PostLeftSide: FC<PropsType> = ({photo, replies}) => {
    const currentTheme = useColorScheme();
    const borderColor = currentTheme === "light" ? "#00000020" : "#ffffff20";

    return (
        <View style={{justifyContent: "space-between"}}>
            <Image
                source={photo}
                style={styles.image}
                placeholder={blurhash}
                contentFit="cover"
                transition={500}
            />
            <View
                style={{
                    borderWidth: 1,
                    alignSelf: "center",
                    borderColor: borderColor,
                    flexGrow: 1,
                }}
            />
            <View
                style={{
                    width: 20,
                    alignItems: "center",
                    alignSelf: "center",
                    gap: 3,
                }}
            >
                {[1, 2, 3].map((index) => (
                    <Image
                        key={index}
                        source={replies[index - 1]?.author.photo}
                        style={{width: index * 8, height: index * 8, borderRadius: 15}}
                        placeholder={blurhash}
                        contentFit="cover"
                        transition={500}
                    />
                ))}
            </View>
        </View>
    );
};

export default PostLeftSide;

const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
});