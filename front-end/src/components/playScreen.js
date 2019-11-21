import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import Context from "./../contexts/loginContext";

const PlayScreen = (props) => {

    const { setScore, score, setHighScore, highScore } = useContext(Context);

    const [answerChoices, setAnswerChoices] = useState([]);
    const [tweetChoices, setTweetChoices] = useState([]);
    const [answerId, setAnswerId] = useState();
    const [tweetId, setTweetId] = useState();
    const [randomTweet, setRandomTweet] = useState('')

    useEffect(() => {
        axios
            .get(`https://backend-guesswho.herokuapp.com/api/auth/photos`)
            .then(res => {
                console.log(res);
                setAnswerChoices(res.data);
                console.log("res.data", res.data)
            })
            .catch(err => console.log("answers error", err))
    }, [])

    useEffect(() => {
        axios
            .get(`https://backend-guesswho.herokuapp.com/api/auth/tweets`)
            .then(res => {
                console.log(res);
                setTweetChoices(res.data);
                setRandomTweet(res.data[getRandomNumber(8)])
            })
            .catch(err => console.log("tweets error", err))

        if (score > highScore) {
            setHighScore(score);
            localStorage.setItem("hs", score);
        }
    }, [score])

    useEffect(() => {
        console.log("here", tweetChoices);

    }, [tweetChoices])

    function getRandomNumber(num) {
        return Math.floor(Math.random() * Math.floor(num))
    }

    return (
        <div className="playScreen">
            <h1>Score: {score}</h1>
            <div className="answers">
                {answerChoices.map((i) => {
                    return (
                        <div onClick={(e) => {
                            e.preventDefault();
                            console.log(i.twitter_user_id);
                            console.log(randomTweet.id);
                            if (i.twitter_user_id === randomTweet.id) {
                                return setScore(score + 1);
                            } else if (i.twitter_user_id !== randomTweet.id) {

                            }
                        }}
                        > <img className="pics" src={i.pic}></img></div>
                    )
                })}
            </div>
            <div className="choices">
                <h3 className="tweets">{randomTweet.tweet}</h3>
            </div >
            <button onClick={() => {
                setScore(0);
                props.history.push("/main-screen")
            }}>Back</button>
        </div >
    );
}

export default PlayScreen;

// useEffect(() => {
    //     console.log(tweetId);
    //     console.log(answerId);
    // }, [tweetId])

    // function shuffleArray(array) {
    //     for (var i = array.length - 1; i > 0; i--) {
    //         var j = Math.floor(Math.random() * (i + 1));
    //         var temp = array[i];
    //         array[i] = array[j];
    //         array[j] = temp;
    //     }
    // }

    // const newArray = shuffleArray(tweetChoices);