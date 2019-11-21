import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import Context from "./../contexts/loginContext";
import { axiosWithAuth } from "./../utils/axiosWithAuth";

const PlayScreen = (props) => {

    const { credentials, setScore, score, setHighScore, highScore } = useContext(Context);

    const [answerChoices, setAnswerChoices] = useState([]);
    const [tweetChoices, setTweetChoices] = useState([]);
    const [answerId, setAnswerId] = useState();
    const [tweetId, setTweetId] = useState();
    const [randomTweet, setRandomTweet] = useState('')
    const [wrongAnswers, setWrongAnswers] = useState(0);

    ////////////////////////ANSWER CHOICE GRABBER

    useEffect(() => {
        axios
            .get(`https://backend-guesswho.herokuapp.com/api/auth/photos`)
            .then(res => {
                setAnswerChoices(res.data);
            })
            .catch(err => console.log("answers error", err))
    }, [])

    ///////////////////////// SCORE SETTER

    // useEffect(() => {
    //     if (wrongAnswers === 3) {
    //     } else {
    //         return console.log("right answer")
    //     }
    // }, [highScore])

    function tick(score) {
        setHighScore(score)
    }

    /////////////////////////TWEET RANDOMIZER

    useEffect(() => {
        axios
            .get(`https://backend-guesswho.herokuapp.com/api/auth/tweets`)
            .then(res => {
                setTweetChoices(res.data);
                setRandomTweet(res.data[getRandomNumber(8)])
            })
            .catch(err => console.log("tweets error", err))

        if (score > highScore) {
            setHighScore(score);
            localStorage.setItem("hs", score);
        }

        if (wrongAnswers === 3) {
            axiosWithAuth()
                .put(`/api/auth/users/scores/${localStorage.getItem("id")}`, { "score": highScore })
                .then(res => {
                    console.log("first res", res)
                    axiosWithAuth()
                        .get(`/api/auth/users/${localStorage.getItem("id")}`)
                        .then(res => {
                            console.log("second res", res)
                            setHighScore(res.data[3].score)
                        })
                        .catch(err => err);
                })
                .catch(err => console.log("tweets error", err))
            setScore(0);
            props.history.push("/main-screen");
        }
    }, [score, wrongAnswers])

    ////////////////////////////NUMBER RANDOMIZER

    function getRandomNumber(num) {
        return Math.floor(Math.random() * Math.floor(num))
    }

    return (
        <div className="playScreen">
            <div className="scoreAndStrikes">
                <h1>Score: {score}</h1>
                <h1>Strikes: {wrongAnswers}</h1>
            </div>
            <div className="answers">
                {answerChoices.map((i) => {
                    return (
                        <div onClick={(e) => {
                            e.preventDefault();
                            if (i.twitter_user_id === randomTweet.id) {
                                return setScore(score + 1);
                            } else if (i.twitter_user_id !== randomTweet.id) {
                                return setWrongAnswers(wrongAnswers + 1)
                            }
                        }}
                        > <img className="pics" src={i.pic}></img></div>
                    )
                })}
            </div>
            <div className="choices">
                <h3 className="tweets">Who tweeted:<br /><br />{randomTweet.tweet}</h3>
            </div >
            <button className="mainButtons" onClick={() => {
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