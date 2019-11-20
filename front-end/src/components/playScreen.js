import React, { useState, useEffect } from 'react';
import axios from "axios";

const PlayScreen = (props) => {

    const [answerChoices, setAnswerChoices] = useState([]);
    const [tweetChoices, setTweetChoices] = useState([]);
    const [answerId, setAnswerId] = useState();
    const [tweetId, setTweetId] = useState();

    useEffect(() => {
        axios
            .get(`https://backend-guesswho.herokuapp.com/api/auth/photos`)
            .then(res => {
                console.log(res);
                setAnswerChoices(res.data);
                console.log(answerId)
            })
            .catch(err => console.log("answers error", err))

        axios
            .get(`https://backend-guesswho.herokuapp.com/api/auth/tweets`)
            .then(res => {
                console.log(res);
                setTweetChoices(res.data);
                console.log(tweetId)
            })
            .catch(err => console.log("tweets error", err))
    }, [])

    useEffect(() => {
        console.log(tweetId);
        console.log(answerId);
    }, [tweetId])

    return (
        <div className="playScreen">
            <div className="answers">
                {answerChoices.map((i) => {
                    return (
                        <div onClick={(e) => {
                            e.preventDefault();
                        }}
                        > <img className="pics" src={i.pic}></img></div>
                    )
                })}
            </div>
            <div className="tweets">
                {tweetChoices.map((i) => {
                    return (
                        <div onClick={(e) => {
                            e.preventDefault()
                            setTweetId(i.twitter_user_id)

                        }}
                        > <h3 className="pics">{i.tweet}</h3></div>
                    )
                })}
            </div >
        </div >
    );
}

export default PlayScreen;