import {Platform, RefreshControl, SafeAreaView, ScrollView} from 'react-native';
import LottieView from "lottie-react-native";
import {useContext, useRef} from "react";
import {ThreadContext, ThreadProvider} from "../../context/thread-context";
import ThreadsItem from "../../faeture/ThreadsItem";


export default function TabOneScreen() {
    const animationRef = useRef<LottieView>(null)
    const threads = useContext(ThreadContext)

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView contentContainerStyle={{
                paddingHorizontal: 10,
                paddingTop: Platform.select({android: 30})
            }}
                        refreshControl={<RefreshControl refreshing={false}
                                                        tintColor={'transparent'}
                                                        onRefresh={() => {
                                                            animationRef.current?.play()
                                                        }}/>}
            >
                <LottieView source={require('../../assets/animations/animation_llarjf68.json')}
                            ref={animationRef}
                            loop={false}
                            autoPlay
                            style={{height: 90, width: 90, alignSelf: "center"}}
                />
                {threads.map((thread) => (
                    <ThreadsItem key={thread.id} {...thread}/>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}


