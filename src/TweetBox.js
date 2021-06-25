import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import db from './firebase'
import "./TweetBox.css"


function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")

    const sendTweet = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            displayName: "Clint Zayd",
            username: "clint_Zayd",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:
                "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form action="">
                <div className="tweetBox__input">

                    <Avatar src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />

                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening"
                        type="text" />
                </div>

                <input
                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL" type="text" />

                <Button
                    onClick={sendTweet}
                    className="tweetBox__tweetButton" >
                    Tweet
                </Button>

            </form>
        </div>
    )
}

export default TweetBox
