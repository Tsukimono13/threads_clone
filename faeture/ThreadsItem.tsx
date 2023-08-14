import React, {FC} from 'react';
import {Thread} from "../type/threads";
import {StyleSheet, View} from "react-native";
import {Text} from '../components/Themed'
import {PostHeading} from "../components/threadsItems/PostHeading";
import PostFooter from "../components/threadsItems/PostFooter";
import {BottomIcons} from "../components/threadsItems/BottomIcons";
import {Image} from "expo-image"
import PostLeftSide from "../components/threadsItems/PostLeftSide";
import {blurhash} from "../config/image.config";


const ThreadsItem = (thread: Thread) => {
    return (
        <View style={{flexDirection: 'row', gap: 6, paddingBottom: 30}}>
            <PostLeftSide photo={thread.author.photo} replies={thread.replies || []}/>
            <View style={{gap: 6, flexShrink: 1}}>
                <PostHeading name={thread.author.name}
                             createdAt={thread.createdAt}
                             verified={thread.author.verified}
                />
                <Text>{thread.content}</Text>
                {thread.image && (
                    <Image source={thread.image}
                           style={{width: '100%', minHeight: 300, borderRadius: 10}}
                           placeholder={blurhash}
                           contentFit="cover"
                           transition={200}
                    />
                )}
                <BottomIcons/>
                <PostFooter replies={thread.repliesCount} likes={thread.likesCount}/>
            </View>
        </View>
    );
};

export default ThreadsItem;
